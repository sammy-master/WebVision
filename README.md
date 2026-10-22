# 🌌 WebVision — Full-Stack Web Engineering & AWP Interactive Studio

**WebVision** is a unified, Vercel-ready interactive web engineering workbench that consolidates **18 standalone web applications, multi-page websites, AJAX/JSON tools, client-side validation engines, and Bootstrap/CSS3 layout labs** into a single cohesive developer studio.

---

## ✨ Key Studio Features

- **🗂️ Categorized Module Explorer & Instant Search (`/`)**:
  Filter across **4 core engineering tracks** (`Multi-Page Websites`, `Interactive JS & AJAX`, `Gallery & Profiles`, `CSS & Layout Labs`) or search by keyword and technology tag.
- **📱 Responsive Viewport Switcher**:
  Preview any module in **Desktop (`100%`)**, **Tablet (`768px`)**, or **Mobile (`375px`)** device frames in real time.
- **🔍 Live Preview & Multi-File Source Code Inspector**:
  Toggle seamlessly between the interactive `<iframe>` preview and a multi-tab **Source Code Inspector** with line numbers and one-click clipboard copy.
- **🧭 Multi-Page Quick-Jump Bar**:
  Jump directly to sub-pages of multi-page architectures (`Universe Astrophysics Blog` and `Personal Portfolio Website V1`) or navigate organically inside the live preview.
- **🍱 Bento Module Catalog**:
  Open a full-screen grid overview of all 18 modules with descriptions and technology badges.

---

## 📦 Consolidated Modules (18 Total)

### 1. Multi-Page Websites (`modules/universe-blog/`, `modules/personal-website-v1/`)
| Module | Pages | Tech Stack |
| :--- | :--- | :--- |
| **The Universe Astrophysics Blog** | `Universe-Blog.html`, `galaxies.html`, `stars.html`, `blackholes.html`, `contact.html` | HTML5, CSS3, Google Fonts, Media Layouts |
| **Personal Portfolio Website V1** | `index.html`, `about.html`, `qualification.html`, `courses.html`, `projects.html`, `contact.html` | HTML5, CSS3, Flexbox, Semantic Navigation |

### 2. Interactive JS & AJAX (`modules/awpl-directory/`, `modules/awpl-forms-and-cv/`)
| Module | Files | Tech Stack |
| :--- | :--- | :--- |
| **AWPL User Directory & JSON Fetch Engine** | `index.html`, `script.js`, `style.css`, `User.json` | JavaScript, AJAX (`XMLHttpRequest`), JSON |
| **Dynamic Form Validation Suite** | `form-validation.html` | JavaScript, Regex Validation, DOM Feedback |

### 3. Gallery & Profiles (`modules/core-html-showcase/`, `modules/awpl-forms-and-cv/`)
| Module | Files | Tech Stack |
| :--- | :--- | :--- |
| **Interactive Food Photo Gallery** | `ImageGallery.html` | CSS Grid (`auto-fit`), Hover Transitions |
| **Executive Two-Column Resume** | `resume.html`, `saksham.jpg` | CSS Grid (`1fr 2fr`), Skill Bars |
| **Bootstrap 5 Academic CV** | `cv.html`, `saksham.jpg` | Bootstrap 5, Progress Bars, Shadow Cards |
| **Dark-Mode Student Biodata Card** | `biodata.html`, `saksham.jpg` | CSS3 Gradients, FontAwesome Icons |
| **Core HTML5 Typography & Marquee Lab** | `SakshamsharmaG47.html` | Semantic Formatting, 2D Nested Marquees |

### 4. CSS & Layout Labs (`modules/flexbox-layout-lab/`)
- **`FL_Q1.html`** — 6-Day Bootstrap Weather Forecast Table with icons and temperature cards
- **`FL_Q2.html`** — Horizontal 12-Column Grid System (`.row` & `.col-2`)
- **`FL_Q3.html`** — `<input type="button">` vs `<button>` DOM & Form Submission Comparison
- **`FL_Q4.html`** — Centered Flexbox Navbar Alignment
- **`FL_Q5.html`** — Bootstrap 5 Wildlife Image Carousel (`1.jpg`–`5.jpg`)
- **`FL_Q6(a).html`** — Multi-Frame Table Span Layout (`colspan` wireframe)
- **`FL_Q6(b).html`** — CSS3 `@keyframes` Blinking Warning Banner
- **`FL_Q7(a).html`** — PCU University Landing Page with Full-Cover Hero (`bg.jpg`)
- **`FL_Q7(b).html`** — Article Submission Portal Form

---

## 🚀 Project Structure

```text
WebVision/
├── index.html                  # Master Interactive Studio Entry Point
├── vercel.json                 # Vercel Static Deployment Configuration
├── README.md                   # Documentation
├── css/
│   └── style.css               # Obsidian Developer Studio Theme & Responsive Frames
├── js/
│   └── main.js                 # Module Registry, Viewport Controller & Code Inspector
└── modules/
    ├── universe-blog/          # 5-Page Astrophysics Website & Space Photography
    ├── personal-website-v1/    # 6-Page Academic & Engineering Portfolio
    ├── awpl-directory/         # AJAX XMLHttpRequest + User.json Fetch Engine
    ├── awpl-forms-and-cv/      # Regex Form Validator, Executive Resume & Bootstrap CV
    ├── core-html-showcase/     # 30-Card CSS Grid Food Gallery, Biodata & Typography Lab
    └── flexbox-layout-lab/     # FL_Q1 through FL_Q7(b) Bootstrap & CSS3 Layout Series
```

---

## 💻 Running Locally & Deploying to Vercel

### Local Development
Open `index.html` directly in any modern browser, or serve over local HTTP for full `fetch()` source inspection:
```bash
npx serve .
```

### Deploy on Vercel
This repository includes a zero-config `vercel.json` and can be deployed directly via the Vercel CLI or GitHub integration:
```bash
vercel --prod
```

---

**Author:** Saksham Sharma — B.Tech CSE, Pimpri Chinchwad University (PCU), Pune
