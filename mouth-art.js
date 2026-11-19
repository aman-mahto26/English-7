// ==============================================================================
// MOUTH ARTICULATION SVG GENERATOR (सचित्र माउथ डायग्राम लाइब्रेरी)
// Generates clear, high-contrast, educational anatomical mouth illustrations
// ==============================================================================

const MouthArt = {
  getSVG(shapeKey, options = {}) {
    const w = options.width || 180;
    const h = options.height || 130;
    const compact = options.compact || false;

    switch (shapeKey) {
      // 1. दोनों होंठ बंद (Lips Closed - B, P, M)
      case 'lips_closed':
        return `
          <svg viewBox="0 0 180 130" width="${w}" height="${h}" class="mouth-art-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g_lips_closed" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FFF1F2"/>
                <stop offset="100%" stop-color="#FFE4E6"/>
              </linearGradient>
              <linearGradient id="g_lip_fill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FB7185"/>
                <stop offset="100%" stop-color="#E11D48"/>
              </linearGradient>
            </defs>
            <rect width="180" height="130" rx="14" fill="url(#g_lips_closed)" stroke="#FDA4AF" stroke-width="1.5"/>
            <!-- Chin & Face Curve -->
            <path d="M 40 40 Q 90 20 140 40 Q 150 75 140 100 Q 90 125 40 100 Q 30 75 40 40 Z" fill="#FFE4E6" opacity="0.6"/>
            <!-- Closed Upper Lip -->
            <path d="M 45 65 Q 68 52 90 56 Q 112 52 135 65 Q 112 62 90 64 Q 68 62 45 65 Z" fill="url(#g_lip_fill)"/>
            <!-- Closed Lower Lip -->
            <path d="M 45 65 Q 68 68 90 67 Q 112 68 135 65 Q 115 84 90 84 Q 65 84 45 65 Z" fill="url(#g_lip_fill)"/>
            <!-- Center Seal Line -->
            <path d="M 48 65 Q 90 62 132 65" stroke="#881337" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Pressure Indicator Pulse -->
            <circle cx="90" cy="64" r="14" fill="none" stroke="#E11D48" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.8"/>
            <text x="90" y="20" text-anchor="middle" font-family="'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11" fill="#9F1239">👄 दोनों होंठ कसकर बंद</text>
            <text x="90" y="118" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="10.5" fill="#BE123C">B, P, M (हवा रोकी)</text>
          </svg>
        `;

      // 2. ऊपर के दांत नीचे के होंठ पर (Teeth on Lip - F, V)
      case 'teeth_on_lip':
        return `
          <svg viewBox="0 0 180 130" width="${w}" height="${h}" class="mouth-art-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g_teeth_lip" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#EFF6FF"/>
                <stop offset="100%" stop-color="#DBEAFE"/>
              </linearGradient>
            </defs>
            <rect width="180" height="130" rx="14" fill="url(#g_teeth_lip)" stroke="#93C5FD" stroke-width="1.5"/>
            <!-- Upper Lip pulled up -->
            <path d="M 45 52 Q 90 42 135 52 Q 115 58 90 58 Q 65 58 45 52 Z" fill="#F43F5E"/>
            <!-- Upper Front Teeth biting down -->
            <rect x="68" y="52" width="20" height="18" rx="2" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
            <rect x="92" y="52" width="20" height="18" rx="2" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
            <!-- Lower Lip curled under teeth -->
            <path d="M 45 66 Q 70 70 90 70 Q 110 70 135 66 Q 120 88 90 88 Q 60 88 45 66 Z" fill="#E11D48"/>
            <!-- Air friction arrows -->
            <path d="M 62 62 L 52 66 M 118 62 L 128 66" stroke="#2563EB" stroke-width="2" stroke-linecap="round"/>
            <text x="90" y="20" text-anchor="middle" font-family="'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11" fill="#1E40AF">🦷 दांत नीचे के होंठ पर</text>
            <text x="90" y="118" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="10.5" fill="#1D4ED8">F, V (सूखी हवा / कंपन)</text>
          </svg>
        `;

      // 3. जीभ ऊपर मसूड़े पर (Tongue on Ridge - T, D, N, L)
      case 'tongue_up':
      case 'tongue_on_ridge':
        return `
          <svg viewBox="0 0 180 130" width="${w}" height="${h}" class="mouth-art-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g_tongue_up" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FDF4FF"/>
                <stop offset="100%" stop-color="#FAE8FF"/>
              </linearGradient>
            </defs>
            <rect width="180" height="130" rx="14" fill="url(#g_tongue_up)" stroke="#F0ABFC" stroke-width="1.5"/>
            <!-- Upper Palate & Teeth -->
            <path d="M 38 48 Q 90 38 142 48" stroke="#CBD5E1" stroke-width="4" fill="none"/>
            <rect x="74" y="44" width="14" height="12" rx="2" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
            <rect x="92" y="44" width="14" height="12" rx="2" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
            <!-- Gum Ridge Indicator -->
            <circle cx="90" cy="48" r="4" fill="#C084FC"/>
            <!-- Tongue Tip touching the gum behind teeth -->
            <path d="M 50 88 Q 72 82 82 66 Q 88 52 90 50 Q 94 52 98 66 Q 108 82 130 88 Q 90 94 50 88 Z" fill="#FB7185" stroke="#E11D48" stroke-width="1.5"/>
            <!-- Touch Point Star -->
            <circle cx="90" cy="50" r="3" fill="#E11D48"/>
            <text x="90" y="20" text-anchor="middle" font-family="'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11" fill="#86198F">👅 जीभ ऊपर के मसूड़े पर</text>
            <text x="90" y="118" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="10.5" fill="#A21CAF">T, D, N, L (हवा का झटका)</text>
          </svg>
        `;

      // 4. दांत बंद / सीटी व भिनभिनाहट (Teeth Closed - S, Z, C, J, X)
      case 'teeth_closed_hiss':
        return `
          <svg viewBox="0 0 180 130" width="${w}" height="${h}" class="mouth-art-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g_hiss" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ECFDF5"/>
                <stop offset="100%" stop-color="#D1FAE5"/>
              </linearGradient>
            </defs>
            <rect width="180" height="130" rx="14" fill="url(#g_hiss)" stroke="#6EE7B7" stroke-width="1.5"/>
            <!-- Upper Lip -->
            <path d="M 45 48 Q 90 40 135 48 Q 115 54 90 54 Q 65 54 45 48 Z" fill="#F43F5E"/>
            <!-- Upper Teeth Row -->
            <rect x="58" y="52" width="64" height="11" rx="2" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
            <line x1="74" y1="52" x2="74" y2="63" stroke="#CBD5E1"/>
            <line x1="90" y1="52" x2="90" y2="63" stroke="#CBD5E1"/>
            <line x1="106" y1="52" x2="106" y2="63" stroke="#CBD5E1"/>
            <!-- Lower Teeth Row lightly aligned -->
            <rect x="60" y="64" width="60" height="11" rx="2" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
            <line x1="75" y1="64" x2="75" y2="75" stroke="#CBD5E1"/>
            <line x1="90" y1="64" x2="90" y2="75" stroke="#CBD5E1"/>
            <line x1="105" y1="64" x2="105" y2="75" stroke="#CBD5E1"/>
            <!-- Lower Lip -->
            <path d="M 45 76 Q 90 86 135 76 Q 115 72 90 72 Q 65 72 45 76 Z" fill="#E11D48"/>
            <!-- Hiss Wave stream -->
            <path d="M 80 63 Q 90 60 100 63 Q 110 66 120 63" stroke="#059669" stroke-width="2" fill="none"/>
            <text x="90" y="20" text-anchor="middle" font-family="'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11" fill="#065F46">🐝 दांत मिलाकर सीटी/हिस</text>
            <text x="90" y="118" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="10.5" fill="#047857">S, Z, C, J, X (स्स्स / ज़्ज़ज़)</text>
          </svg>
        `;

      // 5. होंठ गोल - सीटी जैसे (Rounded Lips - O, U, W, Q, Long OO)
      case 'rounded_lips':
        return `
          <svg viewBox="0 0 180 130" width="${w}" height="${h}" class="mouth-art-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g_rounded" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FFFBEB"/>
                <stop offset="100%" stop-color="#FEF3C7"/>
              </linearGradient>
            </defs>
            <rect width="180" height="130" rx="14" fill="url(#g_rounded)" stroke="#FCD34D" stroke-width="1.5"/>
            <!-- Puckered Lips Outer Ring -->
            <ellipse cx="90" cy="65" rx="34" ry="26" fill="#F43F5E" stroke="#E11D48" stroke-width="2"/>
            <!-- Dark Inner Mouth Hole -->
            <ellipse cx="90" cy="65" rx="16" ry="12" fill="#881337"/>
            <!-- Lips Highlight Ring -->
            <ellipse cx="90" cy="62" rx="26" ry="18" fill="none" stroke="#FDA4AF" stroke-width="1.5" opacity="0.7"/>
            <text x="90" y="20" text-anchor="middle" font-family="'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11" fill="#92400E">⭕ होंठ आगे गोल (सीटी जैसे)</text>
            <text x="90" y="118" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="10.5" fill="#B45309">W, O, U, Q (दांत नहीं छुएंगे!)</text>
          </svg>
        `;

      // 6. चौड़ी मुस्कान (Wide Smile - Short E, Long EE, A, I, Y)
      case 'wide_smile':
        return `
          <svg viewBox="0 0 180 130" width="${w}" height="${h}" class="mouth-art-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g_smile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FDF2F8"/>
                <stop offset="100%" stop-color="#FCE7F3"/>
              </linearGradient>
            </defs>
            <rect width="180" height="130" rx="14" fill="url(#g_smile)" stroke="#F472B6" stroke-width="1.5"/>
            <!-- Wide smiling lips stretched horizontally -->
            <path d="M 35 62 Q 90 46 145 62 Q 135 84 90 84 Q 45 84 35 62 Z" fill="#F43F5E"/>
            <!-- Open mouth dark interior with teeth visible -->
            <path d="M 46 63 Q 90 56 134 63 Q 124 74 90 74 Q 56 74 46 63 Z" fill="#881337"/>
            <!-- Upper Teeth Line -->
            <rect x="56" y="58" width="68" height="8" rx="2" fill="#FFFFFF"/>
            <line x1="73" y1="58" x2="73" y2="66" stroke="#E2E8F0"/>
            <line x1="90" y1="58" x2="90" y2="66" stroke="#E2E8F0"/>
            <line x1="107" y1="58" x2="107" y2="66" stroke="#E2E8F0"/>
            <text x="90" y="20" text-anchor="middle" font-family="'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11" fill="#9D174D">😃 चौड़ी मुस्कान (Wide Smile)</text>
            <text x="90" y="118" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="10.5" fill="#BE185D">E (Elephant), EE, I, Y</text>
          </svg>
        `;

      // 7. जबड़ा पूरा नीचे खुला (Jaw Dropped Open - Short A /æ/, Long AR)
      case 'jaw_drop':
        return `
          <svg viewBox="0 0 180 130" width="${w}" height="${h}" class="mouth-art-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g_drop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FFF7ED"/>
                <stop offset="100%" stop-color="#FFEDD5"/>
              </linearGradient>
            </defs>
            <rect width="180" height="130" rx="14" fill="url(#g_drop)" stroke="#FDBA74" stroke-width="1.5"/>
            <!-- Deep Big Open Mouth (Apple bite) -->
            <ellipse cx="90" cy="65" rx="38" ry="32" fill="#F43F5E"/>
            <ellipse cx="90" cy="65" rx="30" ry="24" fill="#7F1D1D"/>
            <!-- Flat Tongue at Bottom -->
            <path d="M 66 75 Q 90 70 114 75 Q 104 87 90 87 Q 76 87 66 75 Z" fill="#FB7185"/>
            <!-- Upper Teeth peek -->
            <rect x="74" y="44" width="32" height="7" rx="1" fill="#FFFFFF"/>
            <text x="90" y="20" text-anchor="middle" font-family="'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11" fill="#9A3412">😲 जबड़ा पूरा नीचे (बड़ा मुंह)</text>
            <text x="90" y="118" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="10.5" fill="#C2410C">A (Apple, Cat) /æ/ बड़ा ऐ</text>
          </svg>
        `;

      // 8. दांतों के बीच जीभ (Tongue between Teeth - TH /θ/, /ð/)
      case 'tongue_between_teeth':
        return `
          <svg viewBox="0 0 180 130" width="${w}" height="${h}" class="mouth-art-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g_dental" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#F0FDF4"/>
                <stop offset="100%" stop-color="#DCFCE7"/>
              </linearGradient>
            </defs>
            <rect width="180" height="130" rx="14" fill="url(#g_dental)" stroke="#86EFAC" stroke-width="1.5"/>
            <!-- Lips partially open -->
            <path d="M 45 46 Q 90 38 135 46 Q 115 52 90 52 Q 65 52 45 46 Z" fill="#F43F5E"/>
            <!-- Upper Teeth Row -->
            <rect x="62" y="50" width="56" height="11" rx="1" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
            <!-- Tongue Tip PEEKING OUT between teeth -->
            <path d="M 72 61 Q 90 56 108 61 Q 102 74 90 74 Q 78 74 72 61 Z" fill="#FB7185" stroke="#E11D48" stroke-width="1.2"/>
            <!-- Lower Teeth Row below tongue -->
            <rect x="66" y="70" width="48" height="9" rx="1" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1"/>
            <!-- Lower Lip -->
            <path d="M 45 78 Q 90 88 135 78 Q 115 74 90 74 Q 65 74 45 78 Z" fill="#E11D48"/>
            <text x="90" y="20" text-anchor="middle" font-family="'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11" fill="#166534">👅 जीभ दांतों के बीच में</text>
            <text x="90" y="118" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="10.5" fill="#15803D">TH (Think=थ, This=द)</text>
          </svg>
        `;

      // 9. खुले गले से सांस / हवा (Throat & Velar - H, K, G, NG)
      case 'throat_breath':
        return `
          <svg viewBox="0 0 180 130" width="${w}" height="${h}" class="mouth-art-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g_throat" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#F8FAFC"/>
                <stop offset="100%" stop-color="#E2E8F0"/>
              </linearGradient>
            </defs>
            <rect width="180" height="130" rx="14" fill="url(#g_throat)" stroke="#94A3B8" stroke-width="1.5"/>
            <!-- Open mouth oval -->
            <ellipse cx="90" cy="64" rx="34" ry="24" fill="#475569"/>
            <!-- Deep throat tunnel -->
            <circle cx="90" cy="64" r="14" fill="#0F172A"/>
            <!-- Breath flow wave from deep throat -->
            <path d="M 90 74 L 90 44 M 82 70 L 82 48 M 98 70 L 98 48" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Lips outline -->
            <path d="M 50 64 Q 90 48 130 64 Q 90 80 50 64 Z" stroke="#F43F5E" stroke-width="4" fill="none"/>
            <text x="90" y="20" text-anchor="middle" font-family="'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11" fill="#334155">🌬️ खुले गले से सांस / हवा</text>
            <text x="90" y="118" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="10.5" fill="#475569">H, K, G (फेफड़ों से गर्म हवा)</text>
          </svg>
        `;

      // 10. आलसी रिलैक्स मुंह (Lazy Neutral - Schwa /ə/)
      case 'relax_schwa':
      default:
        return `
          <svg viewBox="0 0 180 130" width="${w}" height="${h}" class="mouth-art-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g_schwa" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#F1F5F9"/>
                <stop offset="100%" stop-color="#E2E8F0"/>
              </linearGradient>
            </defs>
            <rect width="180" height="130" rx="14" fill="url(#g_schwa)" stroke="#CBD5E1" stroke-width="1.5"/>
            <!-- Completely relaxed lips, barely parted -->
            <ellipse cx="90" cy="65" rx="32" ry="16" fill="#F43F5E" opacity="0.85"/>
            <ellipse cx="90" cy="65" rx="20" ry="8" fill="#475569"/>
            <text x="90" y="20" text-anchor="middle" font-family="'Noto Sans Devanagari', sans-serif" font-weight="800" font-size="11" fill="#475569">😴 100% रिलैक्स मुंह (Schwa)</text>
            <text x="90" y="118" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="10.5" fill="#64748B">/ə/ सबसे आलसी 'अ' ध्वनि</text>
          </svg>
        `;
    }
  }
};

if (typeof window !== 'undefined') {
  window.MouthArt = MouthArt;
}

if (typeof module !== 'undefined') {
  module.exports = MouthArt;
}
