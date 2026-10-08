# 🚀 Pradeep Kagithalagudem — Portfolio Website

A fast, responsive, executive-tier developer and architect portfolio showcasing 15+ years of experience across **Distributed Systems**, **Java Microservices**, **Enterprise Architecture**, and **Autonomous AI Platforms** (Apple, Progress Software, Spring AI, Vector DBs, Local LLMs).

---

## 🌟 Key Features

- **⚡ Modern Responsive UI**: Crafted with a modern dark-mode aesthetic (with seamless Light/Dark toggle), glassmorphism panels, and smooth micro-animations.
- **🖥️ Interactive Terminal Console (`pradeep-cli`)**: An interactive terminal emulator supporting custom commands (`skills`, `projects`, `experience`, `achievements`, `contact`, `resume`, `sudo hire`, `clear`) and clickable chip shortcuts.
- **📁 Flagship Projects Showcase**:
  - **AI Job Resume Matcher & Pipeline** (`JobResumeMatcher`): Privacy-first local LLM (Ollama / Qwen 2.5 Coder 14B) scoring pipeline with interactive dashboard and click-to-apply tracking.
  - **SWP Multi-Bucket Retirement Strategy** (`swp-bucket-strategy`): Tiered financial model in Spring Boot with cyclic replenishment and dynamic inflation adjustments.
  - **Spring AI & Enterprise RAG Platform**: Production generative AI blueprint with pgvector, Qdrant, Model Context Protocol (MCP), and streaming APIs.
  - **Enterprise Planning Framework (Apple)**: Framework reducing enterprise feature development cycles by 40%.
  - **AI Semantic QA Search (Apple)**: Qdrant vector-powered test case deduplication.
  - **ANTLR DSL Task-Chain Compiler**: Custom domain-specific language automation turning weeks of manual metadata updates into minutes.
  - **Hybrid Data Pipeline & S4HANA JDBC Driver (Progress Software)**: 5 commercial enterprise releases with a 3-tier IP whitelist delivering <5ms latency overhead.
- **🔍 Architecture Deep-Dive Modals**: Click "Deep Dive Architecture" on any project to view problems, solutions, architecture blueprints, tech stacks, and key metrics.
- **📄 Downloadable Resume**: Direct 1-click download of the latest PDF resume (`pradeep_kagithalagudem_resume.pdf`).
- **📋 One-Click Copy**: Instant clipboard copying for email and phone with toast feedback.
- **🕒 Live Hyderabad IST Clock**: Displays the current local time in Hyderabad, India (UTC+5:30).

---

## 🛠️ Quick Start (Run Locally)

You can preview the site immediately with any web server or by opening `index.html` directly in your browser:

### Option 1: Python HTTP Server (Zero Install)
```bash
cd portfolio
python3 -m http.server 3000
# Open http://localhost:3000 in your browser
```

### Option 2: Node.js / NPX Serve
```bash
cd portfolio
npx serve . -l 3000
# or:
npm run dev
```

### Option 3: Double-Click
Simply open `portfolio/index.html` in Safari, Chrome, Firefox, or Edge.

---

## 🌐 Deploy to GitHub Pages

You can host this portfolio free on GitHub Pages:

### Method A: Deploy as your main GitHub Pages site (`pkagitha-coder.github.io`)
1. Create a repository on GitHub named `pkagitha-coder.github.io`.
2. Push the files in this directory to that repository:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin git@github.com:pkagitha-coder/pkagitha-coder.github.io.git
   git push -u origin main
   ```
3. Your site will immediately be live at: **`https://pkagitha-coder.github.io/`**

### Method B: Deploy as a project repository (`pkagitha-coder/portfolio`)
1. Create a repository named `portfolio` on GitHub.
2. Push this directory:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin git@github.com:pkagitha-coder/portfolio.git
   git push -u origin main
   ```
3. Go to **Settings > Pages** on GitHub and set Branch to `main` and folder to `/ (root)`.
4. Your site will be live at: **`https://pkagitha-coder.github.io/portfolio/`**

---

## 📂 File Structure

```
portfolio/
├── index.html                           # Main semantic HTML5 single-page application
├── style.css                            # Glassmorphism, glow accents, dark/light theme tokens
├── script.js                            # Interactive terminal, project filters, modal & clock
├── package.json                         # Preview and serve scripts
├── pradeep_kagithalagudem_resume.pdf    # Direct downloadable PDF resume
├── assets/
│   └── avatar.jpg                       # High-resolution avatar asset
└── README.md                            # Documentation and deployment guide
```
