/* ============================================================
   DEDICATIONS WALL - the only file you edit to rebrand / set up
   ============================================================ */
window.WALL = {

  /* 1. Firebase: Project settings > Your apps > Web app > config */
  firebase: {
    apiKey: "AIzaSyBg79FEPPfymPc3WjNI9AhUn_z3sa6ven8",
    authDomain: "dedication-wall.firebaseapp.com",
    projectId: "dedication-wall",
    appId: "1:732193446619:web:8bde8a9a77ed54ef20cafe"
  },
  collection: "dedications",

  /* 2. Branding */
  brand: {
    title: "Bride & Groom",            // big title on wall + booth start screen
    subtitle: "Dedications Wall",       // line under the title
    date: "October 24, 2026",           // shown on the wall header ("" to hide)
    logo: "",                           // e.g. "logo.png" next to this file ("" = none)
    fontsUrl: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,500;1,6..96,500&family=Figtree:wght@400;500;600&display=swap",
    fontDisplay: "'Bodoni Moda', Georgia, serif",
    fontBody: "'Figtree', system-ui, sans-serif",
    colors: {
      bg:         "#14221d",   // page background
      bgDeep:     "#0d1713",   // darker corners / photo placeholders
      card:       "#eef1ea",   // wall cards + booth inputs
      cardText:   "#1b2a24",   // text on cards
      text:       "#eef1ea",   // text on page background
      muted:      "#9db0a5",   // secondary text
      accent:     "#e9b7a7",   // buttons + highlights
      accentText: "#2a1710",   // text on accent buttons
      danger:     "#f0897b"    // error messages
    }
  },

  /* 3. Booth (touchscreen) wording + limits */
  booth: {
    startPrompt:   "Leave a message for the newlyweds",
    startButton:   "Start",
    namePrompt:    "What's your name?",
    namePlaceholder: "Your name",
    photoPrompt:   "Add your photo",
    messagePrompt: "Write your dedication",
    messagePlaceholder: "Your message to the couple",
    sendButton:    "Send to the wall",
    thanksTitle:   "Thank you!",
    thanksText:    "Look up. You're on the wall.",
    maxName:       40,
    maxMessage:    240,
    thanksSeconds: 6,     // auto-return to start after sending
    idleSeconds:   90     // reset if nobody touches the screen mid-flow
  },

  /* 4. Wall (big screen) behaviour */
  wall: {
    rows:              2,    // rows of cards drifting left to right
    speed:             3.5,  // drift speed, % of screen width per second
    bottomSpace:       0,    // fraction of the screen left empty at the bottom (0.2 = bottom 20%)
    maxEntries:        200,  // newest N entries kept live
    spotlightEverySec: 12,   // gap between spotlights
    spotlightHoldSec:  9,    // how long a spotlight stays up
    emptyText:         "Waiting for the first dedication"
  }
};

/* ---- shared: apply brand to the page (don't edit) ---- */
(function () {
  var b = WALL.brand, c = b.colors, s = document.documentElement.style;
  s.setProperty("--bg", c.bg);           s.setProperty("--bg-deep", c.bgDeep);
  s.setProperty("--card", c.card);       s.setProperty("--card-text", c.cardText);
  s.setProperty("--text", c.text);       s.setProperty("--muted", c.muted);
  s.setProperty("--accent", c.accent);   s.setProperty("--accent-text", c.accentText);
  s.setProperty("--danger", c.danger);
  s.setProperty("--display", b.fontDisplay); s.setProperty("--body", b.fontBody);
  if (b.fontsUrl) {
    var l = document.createElement("link");
    l.rel = "stylesheet"; l.href = b.fontsUrl; document.head.appendChild(l);
  }
})();
