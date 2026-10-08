/**
 * Interactive Script for Pradeep Kagithalagudem Portfolio
 * Features:
 * - Theme Switcher (Dark/Light with localStorage persistence)
 * - Interactive Terminal Simulator (with rich CLI commands & chip shortcuts)
 * - Project Filter System
 * - Project Architecture Deep Dive Modal
 * - Copy to Clipboard Toast
 * - Live Hyderabad, India (IST) Clock
 * - Scrollspy & Smooth Navigation
 */

// --- Project Data for Modal Deep Dive ---
const projectDetails = {
  jobresumematcher: {
    title: "AI Job Resume Matcher & Pipeline",
    category: "AI & LLMs / Automation",
    badge: "100% Local & Private AI",
    github: "https://github.com/pkagitha-coder/JobResumeMatcher",
    overview: "An automated, privacy-first job hunting pipeline that scrapes live opportunities from LinkedIn and Glassdoor, evaluates candidate-resume fit using local Ollama LLMs, ranks opportunities with ATS match scores, and provides an interactive browser dashboard with click-to-apply tracking.",
    architecture: [
      "Dynamic Smart Lookback: Computes hours elapsed since last run to eliminate scraping redundancy.",
      "Local LLM Inference: Runs Qwen 2.5 Coder 14B (or Llama 3.2 / Gemma 2) via Ollama with zero cloud API costs or data leakage.",
      "Intelligent Scoring: Structured JSON evaluation generating match scores (0-100%), matched strengths (✓), and identified gaps (⚠).",
      "Interactive Dashboard: Browser UI with persistent localStorage state, click-to-apply tracking, focus filters, and CSV export."
    ],
    techStack: ["Python 3.13", "Ollama", "Qwen 2.5 Coder 14B", "python-jobspy", "Pandas", "PyPDF", "HTML5/JS"],
    metrics: "100% Data Privacy • 0 API Costs • Sub-second Local Dashboard • Automated Multi-Source Aggregation"
  },
  swpbucket: {
    title: "SWP Multi-Bucket Retirement Strategy Engine",
    category: "Java & FinTech / Spring Boot",
    badge: "Enterprise Financial Modeling",
    github: "https://github.com/pkagitha-coder/swp-bucket-strategy",
    overview: "A high-precision financial modeling engine engineered in Java and Spring Boot that calculates Systematic Withdrawal Plans (SWP) across a multi-bucket investment architecture. Accurately simulates cyclic portfolio replenishment, annual inflation escalations, and compounding yields over 30+ year horizons.",
    architecture: [
      "Tiered 3-Bucket Model: Segregates corpus into Main SWP (immediate monthly withdrawals), Backup SWP (short-term replenishment), and Growth Bucket (long-term equity appreciation).",
      "Configurable Replenishment Cycles: Automatically models 3-year refresh cycles and transfers between buckets.",
      "Inflation Adjustment Engine: Annual step-up percentages on withdrawal amounts compounded monthly.",
      "Auditable Ledger: Generates comprehensive yearly breakdowns and balance tracking reports."
    ],
    techStack: ["Java 17", "Spring Boot", "Maven", "JUnit 5", "Financial Algorithms"],
    metrics: "3-Bucket Tiered Planning • Automated 3-Yr Replenishment • Dynamic Inflation Escalations"
  },
  springaiplatform: {
    title: "Spring AI & Enterprise RAG Platform",
    category: "AI & Distributed Systems",
    badge: "Enterprise Agentic AI",
    github: "https://github.com/pkagitha-coder",
    overview: "A comprehensive production-grade blueprint and implementation for enterprise AI applications using Spring AI, Ollama, pgvector, and Qdrant. Demonstrates Agentic workflows, Model Context Protocol (MCP), streaming responses, and document intelligence.",
    architecture: [
      "Vector Search & Hybrid RAG: Integrates Qdrant and PostgreSQL pgvector for high-dimensional semantic search and cosine similarity retrieval.",
      "Model Context Protocol (MCP): Connects local and enterprise tools to LLMs with structured execution sandboxing.",
      "Streaming & Structured Output: Low-latency SSE streaming for user chats, plus deterministic Pydantic/DTO schema validation.",
      "HR & Policy Intelligence Service: Automated ingestion, chunking, and contextual query response with conversational memory."
    ],
    techStack: ["Java 21", "Spring Boot 3.x", "Spring AI", "pgvector", "Qdrant", "Ollama", "Docker"],
    metrics: "Enterprise Vector Retrieval • MCP Tooling Integration • Zero-Latency SSE Streaming"
  },
  appleframework: {
    title: "Enterprise Planning Framework (Apple)",
    category: "Distributed Systems & Architecture",
    badge: "Enterprise Impact",
    github: null,
    overview: "Architected a reusable enterprise framework for critical Planning Applications powering high-volume business operations at Apple. Engineered performance and scale enhancements across high-volume Java microservices.",
    architecture: [
      "Reusable Architectural Framework: Standardized planning workflows and abstractions, slashing engineering cycle time by 40% across adoption teams.",
      "GEO-Partitioned Workflows: Partitioned POR workflows by geographic regions to eliminate distributed bottlenecks.",
      "Concurrency & Concurrency Tuning: Optimized thread pools, asynchronous processing, and memory footprint to unblock strict SLAs for APEX applications.",
      "Cross-Functional Leadership: Led multiple distributed engineering teams of 3-5 engineers across mission-critical enterprise deliverables."
    ],
    techStack: ["Java Microservices", "Spring Boot", "Distributed Architecture", "GEO Partitioning", "APEX"],
    metrics: "40% Development Time Reduction • Unblocked High-Volume APEX SLAs • Zero-Downtime Releases"
  },
  applesemanticsearch: {
    title: "AI Semantic Search for QA Test Management (Apple)",
    category: "AI & LLMs / Enterprise Tooling",
    badge: "Enterprise AI Innovation",
    github: null,
    overview: "Built an AI-powered semantic search and deduplication service for enterprise QA test case management at Apple. Employs vector embeddings and cosine similarity to detect redundant test cases and prevent duplicate engineering effort.",
    architecture: [
      "Vector Database Integration: Utilized Qdrant vector database for sub-millisecond similarity indexing across thousands of complex enterprise test suites.",
      "Cosine Similarity & Embeddings: Converted technical test specifications and criteria into vector embeddings to cluster similar behaviors.",
      "Redundancy Elimination: Proactively flags duplicate test scripts during authoring, saving hundreds of engineering hours in test runs and maintenance."
    ],
    techStack: ["Python", "Java", "Qdrant Vector DB", "Embedding Models", "Cosine Similarity"],
    metrics: "Sub-millisecond Vector Queries • 1000s of Test Suites Deduplicated • High Engineering ROI"
  },
  antlrdsl: {
    title: "ANTLR-Based DSL Task-Chain Compiler (TDM CLI)",
    category: "Compilers & Tooling",
    badge: "Tooling Innovation",
    github: null,
    overview: "Engineered a custom domain-specific language (DSL) compiler and CLI tool using ANTLR. Translates SQL-like English statements into complex task-chain metadata updates, automating a previously error-prone manual workflow.",
    architecture: [
      "Lexer & Parser Grammar: Designed a robust ANTLR4 grammar to parse natural, declarative SQL-like domain expressions.",
      "AST Traversal & Transformation: Walks the abstract syntax tree to validate constraints and transform instructions into backend orchestration commands.",
      "Automated Workflow: Replaced weeks of manual spreadsheet configuration and hand-crafted JSON updates with instantaneous CLI execution."
    ],
    techStack: ["Java", "ANTLR 4", "CLI Architecture", "AST Compilers", "Automation Engine"],
    metrics: "Reduced Weeks-Long Process to Minutes • 100% Elimination of Manual Configuration Errors"
  },
  progresshdp: {
    title: "Hybrid Data Pipeline (HDP) & S4HANA JDBC Driver (Progress)",
    category: "Distributed Systems / Drivers",
    badge: "Commercial Enterprise Release",
    github: null,
    overview: "Owned end-to-end development of Progress Software's flagship Hybrid Data Pipeline (HDP) and S4HANA JDBC Driver. Delivered 5 major commercial enterprise releases over 3 years.",
    architecture: [
      "Multi-Tier Security Architecture: Designed and implemented a 3-tier IP Whitelisting engine (system, tenant, user) enforcing strict enterprise compliance with less than 5ms latency overhead across all API calls.",
      "External DB & Legacy Support: Architected external database and OpenEdge support for Rollbase, facilitating seamless application creation on legacy systems.",
      "High-Performance JDBC/OData: Built robust data drivers enabling secure, on-premise-to-cloud relational and non-relational database connectivity."
    ],
    techStack: ["Java", "JDBC Internal Drivers", "OData", "Cloud Security", "Multi-Tenancy", "SAP S4HANA"],
    metrics: "5 Major Commercial Releases • <5ms IP Whitelist Overhead • Enterprise Multi-Tenant Scale"
  },
  bankprocessor: {
    title: "Bank Statement Table Extractor & Normalizer",
    category: "FinTech & Data Processing",
    badge: "Precision Data Extraction",
    github: "https://github.com/pkagitha-coder",
    overview: "A resilient financial document extraction and transformation pipeline built in Java and Spring Boot. Extracts multi-column debit transactions from raw PDF and ASCII tables, normalizes heterogeneous transaction data, and exports standardized CSV outputs.",
    architecture: [
      "Dual Extractor Strategy: Combines Tabula PDF extraction with an ASCII table parser to handle inconsistent bank statement layouts.",
      "Transaction Reconciliation: Cleanses payee metadata, normalizes date and currency representations, and computes running balances.",
      "Fault-Tolerant Processing: Validates row checksums to guarantee zero missing transactions during financial parsing."
    ],
    techStack: ["Java 17", "Spring Boot", "Tabula PDF", "CSV Processing", "JUnit"],
    metrics: "Zero Dropped Transactions • Multi-Bank Layout Support • Automated Reconciliation"
  },
  springcloudmicro: {
    title: "Resilient Microservices & Cloud Blueprint",
    category: "Distributed Systems & Cloud",
    badge: "Cloud-Native Architecture",
    github: "https://github.com/pkagitha-coder/SpringCloud",
    overview: "A battle-tested distributed microservices architecture showcasing Spring Cloud service discovery, centralized configuration, API gateways, circuit breaking, and distributed tracing.",
    architecture: [
      "Service Mesh & Discovery: Integrated Eureka and Spring Cloud Gateway with dynamic load balancing.",
      "Resilience & Fault Tolerance: Implemented circuit breakers, retry policies, and fallback endpoints.",
      "Distributed Observability: End-to-end correlation IDs for cross-service request tracking."
    ],
    techStack: ["Java", "Spring Cloud", "Eureka", "Resilience4j", "Docker", "RESTful APIs"],
    metrics: "Sub-Second Failover • Zero Single Point of Failure • Standardized Gateway Routing"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTerminal();
  initProjectFilters();
  initModal();
  initClipboard();
  initClock();
  initScrollspy();
  initMobileMenu();
});

// --- Theme Switcher ---
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check stored preference or system preference
  const savedTheme = localStorage.getItem('pk_portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'dark'); // default dark

  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeIcon(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('pk_portfolio_theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      // Show sun icon to switch to light
      themeIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      `;
    } else {
      // Show moon icon to switch to dark
      themeIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      `;
    }
  }
}

// --- Interactive Terminal Simulator ---
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalContainer = document.getElementById('terminal-content');
  const chips = document.querySelectorAll('.terminal-chip');

  if (!terminalInput || !terminalOutput) return;

  const commandHistory = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
<div class="text-indigo-400 font-semibold mb-1">AVAILABLE COMMANDS:</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
  <div><span class="text-emerald-400 font-bold">whoami</span>       - Architectural summary</div>
  <div><span class="text-emerald-400 font-bold">skills</span>       - Core tech stack & expertise</div>
  <div><span class="text-emerald-400 font-bold">projects</span>     - Flagship engineering projects</div>
  <div><span class="text-emerald-400 font-bold">experience</span>   - Career history (Apple, Progress, etc.)</div>
  <div><span class="text-emerald-400 font-bold">contact</span>      - Email, phone, LinkedIn & GitHub</div>
  <div><span class="text-emerald-400 font-bold">resume</span>       - Download PDF resume</div>
  <div><span class="text-emerald-400 font-bold">achievements</span> - Key enterprise impact numbers</div>
  <div><span class="text-emerald-400 font-bold">clear</span>        - Clear terminal screen</div>
  <div><span class="text-emerald-400 font-bold">sudo hire</span>     - Quick action protocol</div>
</div>
`,
    whoami: () => `
<div class="text-slate-200">
  <span class="text-emerald-400 font-bold">Pradeep Kagithalagudem</span> | Enterprise Software Architect & Technology Leader<br/>
  Based in <span class="text-cyan-400">Hyderabad, India</span>. 15+ years architecting high-performance distributed systems, 
  high-concurrency Java microservices, and autonomous LLM/Agentic AI systems.
</div>
`,
    skills: () => `
<div class="space-y-1 text-xs text-slate-300">
  <div><span class="text-indigo-400 font-bold">Backend & Languages:</span> Java 17/21, Spring Boot, Spring AI, Python, FastAPI, LangChain, Node.js, SQL</div>
  <div><span class="text-emerald-400 font-bold">AI & LLMs:</span> Local LLMs (Ollama, Qwen 2.5 Coder, Llama 3), Qdrant Vector DB, pgvector, MCP Protocol, RAG</div>
  <div><span class="text-cyan-400 font-bold">Architecture:</span> Distributed Systems, Microservices, Multi-Tenancy, GEO-Partitioning, Low-Latency SLAs (&lt;5ms)</div>
  <div><span class="text-amber-400 font-bold">Data & Cloud:</span> PostgreSQL, MySQL, SingleStore, MongoDB, Redis, Docker, Kubernetes, AWS, CI/CD</div>
</div>
`,
    projects: () => `
<div class="space-y-1.5 text-xs text-slate-300">
  <div>🚀 <span class="text-indigo-400 font-bold">JobResumeMatcher:</span> Privacy-first local LLM (Qwen 2.5 Coder) resume matcher & scraping pipeline.</div>
  <div>💰 <span class="text-emerald-400 font-bold">SWP Bucket Strategy:</span> Tiered multi-bucket financial retirement model in Spring Boot.</div>
  <div>🤖 <span class="text-cyan-400 font-bold">Spring AI Platform:</span> Enterprise RAG with pgvector, Qdrant, MCP & streaming agents.</div>
  <div>🍎 <span class="text-indigo-300 font-bold">Apple Planning Framework:</span> Reusable framework that reduced dev time by 40%.</div>
  <div>🔍 <span class="text-amber-400 font-bold">Apple Semantic Search:</span> Qdrant vector-powered duplicate QA test case deduplication.</div>
  <div>⚡ <span class="text-pink-400 font-bold">ANTLR DSL (TDM CLI):</span> Custom SQL-like language compiler turning weeks into minutes.</div>
</div>
`,
    experience: () => `
<div class="space-y-1 text-xs text-slate-300">
  <div>💼 <span class="text-indigo-400 font-bold">Apple</span> (2020 – 2026) | <span class="text-emerald-400">Senior Software Engineer</span></div>
  <div class="pl-4 text-slate-400">→ Planning Application Framework (-40% dev time), APEX SLA tuning, Qdrant semantic QA search.</div>
  <div>💼 <span class="text-indigo-400 font-bold">Progress Software</span> (2013 – 2020) | <span class="text-emerald-400">Principal Engineer II</span></div>
  <div class="pl-4 text-slate-400">→ Owned HDP & S4HANA JDBC (5 major releases), 3-tier IP Whitelist (&lt;5ms latency overhead).</div>
  <div>💼 <span class="text-indigo-400 font-bold">Cognizant</span> (2010 – 2013) | <span class="text-emerald-400">Senior Associate</span></div>
  <div class="pl-4 text-slate-400">→ NCCM UI & custom RBAC security framework from scratch.</div>
  <div>💼 <span class="text-indigo-400 font-bold">Amber Road</span> (2009 – 2010) | <span class="text-emerald-400">Software Engineer</span></div>
</div>
`,
    achievements: () => `
<div class="space-y-1 text-xs text-slate-300">
  <div>🏆 <span class="text-emerald-400 font-bold">40% Dev Time Reduction:</span> Architected core framework adopted across Apple business teams.</div>
  <div>⚡ <span class="text-cyan-400 font-bold">Sub-5ms Latency SLA:</span> Engineered 3-tier enterprise IP whitelist security at Progress Software.</div>
  <div>📦 <span class="text-indigo-400 font-bold">5 Major Enterprise Releases:</span> Owned full lifecycle of Hybrid Data Pipeline & JDBC Drivers.</div>
  <div>⚙️ <span class="text-amber-400 font-bold">ANTLR DSL Compiler:</span> Reduced weeks-long manual metadata updates to automated minutes.</div>
</div>
`,
    contact: () => `
<div class="space-y-1 text-xs text-slate-300">
  <div>✉️ Email: <a href="mailto:pradeepk10@gmail.com" class="text-indigo-400 underline">pradeepk10@gmail.com</a></div>
  <div>📞 Phone: <span class="text-emerald-400">+91-9701838793</span></div>
  <div>📍 Location: <span class="text-cyan-400">Hyderabad, India</span></div>
  <div>🔗 LinkedIn: <a href="https://linkedin.com/in/pradeep-kagithalagudem" target="_blank" class="text-indigo-400 underline">linkedin.com/in/pradeep-kagithalagudem</a></div>
  <div>🐙 GitHub: <a href="https://github.com/pkagitha-coder" target="_blank" class="text-indigo-400 underline">github.com/pkagitha-coder</a></div>
</div>
`,
    resume: () => {
      window.open('pradeep_kagithalagudem_resume.pdf', '_blank');
      return `<div class="text-emerald-400">Initiating resume download... (pradeep_kagithalagudem_resume.pdf)</div>`;
    },
    'sudo hire': () => `
<div class="text-emerald-400 font-bold">
  [ACCESS GRANTED] Initiating hiring protocol... 🚀<br/>
  Let's connect immediately! Reach out at <a href="mailto:pradeepk10@gmail.com" class="underline text-indigo-300">pradeepk10@gmail.com</a> or call <span class="text-cyan-300">+91-9701838793</span>.
</div>
`,
    sudo: () => `<div class="text-amber-400">Usage: sudo hire</div>`,
    date: () => `<div class="text-slate-300">${new Date().toLocaleString()} (Local Time)</div>`,
    clear: () => {
      terminalOutput.innerHTML = '';
      return null;
    }
  };

  function executeCommand(rawCmd) {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;

    // Echo input
    const echoRow = document.createElement('div');
    echoRow.className = 'flex items-center space-x-2 text-xs text-slate-400 mt-2 mb-1';
    echoRow.innerHTML = `<span class="text-emerald-400 font-bold">pradeep@macbook:~$</span> <span class="text-slate-100 font-semibold">${escapeHtml(trimmed)}</span>`;
    terminalOutput.appendChild(echoRow);

    // Process command
    const lowerCmd = trimmed.toLowerCase();
    let responseHtml = null;

    if (commands[lowerCmd]) {
      responseHtml = commands[lowerCmd]();
    } else if (lowerCmd.startsWith('sudo hire') || lowerCmd === 'hire') {
      responseHtml = commands['sudo hire']();
    } else if (lowerCmd === 'pradeep --skills' || lowerCmd === '--skills') {
      responseHtml = commands.skills();
    } else if (lowerCmd === 'pradeep --projects' || lowerCmd === '--projects') {
      responseHtml = commands.projects();
    } else if (lowerCmd === 'pradeep --experience' || lowerCmd === '--experience') {
      responseHtml = commands.experience();
    } else if (lowerCmd === 'pradeep --contact' || lowerCmd === '--contact') {
      responseHtml = commands.contact();
    } else if (lowerCmd === 'ls' || lowerCmd === 'dir') {
      responseHtml = `<div class="text-xs text-cyan-300">projects/  experience.md  skills.json  resume.pdf  contact.sh</div>`;
    } else if (lowerCmd === 'cat resume.pdf' || lowerCmd === 'cat resume.txt') {
      responseHtml = commands.resume();
    } else {
      responseHtml = `<div class="text-red-400 text-xs">zsh: command not found: ${escapeHtml(trimmed)}. Type <span class="text-emerald-400 font-semibold">help</span> to view available commands.</div>`;
    }

    if (responseHtml !== null) {
      const respRow = document.createElement('div');
      respRow.className = 'text-xs text-slate-300 leading-relaxed mb-3';
      respRow.innerHTML = responseHtml;
      terminalOutput.appendChild(respRow);
    }

    // Scroll to bottom
    if (terminalContainer) {
      terminalContainer.scrollTop = terminalContainer.scrollHeight;
    }
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
      terminalInput.value = '';
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
      e.preventDefault();
    }
  });

  // Chip buttons
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });
}

// --- Project Filter System ---
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --- Project Architecture Deep Dive Modal ---
function initModal() {
  const modalOverlay = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalOverview = document.getElementById('modal-overview');
  const modalArchitecture = document.getElementById('modal-architecture');
  const modalTechStack = document.getElementById('modal-techstack');
  const modalMetrics = document.getElementById('modal-metrics');
  const modalGithubLink = document.getElementById('modal-github-link');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  // Open modal on deep dive click
  document.querySelectorAll('.open-deep-dive').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      const data = projectDetails[projKey];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalBadge.textContent = data.badge;
      modalOverview.textContent = data.overview;
      modalMetrics.textContent = data.metrics;

      // Architecture points
      modalArchitecture.innerHTML = '';
      data.architecture.forEach(point => {
        const li = document.createElement('li');
        li.className = 'flex items-start space-x-2 text-slate-300 text-sm leading-relaxed';
        li.innerHTML = `<span class="text-emerald-400 font-bold">✓</span><span>${point}</span>`;
        modalArchitecture.appendChild(li);
      });

      // Tech Stack
      modalTechStack.innerHTML = '';
      data.techStack.forEach(t => {
        const badge = document.createElement('span');
        badge.className = 'px-2.5 py-1 text-xs rounded-md bg-slate-800 text-indigo-300 border border-slate-700 font-mono';
        badge.textContent = t;
        modalTechStack.appendChild(badge);
      });

      // GitHub link
      if (data.github) {
        modalGithubLink.href = data.github;
        modalGithubLink.classList.remove('hidden');
      } else {
        modalGithubLink.classList.add('hidden');
      }

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

// --- Copy to Clipboard with Toast ---
function initClipboard() {
  const copyButtons = document.querySelectorAll('.copy-trigger');
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      }).catch(() => {
        showToast(`Copied: ${textToCopy}`);
      });
    });
  });

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

// --- Live Clock in Hyderabad (IST) ---
function initClock() {
  const clockElem = document.getElementById('ist-clock');
  if (!clockElem) return;

  function update() {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const istTime = new Intl.DateTimeFormat([], options).format(new Date());
    clockElem.textContent = `${istTime} IST (Hyderabad, India)`;
  }

  update();
  setInterval(update, 1000);
}

// --- Scrollspy & Active Navigation ---
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-indigo-400', 'font-semibold');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('text-indigo-400', 'font-semibold');
      }
    });
  });
}

// --- Mobile Navigation Menu ---
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileToggle || !mobileMenu) return;

  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// --- Helper Functions ---
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}
