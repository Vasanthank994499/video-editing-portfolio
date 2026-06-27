# Vasanthan K - Video Editing & Motion Graphics Portfolio

Welcome to my professional video editing and motion graphics portfolio repository! This is a single-page, responsive, and cinematically styled website designed to showcase my creative cuts, pace studies, and tool competencies. 

👉 **Live Demo Localhost**: `http://localhost:8080`
👉 **Direct Contact**: [vasanthankasvk@gmail.com](mailto:vasanthankasvk@gmail.com)

---

## 📽️ Portfolio Showcase Projects

This repository contains 4 self-work video files edited using **Adobe Premiere Pro** and **Adobe After Effects**:

1. **Kinetic Typography Promo (`assets/VASANTHANK_AE3.mp4`)**
   - *Tools*: Adobe After Effects
   - *Features*: Smooth vector character shapes, slide transitions, keyframe positioning, and synchronized text sync ("Learn, Create, Grow").
2. **Brand Monk Academy Promo (`assets/PR_OUT.mp4`)**
   - *Tools*: Adobe Premiere Pro
   - *Features*: Circular webcam picture-in-picture masks, sliding image cascades, currency particle VFX transitions, and bold captions designed for high social media CTR.
3. **FSSAI Food License Cut (`assets/VASANTHANK_PR-.mp4`)**
   - *Tools*: Adobe Premiere Pro
   - *Features*: B-roll overlays, dialogue assembly, split-screen transitions, and dramatic color grading swaps (Rec.709 to Black & White).
4. **MehaTone Ayurvedic Ad (`assets/FinalOut3.mp4`)**
   - *Tools*: Adobe Premiere Pro
   - *Features*: Structured medical review interviews, health range gauges, manufacturing floor overlays, lifestyle alert overlays, and digital purchase details.

---

## 🛠️ Tech Features & UI Design

- **Dedicated Video Player Page (`player.html`)**: Clicking any card redirects the user to a custom-designed player page. Videos load inside a large cinema-sized HTML5 player with native timelines, fullscreen options, volume controls, and metadata tables listing roles and tools.
- **Muted Hover Previews**: Hovering over any card on the home page plays a silent, looping preview of the project video, indicating interactivity without slowing down initial page load speeds.
- **Cinematic Dark Theme**: Custom dark mode variables (`style.css`) utilizing obsidian and slate palettes with radial gradient light leaks, glowing borders, and glassmorphic blurs matching professional edit suites (DaVinci/Premiere).
- **Direct Mail Hooks**: Direct integration to mail client links pointing to `vasanthankasvk@gmail.com`.
- **Fully Responsive**: Adapts seamlessly to standard desktops, laptops, tablets, and mobile screen formats.

---

## 📁 Repository Structure

```bash
video-editing-portfolio/
├── index.html          # Portfolio home page & grid
├── player.html         # Dedicated cinema video player page
├── style.css           # Styling rules, variables & animations
├── app.js              # Header scroll triggers & hover previews
├── assets/             # Media and profile assets
│   ├── avatar.png              # Profile photo
│   ├── grading-cyberpunk.png   # Cyberpunk rec.709 reference
│   ├── grading-landscape.png   # Landscape rec.709 reference
│   ├── VASANTHANK_AE3.mp4      # After Effects kinetic typography video
│   ├── PR_OUT.mp4              # Brand Monk Academy promo video
│   ├── VASANTHANK_PR-.mp4      # FSSAI Food License info video
│   └── FinalOut3.mp4           # MehaTone doctor review ad video
└── README.md           # Project documentation (this file)
```

---

## 🚀 How to Run Locally

You can launch and view the portfolio using a simple local web server:

1. Clone this repository:
   ```bash
   git clone https://github.com/Vasanthank994499/video-editing-portfolio.git
   cd video-editing-portfolio
   ```
2. Fetch Git LFS files (if needed):
   ```bash
   git lfs pull
   ```
3. Start a local server:
   ```bash
   npx http-server -p 8080
   ```
4. Open your web browser and navigate to:
   ```url
   http://localhost:8080
   ```
