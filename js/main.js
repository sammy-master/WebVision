/**
 * WebVision — Full-Stack Web Engineering & AWP Interactive Studio
 * Master Module Registry & Interactive Studio Controller
 */

const MODULES = [
  // ==================== 1. MULTI-PAGE WEBSITES ====================
  {
    id: "universe-blog",
    title: "The Universe Astrophysics Blog",
    subtitle: "5-Page Interactive Space & Cosmology Portal",
    category: "Multi-Page Websites",
    icon: "🌌",
    entry: "modules/universe-blog/Universe-Blog.html",
    tags: ["HTML5", "CSS3", "Multi-Page Architecture", "Responsive Layout", "Google Fonts"],
    description:
      "A complete 5-page educational astrophysics portal exploring Galaxies, Stellar Evolution, Black Holes, and Cosmology with custom dark-space theming, interactive navigation, and media galleries.",
    subpages: [
      { label: "Home (Universe)", path: "modules/universe-blog/Universe-Blog.html" },
      { label: "Galaxies", path: "modules/universe-blog/galaxies.html" },
      { label: "Stars", path: "modules/universe-blog/stars.html" },
      { label: "Black Holes", path: "modules/universe-blog/blackholes.html" },
      { label: "Contact", path: "modules/universe-blog/contact.html" }
    ],
    files: [
      { label: "Universe-Blog.html", path: "modules/universe-blog/Universe-Blog.html" },
      { label: "galaxies.html", path: "modules/universe-blog/galaxies.html" },
      { label: "stars.html", path: "modules/universe-blog/stars.html" },
      { label: "blackholes.html", path: "modules/universe-blog/blackholes.html" },
      { label: "contact.html", path: "modules/universe-blog/contact.html" }
    ]
  },
  {
    id: "personal-website-v1",
    title: "Personal Portfolio Website V1",
    subtitle: "6-Page Academic & Engineering Portfolio",
    category: "Multi-Page Websites",
    icon: "🌐",
    entry: "modules/personal-website-v1/index.html",
    tags: ["HTML5", "CSS3", "Flexbox", "Semantic Markup", "Multi-Page Navigation"],
    description:
      "A 6-page semantic personal portfolio website featuring Home, About, Academic Qualifications, Courses, Engineering Projects, and Contact sections styled with a unified stylesheet.",
    subpages: [
      { label: "Home", path: "modules/personal-website-v1/index.html" },
      { label: "About", path: "modules/personal-website-v1/about.html" },
      { label: "Qualification", path: "modules/personal-website-v1/qualification.html" },
      { label: "Courses", path: "modules/personal-website-v1/courses.html" },
      { label: "Projects", path: "modules/personal-website-v1/projects.html" },
      { label: "Contact", path: "modules/personal-website-v1/contact.html" }
    ],
    files: [
      { label: "index.html", path: "modules/personal-website-v1/index.html" },
      { label: "style.css", path: "modules/personal-website-v1/style.css" },
      { label: "about.html", path: "modules/personal-website-v1/about.html" },
      { label: "qualification.html", path: "modules/personal-website-v1/qualification.html" },
      { label: "courses.html", path: "modules/personal-website-v1/courses.html" },
      { label: "projects.html", path: "modules/personal-website-v1/projects.html" },
      { label: "contact.html", path: "modules/personal-website-v1/contact.html" }
    ]
  },

  // ==================== 2. INTERACTIVE JS & AJAX ====================
  {
    id: "awpl-directory",
    title: "AWPL User Directory & JSON Fetch Engine",
    subtitle: "Asynchronous XMLHttpRequest + JSON Parser",
    category: "Interactive JS & AJAX",
    icon: "⚡",
    entry: "modules/awpl-directory/index.html",
    tags: ["JavaScript", "AJAX/JSON", "XMLHttpRequest", "DOM Manipulation", "CSS3"],
    description:
      "Asynchronous student directory lookup powered by XMLHttpRequest (AJAX). Dynamically fetches structured user metadata from User.json and renders profile cards into the DOM without page reloads.",
    files: [
      { label: "index.html", path: "modules/awpl-directory/index.html" },
      { label: "script.js", path: "modules/awpl-directory/script.js" },
      { label: "style.css", path: "modules/awpl-directory/style.css" },
      { label: "User.json", path: "modules/awpl-directory/User.json" }
    ]
  },
  {
    id: "form-validation",
    title: "Dynamic Form Validation Suite",
    subtitle: "Real-Time Regex, Age, Phone & Password Validator",
    category: "Interactive JS & AJAX",
    icon: "🛡️",
    entry: "modules/awpl-forms-and-cv/form-validation.html",
    tags: ["JavaScript", "Regex Validation", "HTML5 Forms", "Real-Time Feedback", "CSS3"],
    description:
      "Interactive client-side registration form validation engine enforcing Regex email patterns, 10-digit phone verification, age bounds (1-120), gender selection, and password confirmation matching.",
    files: [
      { label: "form-validation.html", path: "modules/awpl-forms-and-cv/form-validation.html" }
    ]
  },

  // ==================== 3. GALLERY & PROFILES ====================
  {
    id: "image-gallery",
    title: "Interactive Food Photo Gallery",
    subtitle: "30-Card Responsive CSS Grid Media Showcase",
    category: "Gallery & Profiles",
    icon: "📸",
    entry: "modules/core-html-showcase/ImageGallery.html",
    tags: ["HTML5", "CSS3", "CSS Grid", "Hover Transitions", "Responsive Design"],
    description:
      "Responsive 30-item culinary photography showcase utilizing CSS Grid auto-fit columns, smooth scale/elevation hover transitions, and mobile-first media queries.",
    files: [
      { label: "ImageGallery.html", path: "modules/core-html-showcase/ImageGallery.html" }
    ]
  },
  {
    id: "professional-resume",
    title: "Executive Two-Column Resume",
    subtitle: "Custom CSS Grid Resume with Skill Progress Bars",
    category: "Gallery & Profiles",
    icon: "📄",
    entry: "modules/awpl-forms-and-cv/resume.html",
    tags: ["HTML5", "CSS3", "CSS Grid", "Progress Bars", "Print-Ready UI"],
    description:
      "Two-column professional engineering resume built with CSS Grid (`1fr 2fr`), featuring custom skill proficiency meters, education timeline, project highlights, and tag pills.",
    files: [
      { label: "resume.html", path: "modules/awpl-forms-and-cv/resume.html" }
    ]
  },
  {
    id: "academic-cv",
    title: "Bootstrap 5 Academic Curriculum Vitae",
    subtitle: "Responsive Card-Based Developer CV",
    category: "Gallery & Profiles",
    icon: "🎓",
    entry: "modules/awpl-forms-and-cv/cv.html",
    tags: ["HTML5", "Bootstrap 5", "CSS3", "Responsive Grid", "UI Components"],
    description:
      "Modern academic CV constructed with Bootstrap 5 grid containers, elevated shadow cards, animated progress bars, and responsive flex headers.",
    files: [
      { label: "cv.html", path: "modules/awpl-forms-and-cv/cv.html" }
    ]
  },
  {
    id: "student-biodata",
    title: "Dark-Mode Student Biodata Card",
    subtitle: "Gradient Header, Social Links & Profile Showcase",
    category: "Gallery & Profiles",
    icon: "🧑‍💻",
    entry: "modules/core-html-showcase/biodata.html",
    tags: ["HTML5", "CSS3", "FontAwesome Icons", "Dark Theme", "Gradient UI"],
    description:
      "Dark-themed student biodata page styled with vibrant orange-crimson gradients, circular avatar framing, FontAwesome social links, and structured achievement cards.",
    files: [
      { label: "biodata.html", path: "modules/core-html-showcase/biodata.html" }
    ]
  },
  {
    id: "core-typography-lab",
    title: "Core HTML5 Typography & Marquee Lab",
    subtitle: "Semantic Formatting Tags & Multi-Axis Marquees",
    category: "Gallery & Profiles",
    icon: "🔤",
    entry: "modules/core-html-showcase/SakshamsharmaG47.html",
    tags: ["HTML5", "Typography", "Semantic Elements", "Marquee Physics"],
    description:
      "Foundational HTML5 document demonstrating inline text semantics (<strong>, <em>, <mark>, <del>, <sub>, <sup>), color styling, and nested 2D bouncing marquee animations.",
    files: [
      { label: "SakshamsharmaG47.html", path: "modules/core-html-showcase/SakshamsharmaG47.html" }
    ]
  },

  // ==================== 4. CSS & LAYOUT LABS ====================
  {
    id: "fl-q1",
    title: "FL_Q1 — Bootstrap Weather Forecast Table",
    subtitle: "6-Day Tabular Weather UI with Icons & Temperatures",
    category: "CSS & Layout Labs",
    icon: "⛅",
    entry: "modules/flexbox-layout-lab/FL_Q1.html",
    tags: ["HTML5", "Bootstrap 5", "Responsive Tables", "CSS3"],
    description:
      "Lab Q1: Demonstrates a bordered, centered Bootstrap 5 weather forecast table displaying dates, responsive weather icons, and temperature readings across 6 columns.",
    files: [
      { label: "FL_Q1.html", path: "modules/flexbox-layout-lab/FL_Q1.html" }
    ]
  },
  {
    id: "fl-q2",
    title: "FL_Q2 — Horizontal 12-Column Grid System",
    subtitle: "Bootstrap .row & .col-2 Horizontal Flow",
    category: "CSS & Layout Labs",
    icon: "📐",
    entry: "modules/flexbox-layout-lab/FL_Q2.html",
    tags: ["HTML5", "Bootstrap 5", "Flexbox Grid", "12-Column Layout"],
    description:
      "Lab Q2: Illustrates converting vertical block elements into a 6-column horizontal row using Bootstrap's 12-column flexbox grid system (.row and .col-2).",
    files: [
      { label: "FL_Q2.html", path: "modules/flexbox-layout-lab/FL_Q2.html" }
    ]
  },
  {
    id: "fl-q3",
    title: "FL_Q3 — <input type='button'> vs <button> Lab",
    subtitle: "Interactive DOM Event & Form Submission Comparison",
    category: "CSS & Layout Labs",
    icon: "🔘",
    entry: "modules/flexbox-layout-lab/FL_Q3.html",
    tags: ["HTML5", "JavaScript", "Bootstrap 5", "Form Semantics"],
    description:
      "Lab Q3: Interactive comparison between <input type='button'> and <button> elements in Bootstrap, demonstrating rich HTML child support and default form submit behavior.",
    files: [
      { label: "FL_Q3.html", path: "modules/flexbox-layout-lab/FL_Q3.html" }
    ]
  },
  {
    id: "fl-q4",
    title: "FL_Q4 — Centered Flexbox Navbar Alignment",
    subtitle: "Bootstrap .navbar-expand-lg & .justify-content-center",
    category: "CSS & Layout Labs",
    icon: "🧭",
    entry: "modules/flexbox-layout-lab/FL_Q4.html",
    tags: ["HTML5", "Bootstrap 5", "Flexbox Alignment", "Navbar UI"],
    description:
      "Lab Q4: Demonstrates horizontal center alignment inside a responsive dark Bootstrap navigation bar using flexbox utility classes.",
    files: [
      { label: "FL_Q4.html", path: "modules/flexbox-layout-lab/FL_Q4.html" }
    ]
  },
  {
    id: "fl-q5",
    title: "FL_Q5 — Bootstrap 5 Wildlife Image Carousel",
    subtitle: "5-Slide Auto-Cycling Carousel with Prev/Next Controls",
    category: "CSS & Layout Labs",
    icon: "🦁",
    entry: "modules/flexbox-layout-lab/FL_Q5.html",
    tags: ["HTML5", "Bootstrap 5", "JavaScript", "Carousel Component"],
    description:
      "Lab Q5: Interactive 5-slide wildlife photography slideshow powered by Bootstrap's Carousel JavaScript plugin with object-fit cover framing and directional controls.",
    files: [
      { label: "FL_Q5.html", path: "modules/flexbox-layout-lab/FL_Q5.html" }
    ]
  },
  {
    id: "fl-q6a",
    title: "FL_Q6(a) — Multi-Frame Table Span Layout",
    subtitle: "Complex colspan Wireframe & Color-Coded Rows",
    category: "CSS & Layout Labs",
    icon: "🧱",
    entry: "modules/flexbox-layout-lab/FL_Q6(a).html",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "Table Colspan"],
    description:
      "Lab Q6(a): Implements a multi-frame wireframe specification using HTML table colspan attributes and custom color-coded row classes.",
    files: [
      { label: "FL_Q6(a).html", path: "modules/flexbox-layout-lab/FL_Q6(a).html" }
    ]
  },
  {
    id: "fl-q6b",
    title: "FL_Q6(b) — CSS Keyframe Blinking Warning Banner",
    subtitle: "High-Contrast Alert UI with @keyframes Opacity Loop",
    category: "CSS & Layout Labs",
    icon: "🚨",
    entry: "modules/flexbox-layout-lab/FL_Q6(b).html",
    tags: ["HTML5", "CSS3", "Keyframe Animations", "Alert UI"],
    description:
      "Lab Q6(b): Emergency warning display combining a CSS3 @keyframes infinite alternating opacity animation with a scrolling ticker message.",
    files: [
      { label: "FL_Q6(b).html", path: "modules/flexbox-layout-lab/FL_Q6(b).html" }
    ]
  },
  {
    id: "fl-q7a",
    title: "FL_Q7(a) — PCU University Landing Page",
    subtitle: "Full-Bleed Background Cover & Multi-Font Course List",
    category: "CSS & Layout Labs",
    icon: "🏛️",
    entry: "modules/flexbox-layout-lab/FL_Q7(a).html",
    tags: ["HTML5", "CSS3", "Background Cover", "Typography Styling"],
    description:
      "Lab Q7(a): College showcase landing page for Pimpri Chinchwad University (PCU) featuring a full-cover hero background image and distinct font-family styling per engineering department.",
    files: [
      { label: "FL_Q7(a).html", path: "modules/flexbox-layout-lab/FL_Q7(a).html" }
    ]
  },
  {
    id: "fl-q7b",
    title: "FL_Q7(b) — Article Submission Portal Form",
    subtitle: "Centered Card Form with Select Dropdown & Reset Controls",
    category: "CSS & Layout Labs",
    icon: "📝",
    entry: "modules/flexbox-layout-lab/FL_Q7(b).html",
    tags: ["HTML5", "CSS3", "Form Controls", "Card Layout"],
    description:
      "Lab Q7(b): Clean article metadata submission form with file path input, author field, category dropdown (Technical, Literary, General), and submit/reset actions.",
    files: [
      { label: "FL_Q7(b).html", path: "modules/flexbox-layout-lab/FL_Q7(b).html" }
    ]
  }
];

const CATEGORIES = [
  "All Modules",
  "Multi-Page Websites",
  "Interactive JS & AJAX",
  "Gallery & Profiles",
  "CSS & Layout Labs"
];

// Studio State
let state = {
  activeCategory: "All Modules",
  searchQuery: "",
  activeModuleId: MODULES[0].id,
  activeSubpagePath: MODULES[0].entry,
  activeFileIndex: 0,
  viewMode: "preview", // "preview" | "code"
  viewport: "desktop", // "desktop" | "tablet" | "mobile"
  currentCodeText: ""
};

// DOM Elements
const categoryPillsEl = document.getElementById("categoryPills");
const sidebarListEl = document.getElementById("sidebarModuleList");
const searchInputEl = document.getElementById("moduleSearchInput");
const moduleCountEl = document.getElementById("moduleCountText");

const moduleTitleEl = document.getElementById("activeModuleTitle");
const moduleCategoryBadgeEl = document.getElementById("activeModuleCategory");
const moduleDescEl = document.getElementById("activeModuleDesc");
const moduleTagsEl = document.getElementById("activeModuleTags");

const subpageBarEl = document.getElementById("subpageBar");
const subpageBtnsEl = document.getElementById("subpageBtns");

const previewAreaEl = document.getElementById("previewViewportArea");
const previewShellEl = document.getElementById("previewFrameShell");
const previewIframeEl = document.getElementById("previewIframe");
const browserAddressEl = document.getElementById("browserAddress");
const browserDimensionsEl = document.getElementById("browserDimensions");
const openNewTabBtn = document.getElementById("openNewTabBtn");
const reloadPreviewBtn = document.getElementById("reloadPreviewBtn");

const codeAreaEl = document.getElementById("codeInspectorArea");
const fileTabsEl = document.getElementById("fileTabs");
const codeContentEl = document.getElementById("codeContent");
const copyCodeBtn = document.getElementById("copyCodeBtn");

const catalogOverlayEl = document.getElementById("catalogOverlay");
const catalogGridEl = document.getElementById("catalogGrid");
const toggleCatalogBtn = document.getElementById("toggleCatalogBtn");
const closeCatalogBtn = document.getElementById("closeCatalogBtn");

// Initialize Studio
function initStudio() {
  renderCategoryPills();
  renderSidebar();
  renderCatalogGrid();
  loadModule(MODULES[0].id);
  bindEvents();
}

// Render Topbar Category Filter Pills
function renderCategoryPills() {
  categoryPillsEl.innerHTML = CATEGORIES.map((cat) => {
    const count =
      cat === "All Modules"
        ? MODULES.length
        : MODULES.filter((m) => m.category === cat).length;
    const isActive = state.activeCategory === cat ? "active" : "";
    return `
      <button class="category-pill ${isActive}" data-category="${cat}">
        <span>${cat}</span>
        <span class="pill-count">${count}</span>
      </button>
    `;
  }).join("");

  categoryPillsEl.querySelectorAll(".category-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeCategory = btn.getAttribute("data-category");
      renderCategoryPills();
      renderSidebar();
    });
  });
}

// Filter Modules by Category & Search Query
function getFilteredModules() {
  return MODULES.filter((m) => {
    const matchesCategory =
      state.activeCategory === "All Modules" || m.category === state.activeCategory;
    const q = state.searchQuery.trim().toLowerCase();
    if (!q) return matchesCategory;
    const hay = `${m.title} ${m.subtitle} ${m.category} ${m.tags.join(" ")} ${m.description}`.toLowerCase();
    return matchesCategory && hay.includes(q);
  });
}

// Render Sidebar Module List
function renderSidebar() {
  const filtered = getFilteredModules();
  moduleCountEl.textContent = `Showing ${filtered.length} of ${MODULES.length} modules`;

  if (filtered.length === 0) {
    sidebarListEl.innerHTML = `
      <div style="padding: 28px 14px; text-align: center; color: var(--text-muted); font-size: 12.5px;">
        No modules match "<strong>${escapeHtml(state.searchQuery)}</strong>".
      </div>
    `;
    return;
  }

  // Group by category
  const groups = {};
  filtered.forEach((m) => {
    if (!groups[m.category]) groups[m.category] = [];
    groups[m.category].push(m);
  });

  let html = "";
  Object.keys(groups).forEach((cat) => {
    html += `
      <div class="sidebar-group-label">
        <span>${cat}</span>
        <span>${groups[cat].length}</span>
      </div>
    `;
    groups[cat].forEach((m) => {
      const isActive = m.id === state.activeModuleId ? "active" : "";
      html += `
        <button class="module-item ${isActive}" data-id="${m.id}">
          <div class="module-icon">${m.icon}</div>
          <div class="module-item-body">
            <div class="module-item-title">${m.title}</div>
            <div class="module-item-sub">${m.subtitle}</div>
            <div class="module-mini-tags">
              ${m.tags
                .slice(0, 3)
                .map((t) => `<span class="mini-tag">${t}</span>`)
                .join("")}
            </div>
          </div>
        </button>
      `;
    });
  });

  sidebarListEl.innerHTML = html;

  sidebarListEl.querySelectorAll(".module-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      catalogOverlayEl.classList.remove("visible");
      toggleCatalogBtn.classList.remove("active");
      loadModule(id);
    });
  });
}

// Load Selected Module into Stage
function loadModule(moduleId) {
  const mod = MODULES.find((m) => m.id === moduleId) || MODULES[0];
  state.activeModuleId = mod.id;
  state.activeSubpagePath = mod.entry;
  state.activeFileIndex = 0;

  // Update Header Info
  moduleTitleEl.textContent = `${mod.icon} ${mod.title}`;
  moduleCategoryBadgeEl.textContent = mod.category;
  moduleDescEl.textContent = mod.description;
  moduleTagsEl.innerHTML = mod.tags
    .map((t) => `<span class="tech-tag">${t}</span>`)
    .join("");

  // Subpages Bar (for Multi-Page Websites)
  if (mod.subpages && mod.subpages.length > 0) {
    subpageBarEl.classList.add("visible");
    renderSubpageButtons(mod);
  } else {
    subpageBarEl.classList.remove("visible");
  }

  // Update Iframe & Address Bar
  updatePreviewFrame(state.activeSubpagePath);

  // Render Source Inspector File Tabs
  renderFileTabs(mod);
  if (state.viewMode === "code") {
    fetchAndDisplayCode(mod.files[state.activeFileIndex].path);
  }

  // Highlight active item in sidebar
  renderSidebar();
}

function renderSubpageButtons(mod) {
  subpageBtnsEl.innerHTML = mod.subpages
    .map((sp) => {
      const isActive = sp.path === state.activeSubpagePath ? "active" : "";
      return `<button class="subpage-btn ${isActive}" data-path="${sp.path}">${sp.label}</button>`;
    })
    .join("");

  subpageBtnsEl.querySelectorAll(".subpage-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeSubpagePath = btn.getAttribute("data-path");
      renderSubpageButtons(mod);
      updatePreviewFrame(state.activeSubpagePath);

      // Also sync active file tab if matching
      const matchingIdx = mod.files.findIndex((f) => f.path === state.activeSubpagePath);
      if (matchingIdx !== -1) {
        state.activeFileIndex = matchingIdx;
        renderFileTabs(mod);
        if (state.viewMode === "code") {
          fetchAndDisplayCode(mod.files[state.activeFileIndex].path);
        }
      }
    });
  });
}

function updatePreviewFrame(path) {
  previewIframeEl.src = path;
  browserAddressEl.textContent = `https://webvision.studio/${path}`;
  openNewTabBtn.href = path;
}

// Render Source Code File Tabs
function renderFileTabs(mod) {
  fileTabsEl.innerHTML = mod.files
    .map((f, idx) => {
      const isActive = idx === state.activeFileIndex ? "active" : "";
      return `<button class="file-tab ${isActive}" data-idx="${idx}">${f.label}</button>`;
    })
    .join("");

  fileTabsEl.querySelectorAll(".file-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeFileIndex = parseInt(btn.getAttribute("data-idx"), 10);
      renderFileTabs(mod);
      fetchAndDisplayCode(mod.files[state.activeFileIndex].path);
    });
  });
}

// Fetch and Format Source Code for Inspector
async function fetchAndDisplayCode(filePath) {
  codeContentEl.textContent = "Loading source code...";
  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    state.currentCodeText = text;
    renderCodeWithLineNumbers(text);
  } catch (err) {
    // Fallback if opened via file:// protocol where fetch() may be blocked:
    // Try reading from iframe document if same path
    try {
      if (
        previewIframeEl.contentDocument &&
        previewIframeEl.contentDocument.documentElement
      ) {
        const html =
          "<!DOCTYPE html>\n" +
          previewIframeEl.contentDocument.documentElement.outerHTML;
        state.currentCodeText = html;
        renderCodeWithLineNumbers(html);
        return;
      }
    } catch (_) {}
    state.currentCodeText = `// Source file: ${filePath}\n// Serve over HTTP (e.g. npx serve or Vercel) to inspect raw source files.`;
    renderCodeWithLineNumbers(state.currentCodeText);
  }
}

function renderCodeWithLineNumbers(code) {
  const lines = code.replace(/\r\n/g, "\n").split("\n");
  const numbered = lines
    .map((line, i) => {
      const num = String(i + 1).padStart(3, " ");
      return `<span style="color:#475569;user-select:none;margin-right:16px;">${num}</span>${escapeHtml(line)}`;
    })
    .join("\n");
  codeContentEl.innerHTML = numbered;
}

// Render All-Modules Bento Catalog Overlay
function renderCatalogGrid() {
  catalogGridEl.innerHTML = MODULES.map(
    (m) => `
    <div class="catalog-card" data-id="${m.id}">
      <div>
        <div class="catalog-card-top">
          <div class="module-icon" style="width:38px;height:38px;font-size:18px;">${m.icon}</div>
          <span class="module-category-badge">${m.category}</span>
        </div>
        <h3>${m.title}</h3>
        <p>${m.description}</p>
      </div>
      <div class="module-tech-tags">
        ${m.tags.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>
  `
  ).join("");

  catalogGridEl.querySelectorAll(".catalog-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      catalogOverlayEl.classList.remove("visible");
      toggleCatalogBtn.classList.remove("active");
      loadModule(id);
    });
  });
}

// Set Viewport Size (Desktop / Tablet / Mobile)
function setViewport(mode) {
  state.viewport = mode;
  previewShellEl.classList.remove(
    "viewport-desktop",
    "viewport-tablet",
    "viewport-mobile"
  );
  previewShellEl.classList.add(`viewport-${mode}`);

  const dimMap = {
    desktop: "100% Responsive",
    tablet: "768px × Tablet",
    mobile: "375px × Mobile"
  };
  browserDimensionsEl.textContent = dimMap[mode] || "100%";

  document.querySelectorAll("[data-viewport]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-viewport") === mode);
  });
}

// Set View Mode (Live Preview vs Source Code Inspector)
function setViewMode(mode) {
  state.viewMode = mode;
  document.querySelectorAll("[data-viewmode]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-viewmode") === mode);
  });

  if (mode === "code") {
    previewAreaEl.style.display = "none";
    codeAreaEl.classList.add("visible");
    const mod = MODULES.find((m) => m.id === state.activeModuleId) || MODULES[0];
    fetchAndDisplayCode(mod.files[state.activeFileIndex].path);
  } else {
    codeAreaEl.classList.remove("visible");
    previewAreaEl.style.display = "flex";
  }
}

function bindEvents() {
  // Search Filter
  searchInputEl.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderSidebar();
  });

  // Keyboard shortcut '/' to focus search
  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInputEl) {
      e.preventDefault();
      searchInputEl.focus();
    }
  });

  // Viewport Switcher Buttons
  document.querySelectorAll("[data-viewport]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setViewport(btn.getAttribute("data-viewport"));
    });
  });

  // View Mode Switcher Buttons
  document.querySelectorAll("[data-viewmode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setViewMode(btn.getAttribute("data-viewmode"));
    });
  });

  // Reload Iframe Button
  reloadPreviewBtn.addEventListener("click", () => {
    if (previewIframeEl.contentWindow) {
      previewIframeEl.contentWindow.location.reload();
    } else {
      previewIframeEl.src = state.activeSubpagePath;
    }
  });

  // Copy Source Code Button
  copyCodeBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(state.currentCodeText);
      const orig = copyCodeBtn.innerHTML;
      copyCodeBtn.innerHTML = "&#10003; Copied!";
      setTimeout(() => {
        copyCodeBtn.innerHTML = orig;
      }, 1800);
    } catch (_) {}
  });

  // Catalog Grid Toggle
  toggleCatalogBtn.addEventListener("click", () => {
    const isVis = catalogOverlayEl.classList.toggle("visible");
    toggleCatalogBtn.classList.toggle("active", isVis);
  });

  closeCatalogBtn.addEventListener("click", () => {
    catalogOverlayEl.classList.remove("visible");
    toggleCatalogBtn.classList.remove("active");
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", initStudio);
