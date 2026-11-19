// ==============================================================================
// English Reading Guru (अंग्रेज़ी पढ़ना सीखें) — Complete Application Controller
// Ultra-Friendly, No Cramped Tabs, Pure Step-by-Step Hindi-English Phonics
// ==============================================================================

class PhonicsApp {
  constructor() {
    this.D = window.PHONICS_DATA;
    this.S = window.speech;

    // Navigation & View State: 'hub' (all levels) or 1..7 (specific level)
    this.currentView = 'hub';
    this.showHindiHint = true;
    this.speedMode = 'normal'; // 'normal' | 'slow'
    this.activeFilter = 'all';
    this.level1Mode = 'abcd'; // 'abcd' | 'patterns'
    this.masteredWords = new Set();
    this.dailyStreak = 1;

    // Track open accordions: { levelNum: Set of open item IDs }
    this.openAccordions = {};

    // Practice Modal State
    this.practiceQueue = [];
    this.practiceIdx = 0;
    this.isPracticeRevealed = false;

    // Level Hub Meta (7 Core Guided Levels)
    this.levelsMeta = [
      {
        level: 1,
        title: "लेवल 1: एबीसीडी और बोलने का तरीका (Alphabet & Mouth Guide)",
        summary: "A से Z तक हर अक्षर का नाम, उसकी प्राथमिक आवाज़, और मुंह, होंठ व जीभ की सही स्थिति (Mouth Articulation) सीखें",
        icon: "👄",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        tags: ["26 अक्षर उच्चारण", "Mouth Shapes सचित्र गाइड", "अक्षर का नाम vs आवाज़", "मुंह-होंठ-जीभ गाइड"],
        countText: "26 अक्षर • सचित्र माउथ गाइड"
      },
      {
        level: 2,
        title: "लेवल 2: अंग्रेज़ी की 44 ध्वनियां (The 44 Phonemes Master System)",
        summary: "अंग्रेज़ी की सभी 44 आवाज़ें (स्वर, दीर्घ स्वर, डिप्थॉन्ग व व्यंजन) 300+ शब्दों की विशेष कहानियों के साथ",
        icon: "🎵",
        badgeColor: "#7C3AED",
        badgeBg: "#EDE9FE",
        tags: ["7 छोटे स्वर", "5 बड़े स्वर", "8 दोहरे स्वर", "24 व्यंजन ध्वनियां"],
        countText: "44 ध्वनियां • 300+ शब्दों के 44 पैराग्राफ"
      },
      {
        level: 3,
        title: "लेवल 3: दो अक्षरों का जोड़ (2-Letter Word Builder)",
        summary: "जैसे हिंदी में अ+ब=अब, वैसे ही A+T=एट, I+N=इन, G+O=गो, T+O=टू। जोड़कर पढ़ना सीखें",
        icon: "⚡",
        badgeColor: "#059669",
        badgeBg: "#D1FAE5",
        tags: ["At, In, Go, To, Do", "इंटरएक्टिव ब्लेंडिंग मशीन", "300+ शब्दों के पैराग्राफ"],
        countText: "5 वर्ड फैमिलीज • 300+ शब्दों के 5 पैराग्राफ"
      },
      {
        level: 4,
        title: "लेवल 4: तीन अक्षरों के CVC शब्द (3-Letter Word Families)",
        summary: "व्यंजन + स्वर + व्यंजन (Cat, Pen, Dog, Sun)। एक Family सीखें और 8 शब्द आसानी से पढ़ें",
        icon: "🧱",
        badgeColor: "#D97706",
        badgeBg: "#FEF3C7",
        tags: ["-AT Family (Cat, Bat)", "-AN Family (Fan, Van)", "-EN, -IN, -OT, -UN"],
        countText: "6 CVC फैमिलीज • 300+ शब्दों के 6 पैराग्राफ"
      },
      {
        level: 5,
        title: "लेवल 5: चार अक्षर, Blends और जादुई E (Magic-E Rules)",
        summary: "Sh=श, Ch=च, Th=थ/द, Ph=फ़ और जादुई E का नियम (Kit से बनता है Kite, Make, Time, Home)",
        icon: "✨",
        badgeColor: "#EA580C",
        badgeBg: "#FFEDD5",
        tags: ["SH, CH, TH, PH ध्वनियां", "संयुक्त अक्षर (St, Bl, Tree)", "जादुई Silent E नियम"],
        countText: "7 ब्लेंड्स व Magic-E • 300+ शब्दों के 7 पैराग्राफ"
      },
      {
        level: 6,
        title: "लेवल 6: बड़े शब्दों को तोड़कर पढ़ना (Word Chunking)",
        summary: "बड़े शब्दों से डरना बंद करें! उन्हें 2 या 3 छोटे टुकड़ों में तोड़कर आसानी से पढ़ना सीखें",
        icon: "🧩",
        badgeColor: "#2563EB",
        badgeBg: "#DBEAFE",
        tags: ["Doc+tor = डॉक्टर", "Com+pu+ter = कंप्यूटर", "Hos+pi+tal = हॉस्पिटल"],
        countText: "2 व 3 सिलेबल चंकिंग • 300+ शब्दों के 3 पैराग्राफ"
      },
      {
        level: 7,
        title: "लेवल 7: असली दुनिया पढ़ना (Signs, Mobile UI & Stories)",
        summary: "मेट्रो, अस्पताल, दुकान के साइनबोर्ड, मोबाइल स्क्रीन के शब्द और रोचक छोटी कहानियां पढ़ें",
        icon: "🏆",
        badgeColor: "#16A34A",
        badgeBg: "#DCFCE7",
        tags: ["रेलवे व अस्पताल साइनबोर्ड", "मोबाइल स्क्रीन शब्द", "दैनिक वाक्य", "कहानियां"],
        countText: "25+ साइनबोर्ड व वाक्य"
      }
    ];

    this.initStorage();
    this.initDOM();
    this.render();
  }

  // --------------------------------------------------------------------------
  // STORAGE & PERSISTENCE
  // --------------------------------------------------------------------------
  initStorage() {
    try {
      const savedMastered = localStorage.getItem("guru_mastered");
      if (savedMastered) this.masteredWords = new Set(JSON.parse(savedMastered));

      const savedHint = localStorage.getItem("guru_hint");
      if (savedHint !== null) this.showHindiHint = savedHint === "true";

      const savedSpeed = localStorage.getItem("guru_speed");
      if (savedSpeed) {
        this.speedMode = savedSpeed;
        this.S.setSpeedMode(savedSpeed);
      }

      // Check daily streak
      const today = new Date().toISOString().slice(0, 10);
      const last = localStorage.getItem("guru_last_date");
      const streak = parseInt(localStorage.getItem("guru_streak") || "1", 10);

      if (last) {
        const diff = Math.round((new Date(today) - new Date(last)) / 86400000);
        this.dailyStreak = diff === 1 ? streak + 1 : diff === 0 ? streak : 1;
      } else {
        this.dailyStreak = 1;
      }

      localStorage.setItem("guru_last_date", today);
      localStorage.setItem("guru_streak", String(this.dailyStreak));
    } catch (e) {
      console.warn("Storage warning:", e);
    }
  }

  saveStorage() {
    try {
      localStorage.setItem("guru_mastered", JSON.stringify([...this.masteredWords]));
      localStorage.setItem("guru_hint", String(this.showHindiHint));
      localStorage.setItem("guru_speed", this.speedMode);
    } catch (e) {}
  }

  // --------------------------------------------------------------------------
  // DOM LISTENERS
  // --------------------------------------------------------------------------
  initDOM() {
    // Top Bar Home Buttons
    document.getElementById("btnGoHome")?.addEventListener("click", () => this.goHome());
    document.getElementById("btnNavHome")?.addEventListener("click", () => this.goHome());

    // Header Chips
    document.getElementById("chipHint")?.addEventListener("click", () => this.toggleHint());
    document.getElementById("chipSpeed")?.addEventListener("click", () => this.toggleSpeed());
    document.getElementById("chipBadges")?.addEventListener("click", () => this.openBadgesModal());

    // Practice Modal Events
    document.getElementById("modalClose")?.addEventListener("click", () => this.closePracticeModal());
    document.getElementById("modalReveal")?.addEventListener("click", () => this.revealPracticeWord());
    document.getElementById("modalGotIt")?.addEventListener("click", () => this.markPracticeWord(true));
    document.getElementById("modalTryAgain")?.addEventListener("click", () => this.markPracticeWord(false));

    document.getElementById("modalOverlay")?.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) this.closePracticeModal();
    });

    this.updateHeaderUI();
  }

  updateHeaderUI() {
    // Streak
    const streakEl = document.getElementById("streakLabel");
    if (streakEl) streakEl.textContent = `🔥 ${this.dailyStreak} दिन स्ट्रीक`;

    // Mastered count
    const countEl = document.getElementById("masteredCount");
    if (countEl) countEl.textContent = `${this.masteredWords.size} सीखे`;

    // Hint button
    const hintEl = document.getElementById("chipHint");
    if (hintEl) {
      hintEl.textContent = this.showHindiHint ? "👁️ उच्चारण: चालू" : "🙈 उच्चारण: छिपा है";
      hintEl.classList.toggle("on", this.showHindiHint);
    }

    // Speed button
    const speedEl = document.getElementById("chipSpeed");
    if (speedEl) {
      speedEl.textContent = this.speedMode === "slow" ? "🐢 आवाज़: धीमी (0.5x)" : "⚡ आवाज़: सामान्य (1.0x)";
      speedEl.classList.toggle("on", this.speedMode === "slow");
    }
  }

  toggleHint() {
    this.showHindiHint = !this.showHindiHint;
    this.saveStorage();
    this.updateHeaderUI();
    document.querySelectorAll(".r-hindi-word, .tw-hin, .sw-hin, .chunk-hin, .sb-hin-text, .sound-hindi-sound")
      .forEach(el => {
        el.style.visibility = this.showHindiHint ? "" : "hidden";
      });
  }

  toggleSpeed() {
    this.speedMode = this.speedMode === "normal" ? "slow" : "normal";
    this.S.setSpeedMode(this.speedMode);
    this.saveStorage();
    this.updateHeaderUI();
  }

  goHome() {
    this.S.stop();
    this.currentView = "hub";
    this.render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  openLevel(levelNum) {
    this.S.stop();
    this.currentView = levelNum;
    this.activeFilter = "all";

    // Auto-open first accordion so user immediately sees rich contents
    if (!this.openAccordions[levelNum] || this.openAccordions[levelNum].size === 0) {
      this.openAccordions[levelNum] = new Set();
      if (levelNum === 1 && this.D.level1?.letters?.[0]) {
        this.openAccordions[1].add(this.D.level1.letters[0].id);
      } else if (levelNum === 2 && this.D.level2?.categories?.[0]) {
        this.openAccordions[2].add(this.D.level2.categories[0].id);
      } else if (levelNum === 3 && this.D.level3?.families?.[0]) {
        this.openAccordions[3].add(this.D.level3.families[0].id);
      } else if (levelNum === 4 && this.D.level4?.families?.[0]) {
        this.openAccordions[4].add(this.D.level4.families[0].id);
      } else if (levelNum === 5 && this.D.level5?.groups?.[0]) {
        this.openAccordions[5].add(this.D.level5.groups[0].id);
      } else if (levelNum === 6 && this.D.level6?.categories?.[0]) {
        this.openAccordions[6].add(this.D.level6.categories[0].id);
      }
    }

    this.render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --------------------------------------------------------------------------
  // RENDER CONTROLLER
  // --------------------------------------------------------------------------
  render() {
    const container = document.getElementById("appContainer");
    if (!container) return;

    if (this.currentView === "hub") {
      container.innerHTML = this.renderHubView();
    } else {
      container.innerHTML = this.renderLevelView(this.currentView);
    }

    if (!this.showHindiHint) {
      document.querySelectorAll(".r-hindi-word, .tw-hin, .sw-hin, .chunk-hin, .sb-hin-text, .sound-hindi-sound")
        .forEach(el => el.style.visibility = "hidden");
    }

    this.updateHeaderUI();
  }

  // --------------------------------------------------------------------------
  // 1. HUB / ROADMAP VIEW (Big, Clean, Inviting Cards)
  // --------------------------------------------------------------------------
  renderHubView() {
    return `
      <!-- Welcome Hero Banner -->
      <section class="hub-hero">
        <h2 class="hindi">📖 अंग्रेज़ी रीडिंग सीखें — 7 आसान चरण</h2>
        <p class="hindi">
          शून्य से धाराप्रवाह अंग्रेज़ी पढ़ना सीखें! बिना किसी व्याकरण, स्पेलिंग टेस्ट या लिखने के तनाव के।
          नीचे दिए <strong>7 चरणों</strong> में से किसी पर भी क्लिक करें और सीखना शुरू करें।
        </p>
        <div class="hub-hero-stats hindi">
          <span>🔥 स्ट्रीक: <strong>${this.dailyStreak} दिन</strong></span>
          <span>•</span>
          <span>🏅 कुल सीखे गए शब्द: <strong>${this.masteredWords.size}</strong></span>
          <span>•</span>
          <span>🎯 44 ध्वनियों के 300+ शब्दों के पैराग्राफ</span>
        </div>
      </section>

      <!-- 7 Level Cards Grid -->
      <div class="levels-grid">
        ${this.levelsMeta.map(m => `
          <div class="level-card-big" onclick="app.openLevel(${m.level})">
            <div class="level-card-top">
              <span class="level-badge-num hindi" style="background: ${m.badgeColor};">
                चरण ${m.level}
              </span>
              <span class="level-icon-huge">${m.icon}</span>
            </div>

            <h3 class="level-card-title hindi">${m.title}</h3>
            <p class="level-card-desc hindi">${m.summary}</p>

            <div class="level-card-tags">
              ${m.tags.map(t => `<span class="tag-preview-pill hindi">${t}</span>`).join('')}
            </div>

            <button class="btn-open-level hindi" style="background: ${m.badgeColor};">
              <span>लेवल ${m.level} शुरू करें</span>
              <span>➔</span>
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 2. LEVEL VIEW WRAPPER (Top Breadcrumb + Inside Level Content)
  // --------------------------------------------------------------------------
  renderLevelView(levelNum) {
    const meta = this.levelsMeta.find(m => m.level === levelNum) || this.levelsMeta[0];

    const prevLevel = levelNum > 1 ? levelNum - 1 : null;
    const nextLevel = levelNum < 7 ? levelNum + 1 : null;

    let contentHTML = "";
    switch (levelNum) {
      case 1: contentHTML = this.renderLevel1Content(); break;
      case 2: contentHTML = this.renderLevel2Content(); break;
      case 3: contentHTML = this.renderLevel3Content(); break;
      case 4: contentHTML = this.renderLevel4Content(); break;
      case 5: contentHTML = this.renderLevel5Content(); break;
      case 6: contentHTML = this.renderLevel6Content(); break;
      case 7: contentHTML = this.renderLevel7Content(); break;
    }

    return `
      <!-- Top Arrow Navigation (Minimal Apple Glass Arrow Buttons, Zero Text) -->
      <div class="level-arrow-nav-bar">
        <button class="nav-arrow-btn nav-arrow-prev" onclick="${prevLevel ? `app.openLevel(${prevLevel})` : `app.goHome()`}" aria-label="Back" title="${prevLevel ? `लेवल ${prevLevel}` : 'होम'}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        ${nextLevel ? `
          <button class="nav-arrow-btn nav-arrow-next" onclick="app.openLevel(${nextLevel})" aria-label="Next" title="लेवल ${nextLevel}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        ` : `
          <div style="width: 48px;"></div>
        `}
      </div>

      <!-- Level Content -->
      ${contentHTML}

      <!-- Bottom Arrow Navigation (Minimal Apple Glass Arrow Buttons, Zero Text) -->
      <div class="level-arrow-nav-bar level-arrow-nav-footer">
        <button class="nav-arrow-btn nav-arrow-prev" onclick="${prevLevel ? `app.openLevel(${prevLevel})` : `app.goHome()`}" aria-label="Back" title="${prevLevel ? `लेवल ${prevLevel}` : 'होम'}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        ${nextLevel ? `
          <button class="nav-arrow-btn nav-arrow-next" onclick="app.openLevel(${nextLevel})" aria-label="Next" title="लेवल ${nextLevel}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        ` : `
          <div style="width: 48px;"></div>
        `}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // LEVEL 1: DUAL-VIEW (1. ABCD 4-5 ROWS GRID | 2. MOUTH PATTERNS)
  // --------------------------------------------------------------------------
  renderLevel1Content() {
    const L = this.D.level1;
    const mode = this.level1Mode || 'abcd';
    const allLetters = L.letters || [];
    const patterns = L.patterns || [];
    const showChart = this.showMouthChart !== false;

    // 5 Rows defined by user: Each row starts with a vowel in Column 1 (A, E, I, O, U)
    const vowelRowGroups = [
      {
        rowNum: 1,
        vowel: 'A',
        letters: ['A', 'B', 'C', 'D'],
        leadHindi: 'स्वर A',
        desc: '1 स्वर (A) + 3 व्यंजन (B, C, D) = 4 अक्षर'
      },
      {
        rowNum: 2,
        vowel: 'E',
        letters: ['E', 'F', 'G', 'H'],
        leadHindi: 'स्वर E',
        desc: '1 स्वर (E) + 3 व्यंजन (F, G, H) = 4 अक्षर'
      },
      {
        rowNum: 3,
        vowel: 'I',
        letters: ['I', 'J', 'K', 'L', 'M', 'N'],
        leadHindi: 'स्वर I',
        desc: '1 स्वर (I) + 5 व्यंजन (J, K, L, M, N) = 6 अक्षर'
      },
      {
        rowNum: 4,
        vowel: 'O',
        letters: ['O', 'P', 'Q', 'R', 'S', 'T'],
        leadHindi: 'स्वर O',
        desc: '1 स्वर (O) + 5 व्यंजन (P, Q, R, S, T) = 6 अक्षर'
      },
      {
        rowNum: 5,
        vowel: 'U',
        letters: ['U', 'V', 'W', 'X', 'Y', 'Z'],
        leadHindi: 'स्वर U',
        desc: '1 स्वर (U) + 5 व्यंजन (V, W, X, Y, Z) = 6 अक्षर'
      }
    ];

    return `
      <!-- Top 2 Boxes / Option Switcher -->
      <div class="level1-mode-switcher">
        <button class="mode-tab-btn ${mode === 'abcd' ? 'active' : ''}" onclick="app.setLevel1Mode('abcd')">
          <span class="mode-icon">🅰️</span>
          <div class="mode-text-group">
            <div class="mode-title hindi">1. A B C D पूरी वर्णमाला (5 पंक्तियाँ)</div>
            <div class="mode-sub hindi">हर लाइन के शुरू में स्वर (A, E, I, O, U) लाल रंग में • 5 स्वर + 21 व्यंजन</div>
          </div>
        </button>

        <button class="mode-tab-btn ${mode === 'patterns' ? 'active' : ''}" onclick="app.setLevel1Mode('patterns')">
          <span class="mode-icon">👄</span>
          <div class="mode-text-group">
            <div class="mode-title hindi">2. बोलने के तरीके (माउथ पैटर्न)</div>
            <div class="mode-sub hindi">मुंह बंद करके, दांत होंठ पर आदि (B, P, M...) • सचित्र गाइड</div>
          </div>
        </button>
      </div>

      <!-- BOX 1: A B C D पूरे 26 अक्षर (5 पंक्तियों में, हर पंक्ति के शुरू में स्वर A, E, I, O, U एक सीध में) -->
      ${mode === 'abcd' ? `
        <!-- Vowel & Consonant Overview Banner -->
        <div class="vowel-summary-banner">
          <div class="vowel-summary-header-row">
            <div class="vowel-counts-group">
              <div class="vowel-stat-badge stat-vowel">
                <span class="stat-icon">🔴</span>
                <div class="stat-info">
                  <span class="stat-number">5 स्वर (Vowels)</span>
                  <span class="stat-desc hindi">A, E, I, O, U — हर लाइन के शुरू में (लाल रंग)</span>
                </div>
              </div>
              <div class="vowel-stat-badge stat-consonant">
                <span class="stat-icon">🔵</span>
                <div class="stat-info">
                  <span class="stat-number">21 व्यंजन (Consonants)</span>
                  <span class="stat-desc hindi">B, C, D... Z (बाकी सभी 21 अक्षर)</span>
                </div>
              </div>
              <div class="vowel-stat-badge stat-total">
                <span class="stat-icon">📚</span>
                <div class="stat-info">
                  <span class="stat-number">कुल 26 अक्षर</span>
                  <span class="stat-desc hindi">5 पंक्तियों में व्यवस्थित वर्णमाला</span>
                </div>
              </div>
            </div>
          </div>
          <p class="vowel-banner-note hindi">
            🎯 <strong>पहचान नियम:</strong> पहले कॉलम में सभी 5 स्वर (<strong>A, E, I, O, U</strong>) एक सीधी लंबवत लाइन में लाल रंग में दिए गए हैं, जिससे शुरू में ही पता चलता है कि कौन सा स्वर है और कौन सा व्यंजन!
          </p>
        </div>

        <!-- 5 Vowel-Aligned Rows -->
        <div class="vowel-rows-container">
          ${vowelRowGroups.map(group => `
            <div class="vowel-row-card-block">
              <div class="vowel-row-meta">
                <div class="vowel-row-meta-left">
                  <span class="vowel-row-tag hindi">पंक्ति ${group.rowNum}</span>
                  <span class="vowel-row-lead hindi">शुरुआत: 🔴 <strong>${group.leadHindi}</strong></span>
                </div>
                <div class="vowel-row-meta-right hindi">
                  ${group.desc}
                </div>
              </div>

              <div class="vowel-aligned-grid">
                ${group.letters.map(upper => {
                  const l = allLetters.find(x => x.upper === upper);
                  if (!l) return '';
                  const firstWord = (l.words && l.words[0]) ? l.words[0] : { w: l.upper, h: '', m: '' };
                  return `
                    <div class="abcd-grid-card ${l.isVowel ? 'vowel-card' : 'consonant-card'}" onclick="app.speakWord('${firstWord.w}')" title="${l.upper} for ${firstWord.w}">
                      <div class="abcd-letter-row">
                        <span class="abcd-big-letter">${l.upper}</span>
                        <span class="abcd-small-letter">${l.lower}</span>
                        <span class="abcd-sound-pill hindi ${l.isVowel ? 'vowel-pill' : ''}">${l.primarySound}</span>
                      </div>

                      <div class="abcd-word-row">
                        <span class="abcd-word-label">${l.upper} for ${firstWord.w}</span>
                        <span class="abcd-hindi-label hindi">${firstWord.h} (${firstWord.m})</span>
                      </div>

                      <div class="abcd-actions" onclick="event.stopPropagation()">
                        <button class="btn-abcd-audio" onclick="app.speakWord('${l.upper}')" title="अक्षर का नाम बोलें">
                          🔊 ${l.nameHindi}
                        </button>
                        <button class="btn-abcd-audio btn-slow" onclick="app.speakWordSlow('${firstWord.w}')" title="धीमा उच्चारण">
                          🐢 ${firstWord.w}
                        </button>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <!-- BOX 2: बोलने के तरीके (Mouth Patterns — 26 अक्षरों का सचित्र मैच) -->
        <div style="margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 14px;">
            <div>
              <h3 class="hindi" style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); display: flex; align-items: center; gap: 8px;">
                <span>👄 6 मुख्य मुंह आकारों का सचित्र पोस्टर (Mouth Shapes Poster)</span>
              </h3>
              <p class="hindi" style="font-size: 0.92rem; color: var(--text-secondary); margin-top: 2px;">
                नीचे किसी भी पोस्टर कार्ड पर क्लिक करें और देखें कि कौन से अक्षर किस मुंह आकार से बोले जाते हैं:
              </p>
            </div>
          </div>

          <!-- 6-Card Visual Poster Grid matching the User's Image -->
          <div class="mouth-shapes-poster-grid">
            ${patterns.slice(0, 6).map(pat => `
              <div class="poster-mouth-card" style="border-color: ${pat.borderColor}; background: ${pat.bgColor};" onclick="app.jumpToPattern('${pat.id}')" title="${pat.title}">
                <div class="poster-card-title hindi">${pat.title.split('(')[0]}</div>
                <div class="poster-card-img-wrap">
                  <img src="${pat.img}" alt="${pat.title}" class="poster-mouth-img" />
                </div>
                <div class="poster-card-letters">${pat.letters.join(', ')}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pattern-stack">
          ${patterns.map(pat => {
            const patLetters = pat.letters.map(upper => allLetters.find(x => x.upper === upper)).filter(Boolean);

            return `
              <div class="pattern-grand-card" id="${pat.id}" style="border-left: 6px solid ${pat.borderColor};">
                <div class="pattern-grand-header">
                  <div class="pattern-art-box">
                    ${pat.img ? `
                      <img src="${pat.img}" alt="${pat.title}" style="width: 175px; height: 135px; object-fit: contain; border-radius: 14px; background: #FFFFFF; border: 1.5px solid ${pat.borderColor}; box-shadow: 0 4px 14px rgba(0,0,0,0.06);" />
                    ` : (window.MouthArt ? window.MouthArt.getSVG(pat.shapeKey, { width: 175, height: 135 }) : '')}
                  </div>
                  <div class="pattern-meta-box">
                    <div class="pattern-title-row">
                      <h3 class="pattern-main-title hindi">${pat.title}</h3>
                      <span class="pattern-badge-pill hindi" style="background: ${pat.borderColor};">${pat.badge}</span>
                    </div>
                    <p class="pattern-subtitle hindi">${pat.subtitle}</p>
                    <div class="pattern-speech-instruction hindi">
                      💡 <strong>होंठों व मुंह की सही स्थिति:</strong> ${pat.guide}
                    </div>
                  </div>
                </div>

                <!-- Letters belonging to this pattern -->
                <div class="words-row-grid" style="margin-top: 14px;">
                  ${patLetters.map(letter => {
                    const firstWord = (letter.words && letter.words[0]) ? letter.words[0] : { w: letter.upper, h: '', m: '' };
                    return `
                      <div class="reading-word-card" onclick="app.speakWord('${firstWord.w}')" style="cursor: pointer;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                          <div style="font-size: 1.6rem; font-weight: 900; color: #4F46E5;">
                            ${letter.upper} ${letter.lower}
                          </div>
                          <span class="hindi" style="font-size: 0.85rem; font-weight: 800; color: #E11D48; background: rgba(225, 29, 72, 0.1); padding: 2px 8px; border-radius: 99px;">
                            ${letter.primarySound}
                          </span>
                        </div>
                        <div class="r-eng-word" style="font-size: 1.15rem;">
                          ${letter.upper} for ${firstWord.w}
                        </div>
                        <div class="r-hindi-word hindi" style="font-size: 0.95rem;">
                          ${firstWord.h}
                        </div>
                        <div class="r-meaning hindi">
                          ${firstWord.m}
                        </div>
                        <div class="r-audio-actions" onclick="event.stopPropagation()">
                          <button class="btn-sound-play" onclick="app.speakWord('${letter.upper}')">
                            🔊 ${letter.nameHindi}
                          </button>
                          <button class="btn-sound-play btn-slow" onclick="app.speakWordSlow('${firstWord.w}')">
                            🐢 ${firstWord.w}
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    `;
  }

  setLevel1Mode(mode) {
    this.level1Mode = mode;
    this.render();
  }

  jumpToPattern(patId) {
    const el = document.getElementById(patId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  toggleMouthChart() {
    this.showMouthChart = !(this.showMouthChart !== false);
    this.render();
  }

  jumpToLetter(id) {
    if (!this.openAccordions[1]) this.openAccordions[1] = new Set();
    this.openAccordions[1].add(id);
    this.render();

    setTimeout(() => {
      const el = document.getElementById(`acc_${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  }

  // --------------------------------------------------------------------------
  // LEVEL 2: 44 ENGLISH PHONEMES (WITH 300+ WORDS DEDICATED PARAGRAPHS & MOUTH GUIDES)
  // --------------------------------------------------------------------------
  renderLevel2Content() {
    const L = this.D.level2;
    const showChart = this.showMouthChart !== false;

    return `
      <!-- Mouth Articulation Visual Guide Chart Card (Level 2) -->
      <div class="mouth-chart-card">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 14px;">
          <div>
            <h3 class="hindi" style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); display: flex; align-items: center; gap: 8px;">
              <span>👄 44 ध्वनियों के लिए मुंह की 6 प्रमुख स्थितियां (Mouth Shapes Chart)</span>
            </h3>
            <p class="hindi" style="font-size: 0.92rem; color: var(--text-secondary); margin-top: 2px;">
              अंग्रेज़ी की 44 ध्वनियों को शुद्ध बोलने के लिए होंठों, दांतों और जीभ की सही स्थिति देखें:
            </p>
          </div>
          <button class="tool-chip" onclick="app.toggleMouthChart()" style="padding: 8px 18px; font-weight: 700;">
            ${showChart ? '🔼 चार्ट छिपाएं' : '🔽 चार्ट देखें'}
          </button>
        </div>

        ${showChart ? `
          <div style="text-align: center; margin-top: 10px;">
            <img src="${this.D.level1.chartImage || 'img/mouth_guide.jpg'}" alt="Mouth Shapes for English Sounds Chart" class="mouth-chart-img" />
          </div>
        ` : ''}
      </div>

      <div class="accordion-stack">
        ${L.categories.map((cat, catIdx) => {
          const isOpen = (this.openAccordions[2] || new Set()).has(cat.id);

          return `
            <div class="topic-accordion ${isOpen ? 'expanded' : ''}" id="acc_${cat.id}">
              <button class="topic-header-btn" onclick="app.toggleAccordion(2, '${cat.id}')">
                <div class="topic-left-info">
                  <div class="topic-avatar">${cat.icon}</div>
                  <div class="topic-title-block">
                    <h3 class="hindi">${cat.name}</h3>
                    <p class="hindi">${cat.desc}</p>
                  </div>
                </div>

                <div class="topic-right-meta">
                  <span class="topic-count-pill hindi">${cat.phonemes.length} ध्वनियां</span>
                  <span class="topic-chevron">▼</span>
                </div>
              </button>

              <div class="topic-body-content">
                <div style="display: flex; flex-direction: column; gap: 24px;">
                  ${cat.phonemes.map((ph, phIdx) => {
                    const paraId = `para_ph_${catIdx}_${phIdx}`;
                    const sentencesJSON = JSON.stringify(ph.sentences || [ph.paragraph]).replace(/"/g, '&quot;');

                    return `
                      <div class="sound-box-card">
                        <div class="sound-box-head">
                          <div>
                            <span class="sound-title-pill">${ph.label}</span>
                            <span class="sound-hindi-sound hindi">${ph.hindiApprox}</span>
                          </div>
                          <div style="display: flex; gap: 8px;">
                            <button class="btn-sound-play" onclick="app.speakWord('${ph.words[0]?.w || ph.label}')">
                              🔊 मुख्य शब्द (1.0x)
                            </button>
                            <button class="btn-sound-play btn-slow" onclick="app.speakWordSlow('${ph.words[0]?.w || ph.label}')">
                              🐢 धीमा (0.5x)
                            </button>
                          </div>
                        </div>

                        <!-- Top Visual Grid: Mouth Shape SVG Diagram + Key Visual Anchor Word Showcase -->
                        <div class="sound-box-top-grid">
                          <div class="sound-mouth-art-col">
                            ${window.MouthArt ? window.MouthArt.getSVG(ph.mouthShape, { width: 185, height: 130 }) : ''}
                          </div>

                          ${ph.anchor ? `
                            <div class="anchor-word-showcase">
                              <div class="anchor-badge hindi">⭐ मुख्य उच्चारण शब्द (Key Visual Anchor):</div>
                              <div class="anchor-content-row">
                                <div class="anchor-icon">${ph.anchor.icon || '📖'}</div>
                                <div class="anchor-text-block">
                                  <div class="anchor-eng">${ph.anchor.word}</div>
                                  <div class="anchor-hindi hindi">${ph.anchor.hindi} (${ph.anchor.meaning})</div>
                                </div>
                                <div class="anchor-actions">
                                  <button class="btn-sound-play" onclick="app.speakWord('${ph.anchor.word}')">
                                    🔊 बोलें
                                  </button>
                                  <button class="btn-sound-play btn-slow" onclick="app.speakWordSlow('${ph.anchor.word}')">
                                    🐢 धीमा
                                  </button>
                                </div>
                              </div>
                            </div>
                          ` : ''}
                        </div>

                        <!-- Dedicated Physical Mouth Mechanics Box for 25-yr Teacher's Guidance -->
                        <div class="mouth-guide-box" style="margin: 12px 0 16px;">
                          <div class="mouth-guide-title hindi">
                            <span>👄</span>
                            <strong>मुंह की स्थिति व बोलने का तरीका:</strong>
                            ${ph.mouthBadge ? `<span class="mouth-badge-tag">${ph.mouthBadge}</span>` : ''}
                          </div>
                          ${ph.mouthGuide ? `
                            <div class="mouth-guide-text hindi">
                              ${ph.mouthGuide}
                            </div>
                          ` : ''}
                          <div class="mouth-teacher-tip hindi">
                            💡 <strong>25-वर्षीय शिक्षक का सीक्रेट टिप:</strong> ${ph.tip}
                          </div>
                        </div>

                        <!-- Words Row Grid -->
                        <div class="words-row-grid">
                          ${ph.words.map(w => `
                            <div class="reading-word-card" onclick="app.speakWord('${w.w}', this)">
                              <div class="r-eng-word">${w.w}</div>
                              <div class="r-hindi-word hindi">${w.h}</div>
                              <div class="r-meaning hindi">${w.m}</div>
                              <div class="r-audio-actions">
                                <button class="btn-sound-play" onclick="event.stopPropagation(); app.speakWord('${w.w}', this.closest('.reading-word-card'))">
                                  🔊 बोलें
                                </button>
                                <button class="btn-sound-play btn-slow" onclick="event.stopPropagation(); app.speakWordSlow('${w.w}', this.closest('.reading-word-card'))">
                                  🐢 धीमा
                                </button>
                              </div>
                            </div>
                          `).join('')}
                        </div>

                        <!-- 300+ Words Dedicated Reading Paragraph -->
                        ${ph.paragraph ? `
                          <div class="practice-paragraph-box" id="${paraId}">
                            <div class="para-header">
                              <div class="para-title hindi">
                                <span>📖 '${ph.label}' का 300+ शब्दों का स्पेशल पैराग्राफ</span>
                                <span class="para-word-count hindi">📝 ${ph.wordCount} शब्द</span>
                              </div>
                              <div class="para-controls">
                                <button class="btn-para-play" onclick="app.playPhonemeParagraph(${catIdx}, ${phIdx}, false)">
                                  🔊 पूरा पैराग्राफ सुनें (1.0x)
                                </button>
                                <button class="btn-para-play btn-para-slow" onclick="app.playPhonemeParagraph(${catIdx}, ${phIdx}, true)">
                                  🐢 धीमे-धीमे सुनें (0.5x)
                                </button>
                                <button class="btn-para-stop" onclick="app.stopPhonemeParagraph(${catIdx}, ${phIdx})">
                                  ⏹️ रोकें
                                </button>
                              </div>
                            </div>

                            <div class="para-text">
                              ${(ph.sentences || [ph.paragraph]).map((sent, sIdx) => `
                                <span class="para-sentence" id="sent_${paraId}_${sIdx}">
                                  ${sent.split(/\s+/).map(wd => `<span class="para-word" onclick="app.speakWord('${wd.replace(/[^a-zA-Z]/g, '')}')">${wd}</span>`).join(' ')}
                                </span>
                              `).join(' ')}
                            </div>
                          </div>
                        ` : ''}
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // PARAGRAPH PLAYBACK CONTROLS (Sentence by Sentence with Glow)
  // --------------------------------------------------------------------------
  playParagraph(paraId, sentences, isSlow = false) {
    // Clear any previous highlights
    document.querySelectorAll(".para-sentence.active-sentence").forEach(el => el.classList.remove("active-sentence"));
    document.querySelectorAll(".practice-paragraph-box.playing-paragraph").forEach(el => el.classList.remove("playing-paragraph"));

    const box = document.getElementById(paraId);
    if (box) box.classList.add("playing-paragraph");

    this.S.speakParagraph(sentences, {
      slow: isSlow,
      onSentence: (idx, sent) => {
        document.querySelectorAll(".para-sentence.active-sentence").forEach(el => el.classList.remove("active-sentence"));
        const sentEl = document.getElementById(`sent_${paraId}_${idx}`);
        if (sentEl) {
          sentEl.classList.add("active-sentence");
          sentEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      },
      onFinish: () => {
        document.querySelectorAll(".para-sentence.active-sentence").forEach(el => el.classList.remove("active-sentence"));
        if (box) box.classList.remove("playing-paragraph");
      }
    });
  }

  stopParagraph(paraId) {
    this.S.stop();
    document.querySelectorAll(".para-sentence.active-sentence").forEach(el => el.classList.remove("active-sentence"));
    const box = document.getElementById(paraId);
    if (box) box.classList.remove("playing-paragraph");
  }

  playLetterSoundParagraph(letterId, sIndex, isSlow = false) {
    const letter = (this.D.level1.letters || []).find(l => l.id === letterId);
    if (!letter || !letter.sounds || !letter.sounds[sIndex]) return;
    const snd = letter.sounds[sIndex];
    const paraId = `para_${letterId}_${sIndex}`;
    const sentences = snd.sentences || (snd.paragraph ? [snd.paragraph] : []);
    this.playParagraph(paraId, sentences, isSlow);
  }

  stopLetterSoundParagraph(letterId, sIndex) {
    const paraId = `para_${letterId}_${sIndex}`;
    this.stopParagraph(paraId);
  }

  playPhonemeParagraph(catIdx, phIdx, isSlow = false) {
    const cat = this.D.level2?.categories?.[catIdx];
    const ph = cat?.phonemes?.[phIdx];
    if (!ph) return;
    const paraId = `para_ph_${catIdx}_${phIdx}`;
    const sentences = ph.sentences || (ph.paragraph ? [ph.paragraph] : []);
    this.playParagraph(paraId, sentences, isSlow);
  }

  stopPhonemeParagraph(catIdx, phIdx) {
    const paraId = `para_ph_${catIdx}_${phIdx}`;
    this.stopParagraph(paraId);
  }

  playL3Paragraph(famId, isSlow = false) {
    const fam = (this.D.level3.families || []).find(f => f.id === famId);
    if (!fam) return;
    const paraId = `para_l3_${famId}`;
    const sentences = fam.sentences || (fam.paragraph ? [fam.paragraph] : []);
    this.playParagraph(paraId, sentences, isSlow);
  }

  playL4Paragraph(famId, isSlow = false) {
    const fam = (this.D.level4.families || []).find(f => f.id === famId);
    if (!fam) return;
    const paraId = `para_l4_${famId}`;
    const sentences = fam.sentences || (fam.paragraph ? [fam.paragraph] : []);
    this.playParagraph(paraId, sentences, isSlow);
  }

  playL5Paragraph(grpId, isSlow = false) {
    const grp = (this.D.level5.groups || []).find(g => g.id === grpId);
    if (!grp) return;
    const paraId = `para_l5_${grpId}`;
    const sentences = grp.sentences || (grp.paragraph ? [grp.paragraph] : []);
    this.playParagraph(paraId, sentences, isSlow);
  }

  playL6Paragraph(catId, isSlow = false) {
    const cat = (this.D.level6.categories || []).find(c => c.id === catId);
    if (!cat) return;
    const paraId = `para_l6_${catId}`;
    const sentences = cat.sentences || (cat.paragraph ? [cat.paragraph] : []);
    this.playParagraph(paraId, sentences, isSlow);
  }

  // --------------------------------------------------------------------------
  // LEVEL 3: 2-LETTER WORD BUILDER
  // --------------------------------------------------------------------------
  renderLevel3Content() {
    const L = this.D.level3;
    const demo = L.families[0]?.words[0] || { p1: "A", p2: "t", h1: "ए", h2: "ट", word: "At", hindi: "एट" };

    return `
      <!-- Interactive Blending Machine -->
      <div class="blender-box" id="blenderLevel3">
        <h3 class="hindi" style="font-size: 1.3rem; margin-bottom: 4px;">🎛️ ध्वनि जोड़ मशीन (Sound Blending Machine)</h3>
        <p class="hindi" style="color: #4B5563; font-size: 0.9rem;">
          दो ध्वनियों को अलग-अलग सुनें और देखें कैसे वे मिलकर पूरा शब्द बनती हैं:
        </p>

        <div class="blender-track" id="blenderTrack3">
          <div class="blender-slot" id="bs_0">
            <span class="bs-eng" style="color: var(--accent-coral);">${demo.p1}</span>
            <span class="bs-hin hindi">${demo.h1}</span>
          </div>
          <span class="blender-operator">+</span>
          <div class="blender-slot" id="bs_1">
            <span class="bs-eng" style="color: var(--accent-blue);">${demo.p2}</span>
            <span class="bs-hin hindi">${demo.h2}</span>
          </div>
          <span class="blender-operator">=</span>
          <div class="blender-result" id="bs_full">
            <span class="bs-eng" style="font-size: 2.2rem; font-weight: 900; color: var(--primary);">${demo.word}</span>
            <span class="bs-hin hindi" style="font-size: 1.15rem; font-weight: 800; color: var(--accent-amber);">${demo.hindi}</span>
          </div>
        </div>

        <button class="btn-action-primary hindi" id="btnBlendActive" onclick="app.blendActiveSound('${demo.p1}', '${demo.p2}', '${demo.word}')">
          🔊 जोड़कर बोलें: ${demo.p1} + ${demo.p2} = ${demo.word}
        </button>
      </div>

      <!-- Families Accordion Stack -->
      <div class="accordion-stack">
        ${L.families.map(fam => {
          const isOpen = (this.openAccordions[3] || new Set()).has(fam.id);

          return `
            <div class="topic-accordion ${isOpen ? 'expanded' : ''}" id="acc_${fam.id}">
              <button class="topic-header-btn" onclick="app.toggleAccordion(3, '${fam.id}')">
                <div class="topic-left-info">
                  <div class="topic-avatar" style="background: ${fam.color}20; color: ${fam.color};">
                    ${fam.name.charAt(0)}
                  </div>
                  <div class="topic-title-block">
                    <h3 class="hindi">${fam.name}</h3>
                    <p class="hindi">${fam.words.map(w => w.word).join(' • ')}</p>
                  </div>
                </div>

                <div class="topic-right-meta">
                  <span class="topic-count-pill hindi">${fam.words.length} शब्द</span>
                  <span class="topic-chevron">▼</span>
                </div>
              </button>

              <div class="topic-body-content">
                <div class="words-row-grid">
                  ${fam.words.map(w => `
                    <div class="reading-word-card" onclick="app.loadInBlender('${w.p1}', '${w.p2}', '${w.h1}', '${w.h2}', '${w.word}', '${w.hindi}')">
                      <div class="r-eng-word">
                        <span style="color: var(--accent-coral);">${w.p1}</span><span style="color: var(--accent-blue);">${w.p2}</span>
                      </div>
                      <div class="r-hindi-word hindi">${w.hindi}</div>
                      <div class="r-meaning hindi">${w.meaning}</div>
                      <div class="r-audio-actions">
                        <button class="btn-sound-play" onclick="event.stopPropagation(); app.blendActiveSound('${w.p1}', '${w.p2}', '${w.word}')">
                          🎛️ ब्लेंड
                        </button>
                        <button class="btn-sound-play btn-slow" onclick="event.stopPropagation(); app.speakWordSlow('${w.word}', this.closest('.reading-word-card'))">
                          🐢 धीमा
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <!-- 300+ Words Dedicated Reading Paragraph -->
                ${fam.paragraph ? `
                  <div class="practice-paragraph-box" id="para_l3_${fam.id}">
                    <div class="para-header">
                      <div class="para-title hindi">
                        <span>📖 '${fam.name}' का 300+ शब्दों का स्पेशल पैराग्राफ</span>
                        <span class="para-word-count hindi">📝 ${fam.wordCount} शब्द</span>
                      </div>
                      <div class="para-controls">
                        <button class="btn-para-play" onclick="app.playL3Paragraph('${fam.id}', false)">
                          🔊 पूरा पैराग्राफ सुनें (1.0x)
                        </button>
                        <button class="btn-para-play btn-para-slow" onclick="app.playL3Paragraph('${fam.id}', true)">
                          🐢 धीमे-धीमे सुनें (0.5x)
                        </button>
                        <button class="btn-para-stop" onclick="app.stopParagraph('para_l3_${fam.id}')">
                          ⏹️ रोकें
                        </button>
                      </div>
                    </div>

                    <div class="para-text">
                      ${(fam.sentences || [fam.paragraph]).map((sent, sIdx) => `
                        <span class="para-sentence" id="sent_para_l3_${fam.id}_${sIdx}">
                          ${sent.split(/\s+/).map(wd => `<span class="para-word" onclick="app.speakWord('${wd.replace(/[^a-zA-Z]/g, '')}')">${wd}</span>`).join(' ')}
                        </span>
                      `).join(' ')}
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  loadInBlender(p1, p2, h1, h2, word, hindi) {
    const s0 = document.getElementById("bs_0");
    const s1 = document.getElementById("bs_1");
    const sf = document.getElementById("bs_full");
    const btn = document.getElementById("btnBlendActive");

    if (s0) s0.innerHTML = `<span class="bs-eng" style="color: var(--accent-coral);">${p1}</span><span class="bs-hin hindi">${h1}</span>`;
    if (s1) s1.innerHTML = `<span class="bs-eng" style="color: var(--accent-blue);">${p2}</span><span class="bs-hin hindi">${h2}</span>`;
    if (sf) sf.innerHTML = `<span class="bs-eng" style="font-size: 2.2rem; font-weight: 900; color: var(--primary);">${word}</span><span class="bs-hin hindi" style="font-size: 1.15rem; font-weight: 800; color: var(--accent-amber);">${hindi}</span>`;

    if (btn) {
      btn.textContent = `🔊 जोड़कर बोलें: ${p1} + ${p2} = ${word}`;
      btn.onclick = () => this.blendActiveSound(p1, p2, word);
    }

    document.getElementById("blenderLevel3")?.scrollIntoView({ behavior: "smooth", block: "center" });
    this.blendActiveSound(p1, p2, word);
  }

  blendActiveSound(p1, p2, word) {
    const s0 = document.getElementById("bs_0");
    const s1 = document.getElementById("bs_1");
    const sf = document.getElementById("bs_full");

    [s0, s1, sf].forEach(el => el?.classList.remove("active"));

    this.S.speakBlendSequence(
      [p1, p2],
      word,
      (step) => {
        [s0, s1, sf].forEach(el => el?.classList.remove("active"));
        if (step === 0) s0?.classList.add("active");
        if (step === 1) s1?.classList.add("active");
        if (step === "blend") sf?.classList.add("active");
      },
      () => {
        setTimeout(() => [s0, s1, sf].forEach(el => el?.classList.remove("active")), 700);
      }
    );
  }

  // --------------------------------------------------------------------------
  // LEVEL 4: 3-LETTER CVC WORD FAMILIES
  // --------------------------------------------------------------------------
  renderLevel4Content() {
    const L = this.D.level4;

    return `
      <div class="accordion-stack">
        ${L.families.map(fam => {
          const isOpen = (this.openAccordions[4] || new Set()).has(fam.id);

          return `
            <div class="topic-accordion ${isOpen ? 'expanded' : ''}" id="acc_${fam.id}">
              <button class="topic-header-btn" onclick="app.toggleAccordion(4, '${fam.id}')">
                <div class="topic-left-info">
                  <div class="topic-avatar" style="font-size: 1.3rem;">
                    ${fam.rime}
                  </div>
                  <div class="topic-title-block">
                    <h3 class="hindi">${fam.name}</h3>
                    <p class="hindi">${fam.words.map(w => w.word).join(' • ')}</p>
                  </div>
                </div>

                <div class="topic-right-meta">
                  <span class="topic-count-pill hindi">${fam.words.length} शब्द</span>
                  <span class="topic-chevron">▼</span>
                </div>
              </button>

              <div class="topic-body-content">
                <div class="words-row-grid">
                  ${fam.words.map(w => `
                    <div class="reading-word-card" onclick="app.speakWord('${w.word}', this)">
                      <div class="r-eng-word">
                        <span style="color: var(--accent-blue);">${w.c1}</span><span style="color: var(--accent-coral);">${w.v}</span><span style="color: var(--accent-blue);">${w.c2}</span>
                      </div>
                      <div class="r-hindi-word hindi">${w.hindi}</div>
                      <div class="r-meaning hindi">${w.meaning}</div>
                      <div style="font-size: 0.75rem; color: #4B5563; margin-bottom: 8px;" class="hindi">${w.blend}</div>
                      <div class="r-audio-actions">
                        <button class="btn-sound-play" onclick="event.stopPropagation(); app.blendThreeLetters('${w.c1}', '${w.v}', '${w.c2}', '${w.word}')">
                          🎛️ ब्लेंड
                        </button>
                        <button class="btn-sound-play btn-slow" onclick="event.stopPropagation(); app.speakWordSlow('${w.word}', this.closest('.reading-word-card'))">
                          🐢 धीमा
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <!-- 300+ Words Dedicated Reading Paragraph -->
                ${fam.paragraph ? `
                  <div class="practice-paragraph-box" id="para_l4_${fam.id}">
                    <div class="para-header">
                      <div class="para-title hindi">
                        <span>📖 '${fam.name}' का 300+ शब्दों का स्पेशल पैराग्राफ</span>
                        <span class="para-word-count hindi">📝 ${fam.wordCount} शब्द</span>
                      </div>
                      <div class="para-controls">
                        <button class="btn-para-play" onclick="app.playL4Paragraph('${fam.id}', false)">
                          🔊 पूरा पैराग्राफ सुनें (1.0x)
                        </button>
                        <button class="btn-para-play btn-para-slow" onclick="app.playL4Paragraph('${fam.id}', true)">
                          🐢 धीमे-धीमे सुनें (0.5x)
                        </button>
                        <button class="btn-para-stop" onclick="app.stopParagraph('para_l4_${fam.id}')">
                          ⏹️ रोकें
                        </button>
                      </div>
                    </div>

                    <div class="para-text">
                      ${(fam.sentences || [fam.paragraph]).map((sent, sIdx) => `
                        <span class="para-sentence" id="sent_para_l4_${fam.id}_${sIdx}">
                          ${sent.split(/\s+/).map(wd => `<span class="para-word" onclick="app.speakWord('${wd.replace(/[^a-zA-Z]/g, '')}')">${wd}</span>`).join(' ')}
                        </span>
                      `).join(' ')}
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  blendThreeLetters(c1, v, c2, word) {
    this.S.speakBlendSequence([c1, v, c2], word, null, null);
  }

  // --------------------------------------------------------------------------
  // LEVEL 5: 4-LETTER WORDS, BLENDS & MAGIC-E
  // --------------------------------------------------------------------------
  renderLevel5Content() {
    const L = this.D.level5;

    return `
      <div class="accordion-stack">
        ${L.groups.map(grp => {
          const isOpen = (this.openAccordions[5] || new Set()).has(grp.id);

          return `
            <div class="topic-accordion ${isOpen ? 'expanded' : ''}" id="acc_${grp.id}">
              <button class="topic-header-btn" onclick="app.toggleAccordion(5, '${grp.id}')">
                <div class="topic-left-info">
                  <div class="topic-avatar">${grp.icon}</div>
                  <div class="topic-title-block">
                    <h3 class="hindi">${grp.name}</h3>
                    <p class="hindi">${grp.rule}</p>
                  </div>
                </div>

                <div class="topic-right-meta">
                  <span class="topic-count-pill hindi">${grp.words.length} शब्द</span>
                  <span class="topic-chevron">▼</span>
                </div>
              </button>

              <div class="topic-body-content">
                <div class="words-row-grid">
                  ${grp.words.map(w => `
                    <div class="reading-word-card" onclick="app.speakWord('${w.word}', this)">
                      <div class="r-eng-word" style="font-size: 1.8rem;">
                        ${w.breakdown.map(b => `
                          <span style="${b.type === 'silent' ? 'color:#94A3B8;text-decoration:underline dotted;opacity:0.6;' : b.type === 'blend' ? 'color:#0D9488;' : b.type === 'vowel' ? 'color:#EA580C;' : 'color:#2563EB;'}">${b.t}</span>
                        `).join('')}
                      </div>
                      <div class="r-hindi-word hindi">${w.hindi}</div>
                      <div class="r-meaning hindi">${w.meaning}</div>
                      ${w.magicNote ? `<div style="font-size: 0.75rem; background: #FFF7ED; color: #C2410C; padding: 2px 8px; border-radius: 99px; margin-bottom: 6px;" class="hindi">${w.magicNote}</div>` : ''}
                      <div class="r-audio-actions">
                        <button class="btn-sound-play" onclick="event.stopPropagation(); app.speakWord('${w.word}', this.closest('.reading-word-card'))">
                          🔊 बोलें
                        </button>
                        <button class="btn-sound-play btn-slow" onclick="event.stopPropagation(); app.speakWordSlow('${w.word}', this.closest('.reading-word-card'))">
                          🐢 धीमा
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <!-- 300+ Words Dedicated Reading Paragraph -->
                ${grp.paragraph ? `
                  <div class="practice-paragraph-box" id="para_l5_${grp.id}">
                    <div class="para-header">
                      <div class="para-title hindi">
                        <span>📖 '${grp.name}' का 300+ शब्दों का स्पेशल पैराग्राफ</span>
                        <span class="para-word-count hindi">📝 ${grp.wordCount} शब्द</span>
                      </div>
                      <div class="para-controls">
                        <button class="btn-para-play" onclick="app.playL5Paragraph('${grp.id}', false)">
                          🔊 पूरा पैराग्राफ सुनें (1.0x)
                        </button>
                        <button class="btn-para-play btn-para-slow" onclick="app.playL5Paragraph('${grp.id}', true)">
                          🐢 धीमे-धीमे सुनें (0.5x)
                        </button>
                        <button class="btn-para-stop" onclick="app.stopParagraph('para_l5_${grp.id}')">
                          ⏹️ रोकें
                        </button>
                      </div>
                    </div>

                    <div class="para-text">
                      ${(grp.sentences || [grp.paragraph]).map((sent, sIdx) => `
                        <span class="para-sentence" id="sent_para_l5_${grp.id}_${sIdx}">
                          ${sent.split(/\s+/).map(wd => `<span class="para-word" onclick="app.speakWord('${wd.replace(/[^a-zA-Z]/g, '')}')">${wd}</span>`).join(' ')}
                        </span>
                      `).join(' ')}
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // LEVEL 6: SYLLABLE CHUNKING
  // --------------------------------------------------------------------------
  renderLevel6Content() {
    const L = this.D.level6;
    const cats = L.categories || [];

    return `
      <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: var(--r-md); padding: 16px 20px; margin-bottom: 24px;" class="hindi">
        💡 <strong>चंकिंग का राज (Syllable Chunking):</strong> किसी भी बड़े शब्द से डरना छोड़ो! उसे 2 या 3 छोटे हिस्सों में तोड़ो। नीचे दिए किसी भी रंगीन टुकड़े पर क्लिक करके सिर्फ वही टुकड़ा सुनो, और फिर पूरा शब्द व 300+ शब्दों का स्पेशल पैराग्राफ पढ़ो!
      </div>

      <div class="accordion-stack">
        ${cats.map(cat => {
          const isOpen = (this.openAccordions[6] || new Set()).has(cat.id);

          return `
            <div class="topic-accordion ${isOpen ? 'expanded' : ''}" id="acc_${cat.id}">
              <button class="topic-header-btn" onclick="app.toggleAccordion(6, '${cat.id}')">
                <div class="topic-left-info">
                  <div class="topic-avatar" style="font-size: 1.4rem;">${cat.icon}</div>
                  <div class="topic-title-block">
                    <h3 class="hindi">${cat.name}</h3>
                    <p class="hindi">${cat.desc}</p>
                  </div>
                </div>

                <div class="topic-right-meta">
                  <span class="topic-count-pill hindi">${cat.words && cat.words.length ? cat.words.length + ' शब्द' : 'मास्टर पैसेज'}</span>
                  <span class="topic-chevron">▼</span>
                </div>
              </button>

              <div class="topic-body-content">
                ${cat.words && cat.words.length ? `
                  <div class="words-row-grid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));">
                    ${cat.words.map(w => `
                      <div class="reading-word-card" style="padding: 16px;" onclick="app.speakWord('${w.word}', this)">
                        <div class="chunk-pills-row">
                          ${w.chunks.map((chk, i) => `
                            <div class="chunk-interactive-pill" onclick="event.stopPropagation(); app.speakWord('${chk}', this)">
                              <span class="chunk-eng">${chk}</span>
                              <span class="chunk-hin hindi">${w.chunkH[i]}</span>
                            </div>
                          `).join('')}
                        </div>

                        <div class="r-eng-word" style="font-size: 1.8rem; margin: 6px 0;">${w.word}</div>
                        <div class="r-hindi-word hindi" style="font-size: 1.2rem;">${w.hindi}</div>
                        <div class="r-meaning hindi" style="font-size: 0.85rem;">${w.meaning}</div>
                        <div style="font-size: 0.78rem; color: #64748B; margin: 6px 0;" class="hindi">${w.tip}</div>

                        <div class="r-audio-actions">
                          <button class="btn-sound-play" style="padding: 7px;" onclick="event.stopPropagation(); app.speakWord('${w.word}', this.closest('.reading-word-card'))">
                            🔊 पूरा शब्द
                          </button>
                          <button class="btn-sound-play btn-slow" style="padding: 7px;" onclick="event.stopPropagation(); app.speakWordSlow('${w.word}', this.closest('.reading-word-card'))">
                            🐢 धीमा
                          </button>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}

                <!-- 300+ Words Dedicated Reading Paragraph -->
                ${cat.paragraph ? `
                  <div class="practice-paragraph-box" id="para_l6_${cat.id}">
                    <div class="para-header">
                      <div class="para-title hindi">
                        <span>📖 '${cat.name}' का 300+ शब्दों का स्पेशल पैराग्राफ</span>
                        <span class="para-word-count hindi">📝 ${cat.wordCount} शब्द</span>
                      </div>
                      <div class="para-controls">
                        <button class="btn-para-play" onclick="app.playL6Paragraph('${cat.id}', false)">
                          🔊 पूरा पैराग्राफ सुनें (1.0x)
                        </button>
                        <button class="btn-para-play btn-para-slow" onclick="app.playL6Paragraph('${cat.id}', true)">
                          🐢 धीमे-धीमे सुनें (0.5x)
                        </button>
                        <button class="btn-para-stop" onclick="app.stopParagraph('para_l6_${cat.id}')">
                          ⏹️ रोकें
                        </button>
                      </div>
                    </div>

                    <div class="para-text">
                      ${(cat.sentences || [cat.paragraph]).map((sent, sIdx) => `
                        <span class="para-sentence" id="sent_para_l6_${cat.id}_${sIdx}">
                          ${sent.split(/\s+/).map(wd => `<span class="para-word" onclick="app.speakWord('${wd.replace(/[^a-zA-Z]/g, '')}')">${wd}</span>`).join(' ')}
                        </span>
                      `).join(' ')}
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // LEVEL 7: REAL WORLD ARENA
  // --------------------------------------------------------------------------
  renderLevel7Content() {
    const L = this.D.level7;
    const tab = this.activeFilter === "all" ? "signboards" : this.activeFilter;

    return `
      <!-- Sub Tabs -->
      <div class="filter-bar">
        <button class="filter-btn ${tab === 'signboards' ? 'active' : ''}" onclick="app.setFilter('signboards')">
          🚏 रेलवे व अस्पताल साइनबोर्ड (${L.signboards.length})
        </button>
        <button class="filter-btn ${tab === 'mobileUI' ? 'active' : ''}" onclick="app.setFilter('mobileUI')">
          📱 मोबाइल स्क्रीन शब्द (${L.mobileUI.length})
        </button>
        <button class="filter-btn ${tab === 'sentences' ? 'active' : ''}" onclick="app.setFilter('sentences')">
          💬 रोज़मर्रा के वाक्य (${L.sentences.length})
        </button>
        <button class="filter-btn ${tab === 'stories' ? 'active' : ''}" onclick="app.setFilter('stories')">
          📖 छोटी कहानियां (${L.stories.length})
        </button>
      </div>

      <!-- Signboards Tab -->
      ${tab === 'signboards' ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px;">
          ${L.signboards.map(sb => `
            <div class="signboard-box">
              <div class="signboard-accent-line"></div>
              <div class="sb-category hindi">${sb.category}</div>
              
              <div class="sb-words-flex">
                ${sb.words.map(w => `
                  <div class="sb-interactive-word" onclick="app.speakWord('${w.e}')">
                    <span class="sb-eng-text">${w.e}</span>
                    <span class="sb-hin-text hindi">${w.h}</span>
                  </div>
                `).join('')}
              </div>

              <div style="background: rgba(255,255,255,0.7); border: 1px solid rgba(226, 232, 240, 0.85); padding: 12px 14px; border-radius: 12px; margin-top: 10px;" class="hindi">
                <strong>अर्थ:</strong> ${sb.meaning}
                <div style="font-size: 0.82rem; color: #64748B; margin-top: 4px;">💡 ${sb.context}</div>
              </div>

              <div style="display: flex; gap: 8px; margin-top: 14px;">
                <button class="btn-sound-play" style="flex: 1;" onclick="app.speakWord('${sb.text}')">
                  🔊 पूरा साइनबोर्ड
                </button>
                <button class="btn-sound-play btn-slow" style="flex: 1;" onclick="app.speakWordSlow('${sb.text}')">
                  🐢 धीमा
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Mobile UI Tab -->
      ${tab === 'mobileUI' ? `
        <div class="words-row-grid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));">
          ${L.mobileUI.map(m => `
            <div class="reading-word-card" style="padding: 18px;" onclick="app.speakWord('${m.text}', this)">
              <div class="r-eng-word" style="color: var(--primary);">${m.text}</div>
              <div class="r-hindi-word hindi" style="font-size: 1.25rem;">${m.meaning}</div>
              <div class="r-meaning hindi" style="margin: 8px 0;">💡 ${m.context}</div>
              <div class="r-audio-actions">
                <button class="btn-sound-play" onclick="event.stopPropagation(); app.speakWord('${m.text}', this.closest('.reading-word-card'))">
                  🔊 बोलें
                </button>
                <button class="btn-sound-play btn-slow" onclick="event.stopPropagation(); app.speakWordSlow('${m.text}', this.closest('.reading-word-card'))">
                  🐢 धीमा
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Sentences Tab -->
      ${tab === 'sentences' ? `
        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${L.sentences.map(st => `
            <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: var(--r-md); padding: 18px 22px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;">
              <div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 6px;">
                  ${st.words.map(w => `
                    <span class="sb-interactive-word" style="background: var(--surface-subtle); border-color: var(--border-light); color: var(--text-main); padding: 4px 10px;" onclick="app.speakWord('${w.e}')">
                      <span style="font-size: 1.25rem; font-weight: 800;">${w.e}</span>
                      <span class="hindi" style="font-size: 0.75rem; color: var(--accent-coral); font-weight: 700;">${w.h}</span>
                    </span>
                  `).join('')}
                </div>
                <div class="hindi" style="color: #4B5563; font-weight: 600; font-size: 0.95rem;">
                  अनुवाद: ${st.translation}
                </div>
              </div>

              <div style="display: flex; gap: 8px;">
                <button class="btn-action-primary" onclick="app.speakWord('${st.english}')">
                  🔊 पूरा वाक्य
                </button>
                <button class="btn-sound-play btn-slow" style="padding: 10px 14px;" onclick="app.speakWordSlow('${st.english}')">
                  🐢 धीमा
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Stories Tab -->
      ${tab === 'stories' ? `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${L.stories.map(story => {
            const fullStoryText = story.paras.map(p => p.map(w => w.e).join(' ')).join('. ');

            return `
              <div style="background: #FFFFFF; border: 1px solid var(--border-light); border-radius: var(--r-lg); padding: 24px; box-shadow: var(--shadow-card);">
                <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; border-bottom: 1px solid var(--border-light); padding-bottom: 14px; margin-bottom: 18px;">
                  <div>
                    <h3 style="font-size: 1.4rem; color: var(--text-main); font-weight: 800;">${story.title}</h3>
                    <div class="hindi" style="color: var(--accent-amber); font-weight: 700;">${story.titleHindi}</div>
                  </div>
                  <div style="display: flex; gap: 8px;">
                    <button class="btn-action-primary hindi" onclick="app.speakWord('${fullStoryText}')">
                      🔊 पूरी कहानी
                    </button>
                    <button class="btn-sound-play btn-slow" onclick="app.speakWordSlow('${fullStoryText}')">
                      🐢 धीमा
                    </button>
                  </div>
                </div>

                <div style="font-size: 1.35rem; line-height: 2.2; margin-bottom: 16px;">
                  ${story.paras.map(para => `
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                      ${para.map(w => `
                        <span class="sb-interactive-word" style="background: var(--surface-subtle); border-color: var(--border-light); color: var(--text-main); padding: 2px 8px;" onclick="app.speakWord('${w.e}')">
                          <span style="font-weight: 700; font-size: 1.25rem;">${w.e}</span>
                          <span class="hindi" style="font-size: 0.72rem; color: var(--accent-coral); font-weight: 700;">${w.h}</span>
                        </span>
                      `).join('')}
                    </div>
                  `).join('')}
                </div>

                <div style="background: #F0FDF4; border-left: 4px solid var(--accent-green); padding: 12px 16px; border-radius: 8px;" class="hindi">
                  <strong>📖 कहानी का हिंदी सार:</strong> ${story.summary}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}
    `;
  }

  // --------------------------------------------------------------------------
  // ACCORDION TOGGLE
  // --------------------------------------------------------------------------
  toggleAccordion(level, id) {
    if (!this.openAccordions[level]) this.openAccordions[level] = new Set();
    const set = this.openAccordions[level];
    if (set.has(id)) {
      set.delete(id);
    } else {
      set.add(id);
    }
    document.getElementById(`acc_${id}`)?.classList.toggle("expanded", set.has(id));
  }

  setFilter(filterStr) {
    this.activeFilter = filterStr;
    this.render();
  }

  // --------------------------------------------------------------------------
  // AUDIO PLAYBACK HANDLERS (Fixed Slow Mode with Visual Glow)
  // --------------------------------------------------------------------------
  speakWord(text, cardEl = null) {
    const clean = text.replace(/[^\w\s']/g, "").trim();
    if (!clean) return;

    if (cardEl) {
      cardEl.classList.remove("speaking-slow");
      cardEl.classList.add("speaking-now");
    }

    this.S.speak(clean, {
      slow: false,
      rate: 0.92,
      onEnd: () => cardEl?.classList.remove("speaking-now"),
      onError: () => cardEl?.classList.remove("speaking-now")
    });
  }

  speakWordSlow(text, cardEl = null) {
    const clean = text.replace(/[^\w\s']/g, "").trim();
    if (!clean) return;

    if (cardEl) {
      cardEl.classList.remove("speaking-now");
      cardEl.classList.add("speaking-slow");
    }

    this.S.speak(clean, {
      slow: true,
      rate: 0.50,
      onEnd: () => cardEl?.classList.remove("speaking-slow"),
      onError: () => cardEl?.classList.remove("speaking-slow")
    });
  }

  // --------------------------------------------------------------------------
  // SELF-CHECK TEST MODAL
  // --------------------------------------------------------------------------
  launchPracticeModal(levelNum) {
    let pool = [];

    if (levelNum === 1) {
      pool = this.D.level1.letters.flatMap(l =>
        (l.words || []).map(w => ({ word: w.w, hindi: w.h, meaning: w.m }))
      );
    } else if (levelNum === 2) {
      pool = this.D.level2.categories.flatMap(c =>
        c.phonemes.flatMap(p => p.words.map(w => ({ word: w.w, hindi: w.h, meaning: w.m })))
      );
    } else if (levelNum === 3) {
      pool = this.D.level3.families.flatMap(f =>
        f.words.map(w => ({ word: w.word, hindi: w.hindi, meaning: w.meaning }))
      );
    } else if (levelNum === 4) {
      pool = this.D.level4.families.flatMap(f =>
        f.words.map(w => ({ word: w.word, hindi: w.hindi, meaning: w.meaning }))
      );
    } else if (levelNum === 5) {
      pool = this.D.level5.groups.flatMap(g =>
        g.words.map(w => ({ word: w.word, hindi: w.hindi, meaning: w.meaning }))
      );
    } else if (levelNum === 6) {
      pool = this.D.level6.words.map(w => ({ word: w.word, hindi: w.hindi, meaning: w.meaning }));
    } else {
      pool = this.D.level3.families.flatMap(f =>
        f.words.map(w => ({ word: w.word, hindi: w.hindi, meaning: w.meaning }))
      );
    }

    this.practiceQueue = pool.sort(() => Math.random() - 0.5).slice(0, 15);
    this.practiceIdx = 0;
    this.isPracticeRevealed = false;

    this.renderPracticeCard();
    document.getElementById("modalOverlay")?.classList.add("open");
  }

  renderPracticeCard() {
    const item = this.practiceQueue[this.practiceIdx];
    if (!item) {
      this.closePracticeModal();
      return;
    }

    const wordEl = document.getElementById("modalWord");
    const progressEl = document.getElementById("modalProgress");
    const revealArea = document.getElementById("modalRevealArea");
    const btnReveal = document.getElementById("modalReveal");
    const actionsRow = document.getElementById("modalActions");

    if (progressEl) progressEl.textContent = `${this.practiceIdx + 1} / ${this.practiceQueue.length}`;
    if (wordEl) wordEl.textContent = item.word;

    if (btnReveal) btnReveal.style.display = "";
    if (actionsRow) actionsRow.style.display = "none";

    if (revealArea) {
      revealArea.innerHTML = `
        <div style="font-size: 1rem; color: #64748B;" class="hindi">
          👉 पहले ज़ोर से बोलकर पढ़ें, फिर नीचे दिए बटन को दबाकर चेक करें!
        </div>
      `;
    }
  }

  revealPracticeWord() {
    const item = this.practiceQueue[this.practiceIdx];
    if (!item) return;

    const btnReveal = document.getElementById("modalReveal");
    const actionsRow = document.getElementById("modalActions");
    const revealArea = document.getElementById("modalRevealArea");

    if (btnReveal) btnReveal.style.display = "none";
    if (actionsRow) actionsRow.style.display = "flex";

    if (revealArea) {
      revealArea.innerHTML = `
        <div class="modal-hint-pill hindi">${item.hindi}</div>
        <div style="font-size: 0.95rem; color: #4B5563;" class="hindi">अर्थ: ${item.meaning}</div>
      `;
    }

    this.S.speak(item.word);
  }

  markPracticeWord(isCorrect) {
    const item = this.practiceQueue[this.practiceIdx];
    if (isCorrect && item) {
      this.masteredWords.add(item.word);
      this.saveStorage();
      this.updateHeaderUI();
    }

    this.practiceIdx++;
    if (this.practiceIdx >= this.practiceQueue.length) {
      this.closePracticeModal();
      alert(`🎉 शाबाश! आपने यह प्रैक्टिस टेस्ट पूरा कर लिया!`);
      this.render();
    } else {
      this.renderPracticeCard();
    }
  }

  closePracticeModal() {
    document.getElementById("modalOverlay")?.classList.remove("open");
  }

  // --------------------------------------------------------------------------
  // BADGES MODAL
  // --------------------------------------------------------------------------
  openBadgesModal() {
    const badges = this.D.badges;
    const count = this.masteredWords.size;

    const wordEl = document.getElementById("modalWord");
    const progressEl = document.getElementById("modalProgress");
    const revealArea = document.getElementById("modalRevealArea");
    const btnReveal = document.getElementById("modalReveal");
    const actionsRow = document.getElementById("modalActions");

    if (wordEl) wordEl.innerHTML = "";
    if (progressEl) progressEl.textContent = `${count} शब्द सीखे`;
    if (btnReveal) btnReveal.style.display = "none";
    if (actionsRow) actionsRow.style.display = "none";

    if (revealArea) {
      revealArea.innerHTML = `
        <h3 class="hindi" style="font-size: 1.3rem; margin-bottom: 12px; color: var(--text-main);">
          🏅 आपके रीडिंग मेडल व उपलब्धियां
        </h3>
        <p class="hindi" style="font-size: 0.88rem; color: #64748B; margin-bottom: 16px;">
          जैसे-जैसे आप शब्द सीखते जाएंगे, आपके नए मेडल अनलॉक होते जाएंगे!
        </p>

        <div style="display: flex; flex-direction: column; gap: 10px; max-height: 380px; overflow-y: auto; text-align: left; width: 100%;">
          ${badges.map(b => {
            const unlocked = count >= (b.level * 4);

            return `
              <div style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 10px; background: ${unlocked ? '#DCFCE7' : '#F4F4F5'}; border: 1px solid ${unlocked ? '#86EFAC' : '#E4E4E7'}; opacity: ${unlocked ? 1 : 0.6};">
                <span style="font-size: 2rem;">${unlocked ? b.icon : '🔒'}</span>
                <div>
                  <div style="font-weight: 800; font-size: 0.95rem; color: ${unlocked ? '#15803D' : '#52525B'};" class="hindi">
                    ${b.name} (${b.title})
                  </div>
                  <div style="font-size: 0.82rem; color: #4B5563;" class="hindi">${b.desc}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    document.getElementById("modalOverlay")?.classList.add("open");
  }
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  window.app = new PhonicsApp();
});
