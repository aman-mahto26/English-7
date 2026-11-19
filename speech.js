// ==========================================================================
// Web Speech API Controller (Dual-Speed Indian English TTS)
// Fixed Chrome cancel bug, ultra-clear 0.5x slow mode, paragraph reader
// ==========================================================================

class SpeechController {
  constructor() {
    this.synth = window.speechSynthesis;
    this.selectedVoice = null;
    this.availableVoices = [];
    this.isSpeaking = false;
    this.speedMode = "normal"; // "normal" (0.95x) or "slow" (0.5x)
    this.onSpeakingStateChange = null;
    this.paragraphTimer = null;
    this.isReadingParagraph = false;

    this.initVoices();
  }

  initVoices() {
    if (!this.synth) {
      console.warn("Speech Synthesis not supported by this browser.");
      return;
    }

    const load = () => {
      this.availableVoices = this.synth.getVoices();
      
      // Preferred order: en-IN (Indian English) -> en-GB -> en-US -> any English
      const inVoice = this.availableVoices.find(v => 
        (v.lang === "en-IN" || v.lang.startsWith("en-IN") || v.name.toLowerCase().includes("india"))
      );
      const enVoice = this.availableVoices.find(v => v.lang.startsWith("en"));
      
      this.selectedVoice = inVoice || enVoice || this.availableVoices[0] || null;
    };

    load();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = load;
    }
  }

  setSpeedMode(mode) {
    this.speedMode = mode === "slow" ? "slow" : "normal";
  }

  getRate() {
    return this.speedMode === "slow" ? 0.52 : 0.92;
  }

  stop() {
    this.isReadingParagraph = false;
    if (this.paragraphTimer) {
      clearTimeout(this.paragraphTimer);
      this.paragraphTimer = null;
    }

    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      if (this.onSpeakingStateChange) this.onSpeakingStateChange(false);
    }
  }

  // Reliable speak method that fixes Chromium synchronous cancel bug
  speak(text, options = {}) {
    if (!this.synth || !text) return;

    this.stop();

    // 0.5x for slow mode so it's unmistakably slow and articulated
    const isSlow = options.slow === true || this.speedMode === "slow";
    const rate = options.rate || (isSlow ? 0.50 : 0.92);
    const pitch = options.pitch || (isSlow ? 0.95 : 1.0);

    const cleanText = text.replace(/[\,\!]/g, "").trim();

    // Small timeout ensures Chrome cancel doesn't drop the subsequent speak call
    setTimeout(() => {
      try {
        if (this.synth.paused) {
          this.synth.resume();
        }

        const utterance = new SpeechSynthesisUtterance(cleanText);

        if (this.selectedVoice) {
          utterance.voice = this.selectedVoice;
        }

        utterance.rate = rate;
        utterance.pitch = pitch;
        utterance.lang = this.selectedVoice ? this.selectedVoice.lang : "en-IN";

        utterance.onstart = () => {
          this.isSpeaking = true;
          if (this.onSpeakingStateChange) this.onSpeakingStateChange(true, cleanText);
          if (options.onStart) options.onStart();
        };

        utterance.onend = () => {
          this.isSpeaking = false;
          if (this.onSpeakingStateChange) this.onSpeakingStateChange(false);
          if (options.onEnd) options.onEnd();
        };

        utterance.onerror = (e) => {
          this.isSpeaking = false;
          if (this.onSpeakingStateChange) this.onSpeakingStateChange(false);
          if (options.onError) options.onError(e);
        };

        this.synth.speak(utterance);
      } catch (err) {
        console.warn("Speech error:", err);
        if (options.onError) options.onError(err);
      }
    }, 25);
  }

  // Speaks an entire paragraph sentence-by-sentence so Chrome never times out
  async speakParagraph(sentences, options = {}) {
    this.stop();
    this.isReadingParagraph = true;

    const isSlow = options.slow === true;
    const rate = options.rate || (isSlow ? 0.55 : 0.92);

    for (let i = 0; i < sentences.length; i++) {
      if (!this.isReadingParagraph) break;

      const sentence = sentences[i].trim();
      if (!sentence) continue;

      if (options.onSentence) {
        options.onSentence(i, sentence);
      }

      await this.speakPromise(sentence, { rate, slow: isSlow });
      // Natural breath pause between sentences
      await this.delay(isSlow ? 380 : 220);
    }

    this.isReadingParagraph = false;
    if (options.onFinish) {
      options.onFinish();
    }
  }

  speakPromise(text, options = {}) {
    return new Promise((resolve) => {
      if (!this.synth || !text) {
        resolve();
        return;
      }

      const rate = options.rate || (options.slow ? 0.50 : 0.92);

      setTimeout(() => {
        try {
          if (this.synth.paused) {
            this.synth.resume();
          }

          const utterance = new SpeechSynthesisUtterance(text.trim());
          if (this.selectedVoice) utterance.voice = this.selectedVoice;
          utterance.rate = rate;
          utterance.pitch = options.pitch || 1.0;
          utterance.lang = this.selectedVoice ? this.selectedVoice.lang : "en-IN";

          utterance.onend = () => resolve();
          utterance.onerror = () => resolve();
          this.synth.speak(utterance);
        } catch (e) {
          resolve();
        }
      }, 20);
    });
  }

  // Sequential phoneme playback for the Blending Machine
  async speakBlendSequence(phonemes, fullWord, onStep, onFinish) {
    this.stop();

    for (let i = 0; i < phonemes.length; i++) {
      if (onStep) onStep(i, phonemes[i]);
      await this.speakPromise(phonemes[i], { rate: 0.55, pitch: 1.05 });
      await this.delay(260);
    }

    // Pause briefly before saying the final blended word
    await this.delay(350);
    if (onStep) onStep("blend", fullWord);
    await this.speakPromise(fullWord, { rate: 0.88, pitch: 1.0 });

    if (onFinish) onFinish();
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Global instance
window.speech = new SpeechController();
