/**
 * SkillPulse AI - Main Application Logic & UI Controller (v2.1)
 * Dedicated "Benchmark Referência (50)" & "Minhas Vagas Adicionadas" Tabs,
 * Slidebar-free navigation, Section-aware NLP, Mandatory vs Differential tags & Bilingual support.
 */

// Helper utilities: HTML sanitization & diacritic-agnostic text normalization
function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeText(str) {
  if (!str) return "";
  return String(str)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Initial Default User Profile (Calibrated for Matheus's Career Transition Target)
const DEFAULT_USER_SKILLS = {
  sql: "learning",
  python: "learning",
  javascript: "mastered",
  react_next: "mastered",
  html_css: "mastered",
  power_bi: "learning",
  dax: "learning",
  star_schema: "learning",
  pandas: "learning",
  excel_adv: "mastered",
  dbt: "gap",
  storytelling: "mastered",
  fastapi: "learning",
  rest_apis: "learning",
  flask_django: "gap",
  java_poo: "learning",
  pydantic: "learning",
  webhooks_integrations: "learning",
  tdd_clean_code: "learning",
  pytest: "gap",
  postgresql: "learning",
  sql_server_mysql: "learning",
  nosql: "gap",
  cloud_dw: "gap",
  git: "mastered",
  docker: "gap",
  aws: "gap",
  azure: "gap",
  ci_cd: "gap",
  n8n: "learning",
  llm_apis: "learning",
  structured_outputs: "learning",
  prompt_eng: "mastered",
  rag_langchain: "gap",
  english_tech: "mastered",
  english_fluent: "mastered",
  cs_degree: "mastered",
  agile_scrum: "mastered",
  domain_health_logistics: "mastered"
};

// UI Translations Dictionary
const TRANSLATIONS = {
  pt: {
    brandSubtitle: "Análise de Requisitos de Vagas & Gap de Habilidades",
    badgePulse: "Benchmark 2026 Ativo",
    btnPdf: "Gerar PDF Completo",
    btnReset: "Restaurar 50 Vagas",
    btnNew: "Nova Vaga",
    lblStatPostings: "Amostra de Vagas",
    subStatPostings: "vagas",
    lblStatSkills: "Habilidades Rastreadas",
    subStatSkills: "competências",
    lblStatMatch: "Aderência ao Mercado",
    subStatMatch: "compatível",
    lblStatTopSkill: "Habilidade Mais Exigida",
    sourceAll: "Todas as Vagas",
    sourceBenchmark: "Benchmark Referência",
    sourceUser: "Minhas Vagas Adicionadas",
    tabOverview: "Visão Geral & Métricas",
    tabBenchmark: "Benchmark Referência",
    tabMyJobs: "Minhas Vagas Adicionadas",
    tabMatrix: "Minha Matriz de Skills",
    tabGaps: "Análise de Gaps & Alavancas",
    tabPlan: "Plano Tático 30-60-90 Dias",
    tabAdd: "Inserir Vagas",
    chartTitle: "Top Habilidades Mais Demandadas",
    chartSubtitle: "Frequência percentual de ocorrência nas vagas analisadas",
    cooccurTitle: "Sinergias & Pares Tecnológicos",
    cooccurSubtitle: "Ferramentas que o mercado mais exige juntas",
    modalExtractedTitle: "🧠 Habilidades Extraídas pelo SkillPulse:",
    mandatoryLabel: "📌 Obrigatório",
    differentialLabel: "⭐ Diferencial",
    noSnippet: "Mencionado nos requisitos da vaga.",
    domino: "Domino",
    estudando: "Estudando",
    gap: "Gap",
    toastRestored: "Benchmark de 50 vagas restaurado com sucesso!",
    toastAdded: "Vaga adicionada com sucesso!",
    toastFillRequired: "Preencha todos os campos obrigatórios!",
    toastPdfGenerated: "Abrindo pré-visualização para salvar o relatório em PDF...",
    emptyMyJobsTitle: "Nenhuma vaga personalizada adicionada ainda",
    emptyMyJobsDesc: "Cole aqui vagas reais do LinkedIn ou Gupy para compará-las ao benchmark de referência.",
    btnAddFirstJob: "Inserir Nova Vaga",
    btnExportUserJobs: "Exportar JSON",
    btnImportUserJobs: "Importar JSON",
    toastExportSuccess: "Backup das suas vagas exportado com sucesso!",
    toastImportSuccess: "Vagas personalizadas importadas com sucesso!",
    toastImportEmpty: "Nenhuma vaga válida encontrada no arquivo!",
    toastImportError: "Arquivo JSON inválido para importação de vagas!",
    toastDeleted: "Vaga excluída com sucesso!",
    cannotDeleteBenchmark: "Vagas do benchmark original não podem ser excluídas!",
    btnDeleteJob: "Excluir Vaga",
    confirmDeletePrompt: 'Deseja realmente excluir a vaga "{title}" da empresa "{company}"?\n\nEsta vaga personalizada será removida da sua análise e todas as métricas serão recalculadas.',
    btnOpenAddSkill: "Adicionar Habilidade",
    lblMatrixOrigin: "Origem da Habilidade:",
    originAll: "Todas",
    originOfficial: "Padrão Oficial",
    originCustom: "Personalizadas",
    badgeOfficial: "Padrão Oficial",
    badgeCustom: "Personalizada",
    modalSkillHeaderTitle: "✨ Central de Habilidades Tech",
    modalSkillHeaderSub: "Adicione competências oficiais recomendadas por padrões globais ou crie suas próprias habilidades personalizadas",
    txtModalTabOfficial: "Fontes Oficiais da Indústria (Recomendadas)",
    txtModalTabCustom: "Criar Habilidade Personalizada",
    txtOfficialBannerTitle: "Padrões Oficiais Recomendados:",
    txtOfficialBannerDesc: "Competências líderes segundo relatórios de referência como Stack Overflow Annual Survey, IEEE Spectrum, CNCF, Apache Foundation, DORA e Gartner. Ative na sua matriz com 1 clique.",
    btnActivateSkill: "+ Ativar na Matriz",
    skillActiveInMatrix: "✅ Ativa na Matriz",
    toastOfficialSkillAdded: 'Habilidade oficial "{name}" ativada na sua matriz!',
    toastCustomSkillAdded: 'Habilidade personalizada "{name}" adicionada com sucesso!',
    toastSkillDeleted: 'Habilidade personalizada "{name}" excluída com sucesso!',
    confirmDeleteSkillPrompt: 'Deseja realmente excluir a habilidade personalizada "{name}" da sua matriz?\n\nEla será removida da sua análise e suas estatísticas serão recalculadas.',
    cannotDeleteOfficialSkill: "Habilidades oficiais do benchmark da indústria não podem ser excluídas!",
    txtBtnSubmitCustomSkill: "Salvar Habilidade Personalizada"
  },
  en: {
    brandSubtitle: "Job Requirements Intelligence & Skill Gap Radar",
    badgePulse: "2026 Benchmark Live",
    btnPdf: "Generate Full PDF",
    btnReset: "Restore 50 Postings",
    btnNew: "New Job",
    lblStatPostings: "Job Sample",
    subStatPostings: "postings",
    lblStatSkills: "Tracked Skills",
    subStatSkills: "competencies",
    lblStatMatch: "Market Match Score",
    subStatMatch: "compatible",
    lblStatTopSkill: "Top In-Demand Skill",
    sourceAll: "All Postings",
    sourceBenchmark: "Reference Benchmark",
    sourceUser: "My Added Jobs",
    tabOverview: "Overview & Metrics",
    tabBenchmark: "Reference Benchmark",
    tabMyJobs: "My Added Jobs",
    tabMatrix: "My Skills Matrix",
    tabGaps: "Gap Analysis & Levers",
    tabPlan: "Tactical 30-60-90 Plan",
    tabAdd: "Ingest Jobs",
    chartTitle: "Top In-Demand Skills",
    chartSubtitle: "Percentage frequency across analyzed job listings",
    cooccurTitle: "Tech Synergies & Co-occurrences",
    cooccurSubtitle: "Technologies most frequently required together",
    modalExtractedTitle: "🧠 Skills Extracted by SkillPulse AI:",
    mandatoryLabel: "📌 Mandatory",
    differentialLabel: "⭐ Nice-to-Have",
    noSnippet: "Identified in job requirements.",
    domino: "Mastered",
    estudando: "Learning",
    gap: "Gap",
    toastRestored: "50-Job benchmark restored successfully!",
    toastAdded: "Job listing added successfully!",
    toastFillRequired: "Please complete all mandatory fields!",
    toastPdfGenerated: "Opening print preview to save report as PDF...",
    emptyMyJobsTitle: "No custom jobs added yet",
    emptyMyJobsDesc: "Paste real postings from LinkedIn or job boards to compare against the reference benchmark.",
    btnAddFirstJob: "Add New Job",
    btnExportUserJobs: "Export JSON",
    btnImportUserJobs: "Import JSON",
    toastExportSuccess: "Custom jobs backup exported successfully!",
    toastImportSuccess: "Custom jobs imported successfully!",
    toastImportEmpty: "No valid jobs found in file!",
    toastImportError: "Invalid JSON file for jobs import!",
    toastDeleted: "Job listing deleted successfully!",
    cannotDeleteBenchmark: "Original benchmark postings cannot be deleted!",
    btnDeleteJob: "Delete Job",
    confirmDeletePrompt: 'Are you sure you want to delete the job "{title}" at "{company}"?\n\nThis posting will be removed from your analysis and all metrics will be recalculated.',
    btnOpenAddSkill: "Add Skill",
    lblMatrixOrigin: "Skill Origin:",
    originAll: "All",
    originOfficial: "Official Standard",
    originCustom: "Custom",
    badgeOfficial: "Official Benchmark",
    badgeCustom: "Custom Skill",
    modalSkillHeaderTitle: "✨ Tech Skills Hub",
    modalSkillHeaderSub: "Add in-demand skills from official global standards or create your own custom skills",
    txtModalTabOfficial: "Official Industry Sources (Recommended)",
    txtModalTabCustom: "Create Custom Skill",
    txtOfficialBannerTitle: "Recommended Official Standards:",
    txtOfficialBannerDesc: "Leading competencies from benchmark reports such as Stack Overflow Annual Survey, IEEE Spectrum, CNCF, Apache Foundation, DORA, and Gartner. Activate into your matrix with 1 click.",
    btnActivateSkill: "+ Add to Matrix",
    skillActiveInMatrix: "✅ Active in Matrix",
    toastOfficialSkillAdded: 'Official skill "{name}" activated in your matrix!',
    toastCustomSkillAdded: 'Custom skill "{name}" added successfully!',
    toastSkillDeleted: 'Custom skill "{name}" deleted successfully!',
    confirmDeleteSkillPrompt: 'Are you sure you want to delete the custom skill "{name}" from your matrix?\n\nIt will be removed from your analysis and metrics will be recalculated.',
    cannotDeleteOfficialSkill: "Official benchmark skills cannot be deleted!",
    txtBtnSubmitCustomSkill: "Save Custom Skill"
  }
};

class SkillPulseApp {
  constructor() {
    this.customSkills = this.loadCustomSkills();
    this.analyzer = new JobMarketAnalyzer(this.combineTaxonomy(SKILL_TAXONOMY, this.customSkills));
    
    // Preferences & state
    this.currentLang = localStorage.getItem("skillpulse_lang") || "pt";
    this.sourceFilter = "all"; // 'all' | 'benchmark' | 'user' for Overview metrics
    this.postings = this.loadPostings();
    this.userSkills = this.loadUserSkills();
    
    // Tab filters
    this.chartRoleFilter = "all";
    this.matrixCategoryFilter = "all";
    this.matrixOriginFilter = "all"; // 'all' | 'official' | 'custom'
    
    // Benchmark tab filters
    this.bmCategory = "all";
    this.bmLevel = "all";
    this.bmSearch = "";

    // My Jobs tab filters
    this.mjCategory = "all";
    this.mjSearch = "";
    
    this.initElements();
    this.applyLanguage();
    this.bindEvents();
    this.refreshAll();
  }

  isBenchmarkPosting(posting) {
    if (!posting) return false;
    return posting.isBenchmark === true || (typeof posting.id === "number" && posting.id <= 50);
  }

  loadPostings() {
    try {
      const stored = localStorage.getItem("skillpulse_postings");
      if (stored) {
        let parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          let updated = false;
          parsed.forEach(p => {
            if (this.isBenchmarkPosting(p)) {
              if (p.isBenchmark !== true) {
                p.isBenchmark = true;
                updated = true;
              }
            } else {
              if (p.isBenchmark !== false) {
                p.isBenchmark = false;
                updated = true;
              }
            }
          });

          // Ensure all 50 original benchmark jobs are in the list
          const benchmarkIds = new Set(parsed.filter(p => this.isBenchmarkPosting(p)).map(p => p.id));
          if (benchmarkIds.size < 50 && typeof BENCHMARK_JOB_POSTINGS !== "undefined") {
            BENCHMARK_JOB_POSTINGS.forEach(bm => {
              if (!benchmarkIds.has(bm.id)) {
                parsed.push({ ...bm, isBenchmark: true });
                updated = true;
              }
            });
          }

          if (updated) {
            localStorage.setItem("skillpulse_postings", JSON.stringify(parsed));
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Failed to read postings from localStorage:", e);
    }
    return BENCHMARK_JOB_POSTINGS.map(p => ({ ...p, isBenchmark: true }));
  }

  savePostings() {
    try {
      localStorage.setItem("skillpulse_postings", JSON.stringify(this.postings));
      return true;
    } catch (e) {
      console.error("Failed to save postings to localStorage:", e);
      const isEn = this.currentLang === "en";
      this.showToast(
        isEn
          ? "Storage quota exceeded! Your changes could not be saved to browser storage."
          : "Limite de memória do navegador excedido! Não foi possível salvar as vagas.",
        "warning"
      );
      return false;
    }
  }

  loadUserSkills() {
    try {
      const stored = localStorage.getItem("skillpulse_user_skills");
      if (stored) {
        return { ...DEFAULT_USER_SKILLS, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn("Failed to read userSkills from localStorage:", e);
    }
    return { ...DEFAULT_USER_SKILLS };
  }

  saveUserSkills() {
    try {
      localStorage.setItem("skillpulse_user_skills", JSON.stringify(this.userSkills));
    } catch (e) {
      console.warn("Failed to save userSkills:", e);
    }
  }

  loadCustomSkills() {
    try {
      const stored = localStorage.getItem("skillpulse_custom_skills");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed.map(s => {
            const patterns = (s.patternStrings || []).map(p => {
              try {
                return new RegExp(p, 'i');
              } catch (e) {
                return new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
              }
            });
            return {
              ...s,
              patterns: patterns.length > 0 ? patterns : [new RegExp(`\\b${s.id}\\b`, 'i')]
            };
          });
        }
      }
    } catch (e) {
      console.warn("Failed to load custom skills:", e);
    }
    return [];
  }

  saveCustomSkills() {
    try {
      const serialized = this.customSkills.map(s => ({
        ...s,
        patterns: undefined,
        patternStrings: (s.patterns || []).map(p => p.source)
      }));
      localStorage.setItem("skillpulse_custom_skills", JSON.stringify(serialized));
    } catch (e) {
      console.warn("Failed to save custom skills:", e);
    }
  }

  combineTaxonomy(baseTaxonomy, customSkills) {
    const list = [...baseTaxonomy];
    const existingIds = new Set(list.map(s => s.id));
    if (Array.isArray(customSkills)) {
      customSkills.forEach(cs => {
        if (!existingIds.has(cs.id)) {
          list.push(cs);
          existingIds.add(cs.id);
        }
      });
    }
    return list;
  }

  getCategoryLabel(categoryKey, lang = 'pt') {
    const map = {
      languages: { pt: "Linguagens & Core", en: "Languages & Core" },
      data_bi: { pt: "Dados & Business Intelligence", en: "Data & Business Intelligence" },
      backend_apis: { pt: "Backend & Arquitetura", en: "Backend & Architecture" },
      databases: { pt: "Bancos de Dados", en: "Databases" },
      cloud_devops: { pt: "Cloud & DevOps", en: "Cloud & DevOps" },
      ai_automation: { pt: "IA Aplicada & Automação", en: "Applied AI & Automation" },
      education_diff: { pt: "Soft Skills & Idiomas", en: "Soft Skills & Languages" }
    };
    if (map[categoryKey]) {
      return lang === 'en' ? map[categoryKey].en : map[categoryKey].pt;
    }
    return categoryKey;
  }

  initElements() {
    // Language & Source controls
    this.btnLangToggle = document.getElementById("btnLangToggle");
    this.langPt = document.getElementById("langPt");
    this.langEn = document.getElementById("langEn");
    
    this.btnSourceAll = document.getElementById("btnSourceAll");
    this.btnSourceBenchmark = document.getElementById("btnSourceBenchmark");
    this.btnSourceUser = document.getElementById("btnSourceUser");
    this.cntSourceAll = document.getElementById("cntSourceAll");
    this.cntSourceBenchmark = document.getElementById("cntSourceBenchmark");
    this.cntSourceUser = document.getElementById("cntSourceUser");

    // Tabs & views
    this.tabButtons = document.querySelectorAll(".tab-btn");
    this.tabContents = document.querySelectorAll(".tab-content");
    
    // Top stats
    this.valTotalPostings = document.getElementById("valTotalPostings");
    this.valUniqueSkills = document.getElementById("valUniqueSkills");
    this.valMarketMatch = document.getElementById("valMarketMatch");
    this.valTopSkill = document.getElementById("valTopSkill");
    this.valTopSkillPercent = document.getElementById("valTopSkillPercent");
    this.badgeBenchmarkCount = document.getElementById("badgeBenchmarkCount");
    this.badgeMyJobsCount = document.getElementById("badgeMyJobsCount");
    this.badgeSkillsCount = document.getElementById("badgeSkillsCount");
    
    // Containers
    this.barChartContainer = document.getElementById("barChartContainer");
    this.cooccurrenceList = document.getElementById("cooccurrenceList");
    this.benchmarkGrid = document.getElementById("benchmarkGridContainer");
    this.myJobsGrid = document.getElementById("myJobsGridContainer");
    this.skillsMatrixContainer = document.getElementById("skillsMatrixContainer");
    this.criticalGapsList = document.getElementById("criticalGapsList");
    this.quickWinsList = document.getElementById("quickWinsList");
    this.masteredStrengthsList = document.getElementById("masteredStrengthsList");
    this.scoreCenterText = document.getElementById("scoreCenterText");
    this.scoreCircleValue = document.getElementById("scoreCircleValue");

    // Inputs
    this.inputSearchBenchmark = document.getElementById("inputSearchBenchmark");
    this.inputSearchMyJobs = document.getElementById("inputSearchMyJobs");

    // Modal Postings
    this.modalOverlay = document.getElementById("postingModalOverlay");
    this.modalCloseBtn = document.getElementById("modalCloseBtn");
    this.modalJobTitle = document.getElementById("modalJobTitle");
    this.modalJobSub = document.getElementById("modalJobSub");
    this.modalJobBodyText = document.getElementById("modalJobBodyText");
    this.modalSkillsList = document.getElementById("modalSkillsList");

    // Modal Skills (Official & Custom)
    this.btnOpenAddSkillModal = document.getElementById("btnOpenAddSkillModal");
    this.skillModalOverlay = document.getElementById("skillModalOverlay");
    this.modalSkillCloseBtn = document.getElementById("modalSkillCloseBtn");
    this.btnModalTabOfficial = document.getElementById("btnModalTabOfficial");
    this.btnModalTabCustom = document.getElementById("btnModalTabCustom");
    this.modalSectionOfficial = document.getElementById("modalSectionOfficial");
    this.modalSectionCustom = document.getElementById("modalSectionCustom");
    this.officialCatalogContainer = document.getElementById("officialCatalogContainer");
    this.formAddCustomSkill = document.getElementById("formAddCustomSkill");
    this.btnCancelCustomSkill = document.getElementById("btnCancelCustomSkill");

    // Origin count badges in tab-matrix
    this.cntMatrixAll = document.getElementById("cntMatrixAll");
    this.cntMatrixOfficial = document.getElementById("cntMatrixOfficial");
    this.cntMatrixCustom = document.getElementById("cntMatrixCustom");

    // Actions & Form
    this.formAddPosting = document.getElementById("formAddPosting");
    this.btnResetBenchmark = document.getElementById("btnResetBenchmark");
    this.btnGeneratePdf = document.getElementById("btnGeneratePdf");
    this.btnQuickAddPosting = document.getElementById("btnQuickAddPosting");
    this.btnPrintPlan = document.getElementById("btnPrintPlan");
    this.btnExportUserJobs = document.getElementById("btnExportUserJobs");
    this.btnImportUserJobs = document.getElementById("btnImportUserJobs");
    this.inputImportUserJobs = document.getElementById("inputImportUserJobs");
    this.toastContainer = document.getElementById("toastContainer");
  }

  applyLanguage() {
    const t = TRANSLATIONS[this.currentLang];
    
    if (this.langPt && this.langEn) {
      this.langPt.classList.toggle("active-lang", this.currentLang === "pt");
      this.langEn.classList.toggle("active-lang", this.currentLang === "en");
    }

    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setTxt("txtBtnPdf", t.btnPdf);
    setTxt("txtBtnReset", t.btnReset);
    setTxt("txtBtnNew", t.btnNew);
    setTxt("txtBtnExportUserJobs", t.btnExportUserJobs);
    setTxt("txtBtnImportUserJobs", t.btnImportUserJobs);
    setTxt("lblStatPostings", t.lblStatPostings);
    setTxt("lblSubPostings", t.subStatPostings);
    setTxt("lblStatSkills", t.lblStatSkills);
    setTxt("lblSubSkills", t.subStatSkills);
    setTxt("lblStatMatch", t.lblStatMatch);
    setTxt("lblSubMatch", t.subStatMatch);
    setTxt("lblStatTopSkill", t.lblStatTopSkill);
    setTxt("txtSourceAll", t.sourceAll);
    setTxt("txtSourceBenchmark", t.sourceBenchmark);
    setTxt("txtSourceUser", t.sourceUser);
    setTxt("txtTabOverview", t.tabOverview);
    setTxt("txtTabBenchmark", t.tabBenchmark);
    setTxt("txtTabMyJobs", t.tabMyJobs);
    setTxt("txtTabMatrix", t.tabMatrix);
    setTxt("txtTabGaps", t.tabGaps);
    setTxt("txtTabPlan", t.tabPlan);
    setTxt("txtTabAdd", t.tabAdd);

    // Skill Management and Modal Translations
    setTxt("txtBtnOpenAddSkill", t.btnOpenAddSkill);
    setTxt("lblMatrixOrigin", t.lblMatrixOrigin);
    setTxt("modalSkillHeaderTitle", t.modalSkillHeaderTitle);
    setTxt("modalSkillHeaderSub", t.modalSkillHeaderSub);
    setTxt("txtModalTabOfficial", t.txtModalTabOfficial);
    setTxt("txtModalTabCustom", t.txtModalTabCustom);
    setTxt("txtOfficialBannerTitle", t.txtOfficialBannerTitle);
    setTxt("txtOfficialBannerDesc", t.txtOfficialBannerDesc);
    setTxt("txtBtnSubmitCustomSkill", t.txtBtnSubmitCustomSkill);

    if (this.analyzer) {
      this.refreshAll();
    }
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("skillpulse_lang", this.currentLang);
    this.applyLanguage();
  }

  getActivePostings() {
    if (this.sourceFilter === "benchmark") {
      return this.postings.filter(p => this.isBenchmarkPosting(p));
    }
    if (this.sourceFilter === "user") {
      return this.postings.filter(p => !this.isBenchmarkPosting(p));
    }
    return this.postings;
  }

  bindEvents() {
    // Language Toggle
    if (this.btnLangToggle) {
      this.btnLangToggle.addEventListener("click", () => this.toggleLanguage());
    }

    // Source Selector Chips (Overview Analytics)
    [this.btnSourceAll, this.btnSourceBenchmark, this.btnSourceUser].forEach(btn => {
      if (!btn) return;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".source-chip").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        this.sourceFilter = btn.getAttribute("data-source");
        this.refreshAll();
      });
    });

    // Navigation Tabs
    this.tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");
        this.switchTab(targetTab);
      });
    });

    // Quick Add Button in Header
    if (this.btnQuickAddPosting) {
      this.btnQuickAddPosting.addEventListener("click", () => {
        this.switchTab("tab-add");
        document.getElementById("inputJobTitle").focus();
      });
    }

    // Chart Filter Chips
    document.querySelectorAll("[data-chart-role]").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("[data-chart-role]").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.chartRoleFilter = chip.getAttribute("data-chart-role");
        this.renderChart();
      });
    });

    // Benchmark Category Filter Chips
    document.querySelectorAll("[data-bm-filter]").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("[data-bm-filter]").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.bmCategory = chip.getAttribute("data-bm-filter");
        this.renderBenchmarkGrid();
      });
    });

    // Benchmark Level Filter Chips
    document.querySelectorAll("[data-bm-level]").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("[data-bm-level]").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.bmLevel = chip.getAttribute("data-bm-level");
        this.renderBenchmarkGrid();
      });
    });

    // Benchmark Search
    if (this.inputSearchBenchmark) {
      this.inputSearchBenchmark.addEventListener("input", (e) => {
        this.bmSearch = e.target.value.toLowerCase().trim();
        this.renderBenchmarkGrid();
      });
    }

    // My Jobs Category Filter Chips
    document.querySelectorAll("[data-mj-filter]").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("[data-mj-filter]").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.mjCategory = chip.getAttribute("data-mj-filter");
        this.renderMyJobsGrid();
      });
    });

    // My Jobs Search
    if (this.inputSearchMyJobs) {
      this.inputSearchMyJobs.addEventListener("input", (e) => {
        this.mjSearch = e.target.value.toLowerCase().trim();
        this.renderMyJobsGrid();
      });
    }

    // Skills Matrix Category Filters
    document.querySelectorAll("[data-matrix-cat]").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("[data-matrix-cat]").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.matrixCategoryFilter = chip.getAttribute("data-matrix-cat");
        this.renderSkillsMatrix();
      });
    });

    // Skills Matrix Origin Filter Chips
    document.querySelectorAll("[data-matrix-origin]").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("[data-matrix-origin]").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.matrixOriginFilter = chip.getAttribute("data-matrix-origin");
        this.renderSkillsMatrix();
      });
    });

    // Open Add Skill Modal
    if (this.btnOpenAddSkillModal) {
      this.btnOpenAddSkillModal.addEventListener("click", () => this.openSkillModal());
    }

    // Modal Skill Controls & Tabs
    if (this.modalSkillCloseBtn) {
      this.modalSkillCloseBtn.addEventListener("click", () => this.closeSkillModal());
    }
    if (this.btnCancelCustomSkill) {
      this.btnCancelCustomSkill.addEventListener("click", () => this.closeSkillModal());
    }
    if (this.skillModalOverlay) {
      this.skillModalOverlay.addEventListener("click", (e) => {
        if (e.target === this.skillModalOverlay) this.closeSkillModal();
      });
    }
    if (this.btnModalTabOfficial && this.btnModalTabCustom) {
      this.btnModalTabOfficial.addEventListener("click", () => this.switchModalTab("official"));
      this.btnModalTabCustom.addEventListener("click", () => this.switchModalTab("custom"));
    }
    if (this.formAddCustomSkill) {
      this.formAddCustomSkill.addEventListener("submit", (e) => this.handleAddCustomSkill(e));
    }

    // Modal Close
    this.modalCloseBtn.addEventListener("click", () => this.closeModal());
    this.modalOverlay.addEventListener("click", (e) => {
      if (e.target === this.modalOverlay) this.closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.modalOverlay && this.modalOverlay.classList.contains("active")) {
          this.closeModal();
        }
        if (this.skillModalOverlay && this.skillModalOverlay.classList.contains("active")) {
          this.closeSkillModal();
        }
      }
    });

    // Add Posting Form
    if (this.formAddPosting) {
      this.formAddPosting.addEventListener("submit", (e) => this.handleAddPosting(e));
    }

    // Reset Benchmark Postings
    if (this.btnResetBenchmark) {
      this.btnResetBenchmark.addEventListener("click", () => {
        const msg = this.currentLang === "en" 
          ? "Do you want to restore the 50 original benchmark jobs?" 
          : "Deseja restaurar as 50 vagas reais originais do Benchmark 2026?";
        if (confirm(msg)) {
          const userJobs = this.postings.filter(p => !this.isBenchmarkPosting(p));
          const restoredBenchmarks = BENCHMARK_JOB_POSTINGS.map(p => ({ ...p, isBenchmark: true }));
          this.postings = [...userJobs, ...restoredBenchmarks];
          this.savePostings();
          this.refreshAll();
          this.showToast(TRANSLATIONS[this.currentLang].toastRestored, "success");
        }
      });
    }

    // Generate Executive Full PDF Report
    if (this.btnGeneratePdf) {
      this.btnGeneratePdf.addEventListener("click", () => this.generateFullPdfReport());
    }

    // Print Action Plan (Also renders Full PDF)
    if (this.btnPrintPlan) {
      this.btnPrintPlan.addEventListener("click", () => this.generateFullPdfReport());
    }

    // Export and Import User Custom Postings (JSON Backup)
    if (this.btnExportUserJobs) {
      this.btnExportUserJobs.addEventListener("click", () => this.exportUserPostings());
    }
    if (this.btnImportUserJobs && this.inputImportUserJobs) {
      this.btnImportUserJobs.addEventListener("click", () => this.inputImportUserJobs.click());
      this.inputImportUserJobs.addEventListener("change", (e) => this.importUserPostings(e));
    }

    // Multi-tab synchronization via storage event
    window.addEventListener("storage", (e) => {
      if (e.key === "skillpulse_postings") {
        this.postings = this.loadPostings();
        this.refreshAll();
      } else if (e.key === "skillpulse_user_skills") {
        this.userSkills = this.loadUserSkills();
        this.refreshAll();
      } else if (e.key === "skillpulse_custom_skills") {
        this.customSkills = this.loadCustomSkills();
        this.analyzer.setTaxonomy(this.combineTaxonomy(SKILL_TAXONOMY, this.customSkills));
        this.refreshAll();
      }
    });
  }

  openSkillModal() {
    if (!this.skillModalOverlay) return;
    this.switchModalTab("official");
    this.renderOfficialCatalog();
    this.skillModalOverlay.classList.add("active");
  }

  closeSkillModal() {
    if (!this.skillModalOverlay) return;
    this.skillModalOverlay.classList.remove("active");
  }

  switchModalTab(tabType) {
    const isOfficial = tabType === "official";
    if (this.btnModalTabOfficial) this.btnModalTabOfficial.classList.toggle("active", isOfficial);
    if (this.btnModalTabCustom) this.btnModalTabCustom.classList.toggle("active", !isOfficial);
    if (this.modalSectionOfficial) this.modalSectionOfficial.style.display = isOfficial ? "block" : "none";
    if (this.modalSectionCustom) this.modalSectionCustom.style.display = !isOfficial ? "block" : "none";
    if (isOfficial) {
      this.renderOfficialCatalog();
    }
  }

  renderOfficialCatalog() {
    if (!this.officialCatalogContainer) return;
    const isEn = this.currentLang === "en";
    const t = TRANSLATIONS[this.currentLang];
    const catalog = window.OFFICIAL_RECOMMENDED_SKILLS || [];
    const activeSkillIds = new Set(this.analyzer.taxonomy.map(s => s.id));

    this.officialCatalogContainer.innerHTML = catalog.map(skill => {
      const isActive = activeSkillIds.has(skill.id);
      const name = isEn ? skill.nameEn : skill.namePt;
      const catLabel = isEn ? skill.categoryLabelEn : skill.categoryLabelPt;
      const desc = isEn ? skill.descEn : skill.descPt;
      const source = skill.officialSource || "Padrão Oficial (Indústria)";

      return `
        <div class="official-skill-card">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.4rem;">
              <h4 style="font-size: 0.95rem; font-weight: 700; color: #fff; line-height: 1.3;">${escapeHtml(name)}</h4>
              <span class="official-source-tag" title="${escapeHtml(source)}">🏛️ ${escapeHtml(source.split('/')[0].trim())}</span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.03em;">
              ${escapeHtml(catLabel)}
            </div>
            <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.45;">${escapeHtml(desc)}</p>
          </div>

          <div style="margin-top: 0.75rem;">
            <button class="btn-activate-skill ${isActive ? 'is-active' : ''}" 
              ${isActive ? 'disabled' : ''} 
              onclick="app.activateOfficialSkill('${escapeHtml(skill.id)}')">
              ${isActive ? t.skillActiveInMatrix : t.btnActivateSkill}
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  activateOfficialSkill(skillId) {
    const catalog = window.OFFICIAL_RECOMMENDED_SKILLS || [];
    const skillObj = catalog.find(s => s.id === skillId);
    if (!skillObj) return;

    if (this.analyzer.skillMap.has(skillId)) {
      this.showToast(this.currentLang === "en" ? "Skill already active in matrix!" : "Habilidade já está ativa na matriz!", "info");
      return;
    }

    const newSkill = {
      ...skillObj,
      origin: "official",
      isCustom: false
    };

    this.customSkills.push(newSkill);
    this.saveCustomSkills();

    this.analyzer.setTaxonomy(this.combineTaxonomy(SKILL_TAXONOMY, this.customSkills));

    if (!this.userSkills[skillId]) {
      this.userSkills[skillId] = "learning";
      this.saveUserSkills();
    }

    this.refreshAll();
    this.renderOfficialCatalog();

    const t = TRANSLATIONS[this.currentLang];
    const skillName = this.currentLang === "en" ? skillObj.nameEn.split(" ")[0] : skillObj.namePt.split(" ")[0];
    this.showToast(t.toastOfficialSkillAdded.replace("{name}", skillName), "success");
  }

  handleAddCustomSkill(e) {
    e.preventDefault();
    const isEn = this.currentLang === "en";
    const t = TRANSLATIONS[this.currentLang];

    const nameInput = document.getElementById("inputCustomSkillName");
    const catInput = document.getElementById("selectCustomSkillCategory");
    const statusInput = document.getElementById("selectCustomSkillInitialStatus");
    const kwInput = document.getElementById("inputCustomSkillKeywords");
    const descInput = document.getElementById("textareaCustomSkillDesc");

    const name = nameInput ? nameInput.value.trim() : "";
    const category = catInput ? catInput.value : "languages";
    const initialStatus = statusInput ? statusInput.value : "learning";
    const rawKeywords = kwInput ? kwInput.value.trim() : "";
    const desc = descInput ? descInput.value.trim() : "";

    if (!name || !rawKeywords) {
      this.showToast(t.toastFillRequired, "warning");
      return;
    }

    // Generate safe unique ID
    const slug = normalizeText(name).replace(/[^a-z0-9]/g, "_").replace(/_+/g, "_").slice(0, 20);
    const customId = `usr_${slug || "skill"}_${Date.now().toString(36)}`;

    // Build regex patterns from keywords
    const keywordsList = rawKeywords.split(",").map(k => k.trim()).filter(Boolean);
    const patterns = keywordsList.map(kw => {
      const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp(`\\b${escaped}\\b`, 'i');
    });

    const newSkill = {
      id: customId,
      namePt: name,
      nameEn: name,
      category: category,
      categoryLabelPt: this.getCategoryLabel(category, 'pt'),
      categoryLabelEn: this.getCategoryLabel(category, 'en'),
      tier: "Alta Demanda",
      origin: "custom",
      officialSource: isEn ? "User Custom Skill" : "Habilidade Personalizada",
      isCustom: true,
      patterns: patterns,
      patternStrings: patterns.map(p => p.source),
      descPt: desc || (isEn ? "Custom skill added by user." : "Habilidade personalizada adicionada pelo usuário."),
      descEn: desc || "Custom skill added by user."
    };

    this.customSkills.push(newSkill);
    this.saveCustomSkills();

    this.analyzer.setTaxonomy(this.combineTaxonomy(SKILL_TAXONOMY, this.customSkills));
    this.userSkills[customId] = initialStatus;
    this.saveUserSkills();

    this.closeSkillModal();
    if (this.formAddCustomSkill) this.formAddCustomSkill.reset();

    this.refreshAll();
    this.showToast(t.toastCustomSkillAdded.replace("{name}", name), "success");
  }

  confirmDeleteCustomSkill(skillId) {
    const isEn = this.currentLang === "en";
    const t = TRANSLATIONS[this.currentLang];
    const skillObj = this.analyzer.skillMap.get(skillId);
    if (!skillObj) return;

    if (skillObj.origin === "official" && !skillObj.isCustom) {
      this.showToast(t.cannotDeleteOfficialSkill, "warning");
      return;
    }

    const skillName = isEn ? skillObj.nameEn : skillObj.namePt;
    const confirmMsg = t.confirmDeleteSkillPrompt.replace("{name}", skillName);

    if (window.confirm(confirmMsg)) {
      this.customSkills = this.customSkills.filter(s => s.id !== skillId);
      this.saveCustomSkills();

      delete this.userSkills[skillId];
      this.saveUserSkills();

      this.analyzer.setTaxonomy(this.combineTaxonomy(SKILL_TAXONOMY, this.customSkills));
      this.refreshAll();
      this.showToast(t.toastSkillDeleted.replace("{name}", skillName), "success");
    }
  }

  switchTab(tabId) {
    this.tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });
    this.tabContents.forEach(content => {
      content.classList.toggle("active", content.id === tabId);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  refreshAll() {
    const activeData = this.getActivePostings();
    this.analysis = this.analyzer.analyzePostings(activeData, { lang: this.currentLang });
    this.gapAnalysis = this.analyzer.computeSkillGap(this.analysis.skillFrequencies, this.userSkills);

    this.updateCounts();
    this.renderStats();
    this.renderChart();
    this.renderCooccurrences();
    this.renderBenchmarkGrid();
    this.renderMyJobsGrid();
    this.renderSkillsMatrix();
    this.renderGapAnalysis();
  }

  updateCounts() {
    const total = this.postings.length;
    const benchmarkCount = this.postings.filter(p => this.isBenchmarkPosting(p)).length;
    const userCount = this.postings.filter(p => !this.isBenchmarkPosting(p)).length;

    if (this.cntSourceAll) this.cntSourceAll.textContent = total;
    if (this.cntSourceBenchmark) this.cntSourceBenchmark.textContent = benchmarkCount;
    if (this.cntSourceUser) this.cntSourceUser.textContent = userCount;

    if (this.badgeBenchmarkCount) this.badgeBenchmarkCount.textContent = benchmarkCount;
    if (this.badgeMyJobsCount) this.badgeMyJobsCount.textContent = userCount;
    if (this.badgeSkillsCount) this.badgeSkillsCount.textContent = this.analyzer.taxonomy.length;
  }

  renderStats() {
    const activeData = this.getActivePostings();
    const total = activeData.length;
    const subLabel = TRANSLATIONS[this.currentLang].subStatPostings;

    this.valTotalPostings.innerHTML = `${total} <span class="sub">${subLabel}</span>`;

    const uniqueSkillsDetected = this.analysis.skillFrequencies.filter(s => s.count > 0).length;
    const compLabel = TRANSLATIONS[this.currentLang].subStatSkills;
    this.valUniqueSkills.innerHTML = `${uniqueSkillsDetected} <span class="sub">${compLabel}</span>`;

    const match = this.gapAnalysis.matchScore;
    const compatLabel = TRANSLATIONS[this.currentLang].subStatMatch;
    this.valMarketMatch.innerHTML = `${match}% <span class="sub">${compatLabel}</span>`;

    const topSkillItem = this.analysis.skillFrequencies[0];
    if (topSkillItem && topSkillItem.count > 0) {
      const topName = this.currentLang === "en" ? topSkillItem.skill.nameEn : topSkillItem.skill.namePt;
      this.valTopSkill.innerHTML = `${topName.split(" ")[0]} <span class="sub">${topSkillItem.percentage}%</span>`;
    } else {
      this.valTopSkill.innerHTML = `- <span class="sub">0%</span>`;
    }
  }

  renderChart() {
    if (!this.barChartContainer) return;

    let dataset = [...this.analysis.skillFrequencies];

    if (this.chartRoleFilter !== "all") {
      dataset = dataset
        .map(item => ({
          ...item,
          count: item.roles[this.chartRoleFilter] || 0
        }))
        .filter(item => item.count > 0)
        .sort((a, b) => b.count - a.count);
    }

    const topSkills = dataset.slice(0, 12);
    const activeData = this.getActivePostings();

    if (topSkills.length === 0 || activeData.length === 0) {
      this.barChartContainer.innerHTML = `<div style="padding: 2rem; color: var(--text-muted); text-align: center;">${
        this.currentLang === "en" ? "No skills found for this sample/filter." : "Nenhuma habilidade encontrada para esta amostra/filtro."
      }</div>`;
      return;
    }

    const totalInFilter = this.chartRoleFilter === "all" 
      ? activeData.length 
      : activeData.filter(p => p.category === this.chartRoleFilter).length || 1;

    const svgWidth = 720;
    const barHeight = 26;
    const rowGap = 12;
    const leftMargin = 190;
    const rightMargin = 80;
    const chartContentWidth = svgWidth - leftMargin - rightMargin;
    const svgHeight = topSkills.length * (barHeight + rowGap) + 30;

    let svgRows = topSkills.map((item, index) => {
      const y = index * (barHeight + rowGap) + 10;
      const pct = Math.round((item.count / totalInFilter) * 100);
      const barWidth = Math.max(8, (pct / 100) * chartContentWidth);

      const userStatus = this.userSkills[item.skill.id] || "gap";
      let barFill = "url(#barGradientNormal)";
      let strokeColor = "rgba(99, 102, 241, 0.4)";
      
      if (userStatus === "mastered") {
        barFill = "url(#barGradientMastered)";
        strokeColor = "rgba(16, 185, 129, 0.4)";
      } else if (userStatus === "learning") {
        barFill = "url(#barGradientLearning)";
        strokeColor = "rgba(245, 158, 11, 0.4)";
      }

      let labelName = this.currentLang === "en" ? item.skill.nameEn : item.skill.namePt;
      if (labelName.length > 24) labelName = labelName.substring(0, 22) + "...";

      return `
        <g class="chart-row" data-skill-id="${item.skill.id}">
          <text x="${leftMargin - 12}" y="${y + barHeight / 2 + 5}" text-anchor="end" class="chart-label">
            ${labelName}
          </text>
          
          <rect x="${leftMargin}" y="${y}" width="${chartContentWidth}" height="${barHeight}" rx="6" fill="rgba(255,255,255,0.03)" />
          
          <rect x="${leftMargin}" y="${y}" width="${barWidth}" height="${barHeight}" rx="6" fill="${barFill}" stroke="${strokeColor}" stroke-width="1" class="bar-rect">
            <title>${labelName}: ${item.count}/${totalInFilter} (${pct}%)</title>
          </rect>
          
          <text x="${leftMargin + barWidth + 10}" y="${y + barHeight / 2 + 4}" class="chart-value">
            ${pct}% <tspan fill="rgba(255,255,255,0.3)" font-size="10">(${item.count})</tspan>
          </text>
        </g>
      `;
    }).join("");

    this.barChartContainer.innerHTML = `
      <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="svg-chart">
        <defs>
          <linearGradient id="barGradientNormal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4f46e5" />
            <stop offset="100%" stop-color="#06b6d4" />
          </linearGradient>
          <linearGradient id="barGradientMastered" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#059669" />
            <stop offset="100%" stop-color="#10b981" />
          </linearGradient>
          <linearGradient id="barGradientLearning" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#d97706" />
            <stop offset="100%" stop-color="#f59e0b" />
          </linearGradient>
        </defs>
        ${svgRows}
      </svg>
    `;
  }

  renderCooccurrences() {
    if (!this.cooccurrenceList) return;
    const pairs = this.analysis.coOccurrences.slice(0, 8);

    if (pairs.length === 0) {
      this.cooccurrenceList.innerHTML = `<div style="color: var(--text-muted); font-size: 0.85rem;">${
        this.currentLang === "en" ? "Calculating co-occurrences..." : "Calculando pares tecnológicos..."
      }</div>`;
      return;
    }

    this.cooccurrenceList.innerHTML = pairs.map(item => {
      const nameA = this.currentLang === "en" ? item.skillA.nameEn : item.skillA.namePt;
      const nameB = this.currentLang === "en" ? item.skillB.nameEn : item.skillB.namePt;

      return `
        <div class="cooccur-card">
          <div class="pair-nodes">
            <span class="pair-badge">${nameA.split(" ")[0]}</span>
            <span class="pair-connector">✦</span>
            <span class="pair-badge">${nameB.split(" ")[0]}</span>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.82rem; font-weight: 700; color: var(--accent-cyan);">
            ${item.percentage}% <span style="font-size: 0.72rem; color: var(--text-dim); font-family: var(--font-main);">(${item.count})</span>
          </div>
        </div>
      `;
    }).join("");
  }

  renderPostingCard(posting) {
    if (!posting) return "";
    const safeTitle = escapeHtml(posting.title || "Sem título");
    const safeCompany = escapeHtml(posting.company || "Empresa Confidencial");
    const safeLevel = escapeHtml(posting.level || "Júnior");
    const safeModality = escapeHtml(posting.modality || "Remoto");
    const safeSalary = escapeHtml(posting.salary || (this.currentLang === "en" ? "Competitive" : "A combinar"));
    const safeId = escapeHtml(String(posting.id));

    const extracted = this.analyzer.extractSkills((posting.description || "") + " " + (posting.title || ""), { lang: this.currentLang });
    const topTags = extracted.slice(0, 5);

    let badgeClass = "badge-junior";
    if (posting.level === "Estágio") badgeClass = "badge-estagio";
    if (posting.level === "Pleno" || posting.level === "Mid/Senior" || posting.level === "Senior") badgeClass = "badge-pleno";

    let modalityBadge = "";
    if (safeModality.includes("USD")) {
      modalityBadge = `<span class="badge badge-usd">💵 USD</span>`;
    } else if (safeModality.includes("Salvador")) {
      modalityBadge = `<span class="badge badge-salvador">📍 Salvador</span>`;
    } else {
      modalityBadge = `<span class="badge">🌐 ${safeModality}</span>`;
    }

    const isBm = this.isBenchmarkPosting(posting);
    const sourceBadge = isBm 
      ? `<span class="badge badge-source-benchmark">🏛️ Benchmark</span>` 
      : `<span class="badge badge-source-user">👤 Minha Vaga</span>`;

    const deleteBtn = !isBm ? `
      <button class="btn-delete-posting" onclick="event.stopPropagation(); app.confirmDeletePosting('${safeId}')" title="${this.currentLang === 'en' ? 'Delete this custom job' : 'Excluir esta vaga adicionada'}">
        <span>🗑️</span> <span class="btn-delete-text">${this.currentLang === 'en' ? 'Delete' : 'Excluir'}</span>
      </button>
    ` : '';

    return `
      <article class="posting-card" onclick="app.openPostingModal('${safeId}')">
        <div>
          <div class="posting-header">
            <div>
              <h3 class="posting-title">${safeTitle}</h3>
              <div class="posting-company">${safeCompany}</div>
            </div>
            ${deleteBtn}
          </div>

          <div class="posting-badges">
            ${sourceBadge}
            <span class="badge ${badgeClass}">${safeLevel}</span>
            ${modalityBadge}
          </div>

          <div class="posting-skills-preview">
            ${topTags.map(t => {
              const tagClass = t.isDifferential ? "skill-badge-differential" : "skill-badge-mandatory";
              const icon = t.isDifferential ? "⭐" : "📌";
              return `<span class="${tagClass}">${icon} ${escapeHtml(t.name.split(" ")[0])}</span>`;
            }).join("")}
            ${extracted.length > 5 ? `<span style="font-size: 0.7rem; color: var(--text-dim); align-self: center;">+${extracted.length - 5}</span>` : ""}
          </div>
        </div>

        <div class="posting-footer">
          <span class="posting-salary">${safeSalary}</span>
          <span style="color: var(--accent-cyan); font-weight: 600;">${this.currentLang === "en" ? "View Details →" : "Ver Detalhes →"}</span>
        </div>
      </article>
    `;
  }

  // TAB 2: Render exclusively the 50 original benchmark postings (Diacritic-insensitive search)
  renderBenchmarkGrid() {
    if (!this.benchmarkGrid) return;

    const benchmarkPostings = this.postings.filter(p => this.isBenchmarkPosting(p));

    let filtered = benchmarkPostings.filter(p => {
      if (this.bmCategory !== "all" && p.category !== this.bmCategory) return false;
      if (this.bmLevel !== "all" && p.level !== this.bmLevel) return false;
      if (this.bmSearch) {
        const fullText = normalizeText((p.title || "") + " " + (p.company || "") + " " + (p.description || ""));
        if (!fullText.includes(normalizeText(this.bmSearch))) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      this.benchmarkGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <p>${this.currentLang === "en" ? "No benchmark jobs match this filter." : "Nenhuma vaga de benchmark encontrada com este filtro."}</p>
        </div>
      `;
      return;
    }

    this.benchmarkGrid.innerHTML = filtered.map(p => this.renderPostingCard(p)).join("");
  }

  // TAB 3: Render exclusively user-added custom postings (Diacritic-insensitive search)
  renderMyJobsGrid() {
    if (!this.myJobsGrid) return;

    const userPostings = this.postings.filter(p => !this.isBenchmarkPosting(p));

    if (userPostings.length === 0) {
      const t = TRANSLATIONS[this.currentLang];
      this.myJobsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3.5rem 2rem; text-align: center; background: var(--bg-surface); border-radius: var(--radius-lg); border: 2px dashed var(--border-medium);">
          <div style="font-size: 3rem; margin-bottom: 0.8rem;">📥</div>
          <h3 style="color: var(--text-main); font-size: 1.25rem; margin-bottom: 0.5rem;">${t.emptyMyJobsTitle}</h3>
          <p style="font-size: 0.88rem; max-width: 520px; margin: 0 auto 1.5rem; color: var(--text-dim); line-height: 1.6;">
            ${t.emptyMyJobsDesc}
          </p>
          <button class="btn btn-primary" onclick="app.switchTab('tab-add')">
            <span>➕</span> ${t.btnAddFirstJob}
          </button>
        </div>
      `;
      return;
    }

    let filtered = userPostings.filter(p => {
      if (this.mjCategory !== "all" && p.category !== this.mjCategory) return false;
      if (this.mjSearch) {
        const fullText = normalizeText((p.title || "") + " " + (p.company || "") + " " + (p.description || ""));
        if (!fullText.includes(normalizeText(this.mjSearch))) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      this.myJobsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <p>${this.currentLang === "en" ? "No custom jobs match this search." : "Nenhuma vaga personalizada encontrada para esta busca."}</p>
        </div>
      `;
      return;
    }

    this.myJobsGrid.innerHTML = filtered.map(p => this.renderPostingCard(p)).join("");
  }

  openPostingModal(postingId) {
    const posting = this.postings.find(p => String(p.id) === String(postingId));
    if (!posting) return;

    this.modalJobTitle.textContent = posting.title;
    this.modalJobSub.textContent = `${posting.company} • ${posting.level} • ${posting.modality} • ${posting.salary || ""}`;
    this.modalJobBodyText.textContent = posting.description;

    const extracted = this.analyzer.extractSkills((posting.description || "") + " " + (posting.title || ""), { lang: this.currentLang });

    const mandatoryList = extracted.filter(s => !s.isDifferential);
    const differentialList = extracted.filter(s => s.isDifferential);

    const mandLabel = TRANSLATIONS[this.currentLang].mandatoryLabel;
    const diffLabel = TRANSLATIONS[this.currentLang].differentialLabel;

    let skillsHtml = `
      <div style="margin-bottom: 0.85rem;">
        <div style="font-size: 0.78rem; font-weight: 700; color: #a5f3fc; text-transform: uppercase; margin-bottom: 0.35rem;">
          ${mandLabel} (${mandatoryList.length})
        </div>
        <div class="posting-skills-preview">
          ${mandatoryList.map(s => {
            const userStatus = this.userSkills[s.id] || "gap";
            let statusIcon = "🔴";
            if (userStatus === "mastered") statusIcon = "🟢";
            if (userStatus === "learning") statusIcon = "🟡";
            return `
              <div style="margin-bottom: 0.3rem;">
                <span class="skill-badge-mandatory">${statusIcon} ${escapeHtml(s.name)}</span>
                ${s.evidenceSnippet ? `<div class="evidence-box">"${escapeHtml(s.evidenceSnippet)}"</div>` : ''}
              </div>
            `;
          }).join("") || `<span style="font-size: 0.78rem; color: var(--text-dim);">-</span>`}
        </div>
      </div>

      <div>
        <div style="font-size: 0.78rem; font-weight: 700; color: #ddd6fe; text-transform: uppercase; margin-bottom: 0.35rem;">
          ${diffLabel} (${differentialList.length})
        </div>
        <div class="posting-skills-preview">
          ${differentialList.map(s => {
            const userStatus = this.userSkills[s.id] || "gap";
            let statusIcon = "🔴";
            if (userStatus === "mastered") statusIcon = "🟢";
            if (userStatus === "learning") statusIcon = "🟡";
            return `
              <div style="margin-bottom: 0.3rem;">
                <span class="skill-badge-differential">${statusIcon} ${escapeHtml(s.name)}</span>
                ${s.evidenceSnippet ? `<div class="evidence-box">"${escapeHtml(s.evidenceSnippet)}"</div>` : ''}
              </div>
            `;
          }).join("") || `<span style="font-size: 0.78rem; color: var(--text-dim);">-</span>`}
        </div>
      </div>
    `;

    if (!this.isBenchmarkPosting(posting)) {
      skillsHtml += `
        <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: flex-end;">
          <button class="btn-modal-delete" onclick="app.confirmDeletePosting('${escapeHtml(String(posting.id))}')">
            <span>🗑️</span> ${this.currentLang === 'en' ? 'Delete this custom posting' : 'Excluir esta vaga personalizada'}
          </button>
        </div>
      `;
    }

    this.modalSkillsList.innerHTML = skillsHtml;
    this.modalOverlay.classList.add("active");
  }

  closeModal() {
    this.modalOverlay.classList.remove("active");
  }

  confirmDeletePosting(postingId) {
    const posting = this.postings.find(p => String(p.id) === String(postingId));
    if (!posting) return;

    // Strict security guarantee: Benchmark postings can NEVER be deleted
    if (this.isBenchmarkPosting(posting)) {
      const msg = this.currentLang === "en" 
        ? TRANSLATIONS.en.cannotDeleteBenchmark 
        : TRANSLATIONS.pt.cannotDeleteBenchmark;
      this.showToast(msg, "warning");
      return;
    }

    const t = TRANSLATIONS[this.currentLang];
    const confirmMsg = t.confirmDeletePrompt
      .replace("{title}", posting.title)
      .replace("{company}", posting.company);

    if (window.confirm(confirmMsg)) {
      this.postings = this.postings.filter(p => String(p.id) !== String(postingId));
      this.savePostings();
      this.refreshAll();

      // If modal was open, close it
      if (this.modalOverlay && this.modalOverlay.classList.contains("active")) {
        this.closeModal();
      }

      this.showToast(t.toastDeleted, "success");
    }
  }

  renderSkillsMatrix() {
    if (!this.skillsMatrixContainer) return;

    const isEn = this.currentLang === "en";
    const t = TRANSLATIONS[this.currentLang];
    const freqMap = new Map(this.analysis.skillFrequencies.map(f => [f.skill.id, f]));
    const allSkills = this.analyzer.taxonomy;

    // Filter by Category
    let skillsList = allSkills;
    if (this.matrixCategoryFilter !== "all") {
      skillsList = skillsList.filter(s => s.category === this.matrixCategoryFilter);
    }

    // Filter by Origin (Official Benchmark vs User Custom)
    if (this.matrixOriginFilter === "official") {
      skillsList = skillsList.filter(s => s.origin === "official" && !s.isCustom);
    } else if (this.matrixOriginFilter === "custom") {
      skillsList = skillsList.filter(s => s.origin === "custom" || s.isCustom);
    }

    // Update origin count chips
    const officialCount = allSkills.filter(s => s.origin === "official" && !s.isCustom).length;
    const customCount = allSkills.filter(s => s.origin === "custom" || s.isCustom).length;
    if (this.cntMatrixAll) this.cntMatrixAll.textContent = allSkills.length;
    if (this.cntMatrixOfficial) this.cntMatrixOfficial.textContent = officialCount;
    if (this.cntMatrixCustom) this.cntMatrixCustom.textContent = customCount;

    if (skillsList.length === 0) {
      this.skillsMatrixContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <p>${isEn ? "No skills found for this filter." : "Nenhuma habilidade encontrada para este filtro."}</p>
        </div>
      `;
      return;
    }

    this.skillsMatrixContainer.innerHTML = skillsList.map(skill => {
      const status = this.userSkills[skill.id] || "gap";
      const freqItem = freqMap.get(skill.id);
      const percentage = freqItem ? freqItem.percentage : 0;
      const count = freqItem ? freqItem.count : 0;

      const skillName = isEn ? skill.nameEn : skill.namePt;
      const catLabel = isEn ? skill.categoryLabelEn : skill.categoryLabelPt;
      const skillDesc = isEn ? skill.descEn : skill.descPt;
      const isCustom = skill.origin === "custom" || skill.isCustom;
      const officialSource = skill.officialSource || "Padrão Oficial (Indústria)";

      const provenanceBadge = isCustom 
        ? `<span class="badge-origin-custom" title="Habilidade personalizada adicionada pelo usuário">👤 ${t.badgeCustom}</span>`
        : `<span class="badge-origin-official" title="${escapeHtml(officialSource)}">🏛️ ${t.badgeOfficial}</span>`;

      const deleteBtn = isCustom
        ? `<button class="btn-delete-custom-skill" onclick="event.stopPropagation(); app.confirmDeleteCustomSkill('${skill.id}')" title="${isEn ? 'Delete this custom skill' : 'Excluir esta habilidade personalizada'}">
             <span>🗑️</span> ${isEn ? 'Delete' : 'Excluir'}
           </button>`
        : '';

      return `
        <div class="skill-card status-${status}" id="skillCard-${skill.id}">
          <div>
            <div class="skill-provenance-bar">
              ${provenanceBadge}
              ${deleteBtn}
            </div>

            <div class="skill-card-top">
              <div>
                <h4 class="skill-name">${escapeHtml(skillName)}</h4>
                <div class="skill-category">${escapeHtml(catLabel)}</div>
              </div>
              <div class="skill-market-freq" title="Present in ${count}/${this.getActivePostings().length} jobs">
                ${percentage}% <span style="font-size: 0.68rem; font-weight: normal;">${isEn ? "demand" : "demanda"}</span>
              </div>
            </div>
            
            <p class="skill-desc" style="margin-top: 0.6rem;">${escapeHtml(skillDesc)}</p>
          </div>

          <div>
            <div class="skill-status-controls">
              <button class="status-btn ${status === 'mastered' ? 'active mastered' : ''}" 
                onclick="app.updateSkillStatus('${skill.id}', 'mastered')">
                🟢 ${t.domino}
              </button>
              <button class="status-btn ${status === 'learning' ? 'active learning' : ''}" 
                onclick="app.updateSkillStatus('${skill.id}', 'learning')">
                🟡 ${t.estudando}
              </button>
              <button class="status-btn ${status === 'gap' ? 'active gap' : ''}" 
                onclick="app.updateSkillStatus('${skill.id}', 'gap')">
                🔴 ${t.gap}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  updateSkillStatus(skillId, newStatus) {
    this.userSkills[skillId] = newStatus;
    this.saveUserSkills();

    this.gapAnalysis = this.analyzer.computeSkillGap(this.analysis.skillFrequencies, this.userSkills);

    this.renderStats();
    this.renderChart();
    this.renderSkillsMatrix();
    this.renderGapAnalysis();

    const skillObj = this.analyzer.skillMap.get(skillId);
    const skillName = skillObj ? (this.currentLang === "en" ? skillObj.nameEn.split(" ")[0] : skillObj.namePt.split(" ")[0]) : skillId;
    this.showToast(`${skillName}: ${newStatus.toUpperCase()} (${this.gapAnalysis.matchScore}%)`, "info");
  }

  renderGapAnalysis() {
    const score = this.gapAnalysis.matchScore;
    
    if (this.scoreCenterText) {
      this.scoreCenterText.textContent = `${score}%`;
    }

    if (this.scoreCircleValue) {
      const circumference = 2 * Math.PI * 64;
      const offset = circumference - (score / 100) * circumference;
      this.scoreCircleValue.style.strokeDashoffset = offset;

      if (score >= 70) {
        this.scoreCircleValue.style.stroke = "var(--status-mastered)";
      } else if (score >= 45) {
        this.scoreCircleValue.style.stroke = "var(--accent-indigo)";
      } else {
        this.scoreCircleValue.style.stroke = "var(--status-learning)";
      }
    }

    // Critical Gaps
    if (this.criticalGapsList) {
      if (this.gapAnalysis.criticalGaps.length === 0) {
        this.criticalGapsList.innerHTML = `
          <div style="font-size: 0.82rem; color: var(--status-mastered); padding: 0.5rem;">
            🎉 ${this.currentLang === "en" ? "No critical gaps! All high-demand technologies are covered." : "Incrível! Nenhum gap crítico pendente entre as habilidades mais exigidas."}
          </div>
        `;
      } else {
        this.criticalGapsList.innerHTML = this.gapAnalysis.criticalGaps.map(item => {
          const name = this.currentLang === "en" ? item.skill.nameEn.split(" (")[0] : item.skill.namePt.split(" (")[0];
          return `
            <div class="gap-item">
              <span class="gap-item-title">${name}</span>
              <span class="gap-item-badge text-amber">${item.percentage}% ${this.currentLang === "en" ? "jobs" : "vagas"}</span>
            </div>
          `;
        }).join("");
      }
    }

    // Quick Wins
    if (this.quickWinsList) {
      if (this.gapAnalysis.quickWins.length === 0) {
        this.quickWinsList.innerHTML = `
          <div style="font-size: 0.82rem; color: var(--text-dim); padding: 0.5rem;">
            ${this.currentLang === "en" ? "No skills marked as learning." : "Nenhuma skill marcada como 'Estudando'."}
          </div>
        `;
      } else {
        this.quickWinsList.innerHTML = this.gapAnalysis.quickWins.map(item => {
          const name = this.currentLang === "en" ? item.skill.nameEn.split(" (")[0] : item.skill.namePt.split(" (")[0];
          return `
            <div class="gap-item">
              <span class="gap-item-title">${name}</span>
              <span class="gap-item-badge text-cyan">${item.percentage}% ${this.currentLang === "en" ? "demand" : "demanda"}</span>
            </div>
          `;
        }).join("");
      }
    }

    // Mastered Strengths
    if (this.masteredStrengthsList) {
      this.masteredStrengthsList.innerHTML = this.gapAnalysis.keyStrengths.map(item => {
        const name = this.currentLang === "en" ? item.skill.nameEn.split(" (")[0] : item.skill.namePt.split(" (")[0];
        return `
          <div class="gap-item">
            <span class="gap-item-title">${name}</span>
            <span class="gap-item-badge text-emerald">✓ ${item.percentage}%</span>
          </div>
        `;
      }).join("");
    }
  }

  handleAddPosting(e) {
    e.preventDefault();

    const title = document.getElementById("inputJobTitle").value.trim();
    const company = document.getElementById("inputJobCompany").value.trim();
    const category = document.getElementById("selectJobCategory").value;
    const level = document.getElementById("selectJobLevel").value;
    const modality = document.getElementById("inputJobModality").value.trim();
    const salary = document.getElementById("inputJobSalary").value.trim() || (this.currentLang === "en" ? "Competitive" : "A combinar");
    const description = document.getElementById("textareaJobDescription").value.trim();

    if (!title || !company || !description) {
      this.showToast(TRANSLATIONS[this.currentLang].toastFillRequired, "warning");
      return;
    }

    const uniqueSuffix = Math.random().toString(36).slice(2, 8);
    const newPosting = {
      id: `usr_${Date.now()}_${uniqueSuffix}`,
      title,
      company,
      category,
      level,
      modality,
      salary,
      postedDate: this.currentLang === "en" ? "Today" : "Hoje",
      description,
      isBenchmark: false
    };

    this.postings.unshift(newPosting);
    const saved = this.savePostings();
    if (saved) {
      this.formAddPosting.reset();
      this.refreshAll();
      this.showToast(TRANSLATIONS[this.currentLang].toastAdded, "success");
      this.switchTab("tab-myjobs");
    }
  }

  exportUserPostings() {
    const userPostings = this.postings.filter(p => !this.isBenchmarkPosting(p));
    const isEn = this.currentLang === "en";

    if (userPostings.length === 0) {
      this.showToast(
        isEn ? "No custom jobs to export yet." : "Nenhuma vaga personalizada para exportar ainda.",
        "warning"
      );
      return;
    }

    const exportPayload = {
      app: "SkillPulse AI",
      version: "2.1",
      exportedAt: new Date().toISOString(),
      count: userPostings.length,
      postings: userPostings
    };

    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = `SkillPulse_Minhas_Vagas_${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    this.showToast(TRANSLATIONS[this.currentLang].toastExportSuccess, "success");
  }

  importUserPostings(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        const incomingPostings = Array.isArray(parsed) 
          ? parsed 
          : (Array.isArray(parsed.postings) ? parsed.postings : null);

        if (!incomingPostings || incomingPostings.length === 0) {
          this.showToast(TRANSLATIONS[this.currentLang].toastImportEmpty, "warning");
          return;
        }

        let addedCount = 0;
        const existingIds = new Set(this.postings.map(p => String(p.id)));

        incomingPostings.forEach(p => {
          if (p && p.title && p.company) {
            const rawId = p.id ? String(p.id) : `usr_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
            const safeId = existingIds.has(rawId) 
              ? `usr_${Date.now()}_${Math.random().toString(36).slice(2, 7)}` 
              : rawId;

            this.postings.unshift({
              ...p,
              id: safeId,
              isBenchmark: false
            });
            existingIds.add(safeId);
            addedCount++;
          }
        });

        if (addedCount > 0) {
          this.savePostings();
          this.refreshAll();
          const t = TRANSLATIONS[this.currentLang];
          this.showToast(`${t.toastImportSuccess} (${addedCount})`, "success");
        } else {
          this.showToast(TRANSLATIONS[this.currentLang].toastImportEmpty, "warning");
        }
      } catch (err) {
        console.error("Failed to parse imported jobs JSON:", err);
        this.showToast(TRANSLATIONS[this.currentLang].toastImportError, "warning");
      } finally {
        e.target.value = "";
      }
    };
    reader.readAsText(file);
  }

  generateFullPdfReport() {
    const isEn = this.currentLang === "en";
    const activeData = this.getActivePostings();
    const total = activeData.length;
    const benchmarkCount = activeData.filter(p => this.isBenchmarkPosting(p)).length;
    const userCount = activeData.filter(p => !this.isBenchmarkPosting(p)).length;
    const match = this.gapAnalysis.matchScore;
    const topSkills = this.analysis.skillFrequencies.slice(0, 15);
    const criticalGaps = this.gapAnalysis.criticalGaps;
    const quickWins = this.gapAnalysis.quickWins.slice(0, 6);
    const strengths = this.gapAnalysis.keyStrengths.slice(0, 6);
    const coOccur = this.analysis.coOccurrences.slice(0, 8);
    const topSkillItem = this.analysis.skillFrequencies[0];
    const topSkillName = topSkillItem ? (isEn ? topSkillItem.skill.nameEn : topSkillItem.skill.namePt) : "SQL";
    const topSkillPct = topSkillItem ? topSkillItem.percentage : 0;
    const dateStr = new Date().toLocaleDateString(isEn ? "en-US" : "pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });

    const statusBadge = (skillId) => {
      const status = this.userSkills[skillId] || "gap";
      if (status === "mastered") {
        return `<span class="pdf-badge pdf-badge-mastered">${isEn ? "✓ Mastered" : "✓ Domino"}</span>`;
      } else if (status === "learning") {
        return `<span class="pdf-badge pdf-badge-learning">${isEn ? "⏳ Learning" : "⏳ Estudando"}</span>`;
      } else {
        return `<span class="pdf-badge pdf-badge-gap">${isEn ? "✕ Gap" : "✕ Gap"}</span>`;
      }
    };

    // Calculate distributions
    const catMap = { data: 0, backend: 0, ai: 0 };
    const levelMap = { junior: 0, pleno: 0, senior: 0 };
    const modMap = { remoto: 0, hibrido: 0, presencial: 0 };
    activeData.forEach(p => {
      const cat = (p.category || "").toLowerCase();
      if (cat.includes("data") || cat.includes("dados") || cat.includes("bi")) catMap.data++;
      else if (cat.includes("back") || cat.includes("python") || cat.includes("software")) catMap.backend++;
      else catMap.ai++;

      const lvl = (p.level || "").toLowerCase();
      if (lvl.includes("estágio") || lvl.includes("intern") || lvl.includes("júnior") || lvl.includes("junior")) levelMap.junior++;
      else if (lvl.includes("pleno") || lvl.includes("mid")) levelMap.pleno++;
      else levelMap.senior++;

      const mod = (p.modality || "").toLowerCase();
      if (mod.includes("remot") || mod.includes("remote")) modMap.remoto++;
      else if (mod.includes("híbr") || mod.includes("hibr") || mod.includes("hybrid")) modMap.hibrido++;
      else modMap.presencial++;
    });

    const reportEl = document.getElementById("fullPdfReport");
    if (!reportEl) return;

    reportEl.innerHTML = `
      <!-- Cover & Document Header -->
      <div class="pdf-header">
        <div class="pdf-brand">
          <img src="assets/logo.jpg" alt="SkillPulse AI Logo" class="pdf-logo">
          <div class="pdf-title">
            <h1>SkillPulse AI</h1>
            <p>${isEn 
              ? "Comprehensive Executive Report • Tech Requirements Intelligence & Strategic Skill Gaps (2026)" 
              : "Relatório Executivo Integrado • Inteligência de Requisitos Tech & Gap Estratégico de Competências (2026)"}</p>
          </div>
        </div>
        <div class="pdf-meta">
          <div><strong>${isEn ? "Generation Date" : "Data de Emissão"}:</strong> ${dateStr}</div>
          <div><strong>${isEn ? "Candidate Target" : "Perfil / Alvo"}:</strong> Matheus Henrique (Tech Career Transition)</div>
          <div><strong>${isEn ? "Active Scope" : "Escopo da Amostra"}:</strong> ${
            this.sourceFilter === "benchmark" ? (isEn ? "Benchmark 50 Only" : "Apenas Benchmark (50)") :
            this.sourceFilter === "user" ? (isEn ? "User Added Only" : "Apenas Minhas Vagas") :
            (isEn ? `All Postings (${total} jobs)` : `Todas as Vagas (${total} vagas)`)
          }</div>
        </div>
      </div>

      <!-- Executive KPIs -->
      <div class="pdf-kpi-grid">
        <div class="pdf-kpi-card">
          <div class="pdf-kpi-label">${isEn ? "Analyzed Postings" : "Amostra Analisada"}</div>
          <div class="pdf-kpi-val">${total}</div>
          <div class="pdf-kpi-sub">${isEn ? `${benchmarkCount} benchmark + ${userCount} custom` : `${benchmarkCount} benchmark + ${userCount} adicionadas`}</div>
        </div>
        <div class="pdf-kpi-card">
          <div class="pdf-kpi-label">${isEn ? "Candidate Match Score" : "Aderência Geral ao Mercado"}</div>
          <div class="pdf-kpi-val" style="color: #00ff88 !important;">${match}%</div>
          <div class="pdf-kpi-sub">${isEn ? "Weighted by market demand" : "Ponderado pela demanda de vagas"}</div>
        </div>
        <div class="pdf-kpi-card">
          <div class="pdf-kpi-label">${isEn ? "Tracked Competencies" : "Competências Mapeadas"}</div>
          <div class="pdf-kpi-val">${this.analyzer.taxonomy.length}</div>
          <div class="pdf-kpi-sub">${isEn ? `${this.analysis.skillFrequencies.filter(s => s.count > 0).length} active in job sample` : `${this.analysis.skillFrequencies.filter(s => s.count > 0).length} ativas na amostra`}</div>
        </div>
        <div class="pdf-kpi-card">
          <div class="pdf-kpi-label">${isEn ? "Top Market Skill" : "Habilidade Mais Exigida"}</div>
          <div class="pdf-kpi-val">${topSkillPct}%</div>
          <div class="pdf-kpi-sub">${topSkillName}</div>
        </div>
      </div>

      <!-- Section 1: Top 15 In-Demand Skills Table -->
      <div class="pdf-section">
        <div class="pdf-section-title">
          <span>📊</span>
          <span>${isEn ? "1. Top 15 In-Demand Tech Skills (Market Frequency & Candidate Status)" : "1. Top 15 Habilidades Mais Exigidas pelo Mercado & Status do Candidato"}</span>
        </div>
        <table class="pdf-table">
          <thead>
            <tr>
              <th style="width: 6%;">#</th>
              <th style="width: 32%;">${isEn ? "Skill / Technology" : "Habilidade / Tecnologia"}</th>
              <th style="width: 24%;">${isEn ? "Category" : "Categoria"}</th>
              <th style="width: 14%; text-align: center;">${isEn ? "Market Demand" : "Demanda Mercado"}</th>
              <th style="width: 10%; text-align: center;">${isEn ? "Hits" : "Vagas"}</th>
              <th style="width: 14%; text-align: center;">${isEn ? "Candidate Status" : "Status Atual"}</th>
            </tr>
          </thead>
          <tbody>
            ${topSkills.map((item, idx) => {
              const name = isEn ? item.skill.nameEn : item.skill.namePt;
              const cat = isEn ? item.skill.categoryLabelEn : item.skill.categoryLabelPt;
              const isCustom = item.skill.origin === 'custom' || item.skill.isCustom;
              const provenanceTag = isCustom 
                ? `<span style="font-size: 0.62rem; color: #f472b6; font-weight: 700; margin-left: 4px;">[${isEn ? 'Custom' : 'Personalizada'}]</span>`
                : `<span style="font-size: 0.62rem; color: #818cf8; font-weight: 700; margin-left: 4px;">[${isEn ? 'Official' : 'Oficial'}]</span>`;
              return `
                <tr>
                  <td style="font-weight: 700;">#${idx + 1}</td>
                  <td><strong>${name}</strong> ${provenanceTag}</td>
                  <td>${cat}</td>
                  <td style="text-align: center; font-weight: 700; font-family: 'JetBrains Mono', monospace;">${item.percentage}%</td>
                  <td style="text-align: center;">${item.count}/${total}</td>
                  <td style="text-align: center;">${statusBadge(item.skill.id)}</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>

      <!-- Section 2: Strategic Gaps & Levers -->
      <div class="pdf-section">
        <div class="pdf-section-title">
          <span>🎯</span>
          <span>${isEn ? "2. Strategic Diagnosis: Gaps, Quick Wins & Core Strengths" : "2. Diagnóstico Estratégico: Gaps Críticos, Alavancas Rápidas & Pontos Fortes"}</span>
        </div>
        <div class="pdf-grid-3col">
          <div class="pdf-card" style="border-left: 3px solid #f43f5e;">
            <div class="pdf-card-header" style="color: #fb7185 !important;">
              <span>🚨</span>
              <span>${isEn ? `Critical Gaps (${criticalGaps.length})` : `Gaps Críticos (${criticalGaps.length})`}</span>
            </div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 6px;">
              ${isEn ? "Market demand ≥ 40% not yet mastered" : "Demanda ≥ 40% ainda não dominada"}
            </div>
            <ul class="pdf-list">
              ${criticalGaps.length === 0 
                ? `<li><em>${isEn ? "No critical gaps identified!" : "Nenhum gap crítico identificado!"}</em></li>`
                : criticalGaps.map(g => `
                  <li>
                    <strong>${isEn ? g.skill.nameEn : g.skill.namePt}</strong>: 
                    <span style="font-weight: 700; color: #fb7185;">${g.percentage}%</span> ${isEn ? "demand" : "das vagas"}
                  </li>
                `).join("")}
            </ul>
          </div>

          <div class="pdf-card" style="border-left: 3px solid #f59e0b;">
            <div class="pdf-card-header" style="color: #fbbf24 !important;">
              <span>⚡</span>
              <span>${isEn ? `Quick Wins / In Progress (${quickWins.length})` : `Alavancas / Estudando (${quickWins.length})`}</span>
            </div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 6px;">
              ${isEn ? "Currently studying + high immediate ROI" : "Competências em andamento com alto retorno"}
            </div>
            <ul class="pdf-list">
              ${quickWins.length === 0 
                ? `<li><em>${isEn ? "None in progress" : "Nenhuma em andamento"}</em></li>`
                : quickWins.map(w => `
                  <li>
                    <strong>${isEn ? w.skill.nameEn : w.skill.namePt}</strong>: 
                    <span style="font-weight: 700; color: #fbbf24;">${w.percentage}%</span> ${isEn ? "demand" : "das vagas"}
                  </li>
                `).join("")}
            </ul>
          </div>

          <div class="pdf-card" style="border-left: 3px solid #10b981;">
            <div class="pdf-card-header" style="color: #34d399 !important;">
              <span>💎</span>
              <span>${isEn ? `Mastered Strengths (${strengths.length})` : `Pontos Fortes (${strengths.length})`}</span>
            </div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 6px;">
              ${isEn ? "Fully mastered competencies aligned with demand" : "Competências consolidadas alinhadas à demanda"}
            </div>
            <ul class="pdf-list">
              ${strengths.length === 0 
                ? `<li><em>${isEn ? "None recorded" : "Nenhuma registrada"}</em></li>`
                : strengths.map(s => `
                  <li>
                    <strong>${isEn ? s.skill.nameEn : s.skill.namePt}</strong>: 
                    <span style="font-weight: 700; color: #34d399;">${s.percentage}%</span> ${isEn ? "demand" : "das vagas"}
                  </li>
                `).join("")}
            </ul>
          </div>
        </div>
      </div>

      <!-- Section 3: Tech Synergies & Co-occurrences -->
      <div class="pdf-section">
        <div class="pdf-section-title">
          <span>🔗</span>
          <span>${isEn ? "3. Market Tech Synergies & Co-occurrences" : "3. Sinergias & Pares Tecnológicos Mais Exigidos Juntos"}</span>
        </div>
        <div class="pdf-grid-2col">
          <div class="pdf-card">
            <div class="pdf-card-header">
              <span>🤝</span>
              <span>${isEn ? "Top Technology Pairs in Postings" : "Pares de Ferramentas Mais Frequentes"}</span>
            </div>
            <table class="pdf-table" style="font-size: 0.72rem;">
              <thead>
                <tr>
                  <th>${isEn ? "Synergy Pair" : "Par de Tecnologias"}</th>
                  <th style="text-align: center;">${isEn ? "Joint Frequency" : "Frequência Conjunta"}</th>
                  <th style="text-align: center;">${isEn ? "Co-occurrences" : "Ocorrências"}</th>
                </tr>
              </thead>
              <tbody>
                ${coOccur.slice(0, 4).map(item => `
                  <tr>
                    <td><strong>${isEn ? item.skillA.nameEn : item.skillA.namePt}</strong> + <strong>${isEn ? item.skillB.nameEn : item.skillB.namePt}</strong></td>
                    <td style="text-align: center; font-weight: 700; font-family: 'JetBrains Mono', monospace;">${item.percentage}%</td>
                    <td style="text-align: center;">${item.count} ${isEn ? "jobs" : "vagas"}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-header">
              <span>📈</span>
              <span>${isEn ? "Sample Distribution & Market Modality" : "Distribuição da Amostra & Modalidade"}</span>
            </div>
            <ul class="pdf-list" style="font-size: 0.72rem;">
              <li><strong>${isEn ? "Category Breakdown" : "Por Área"}:</strong> ${isEn ? `Data & BI (${catMap.data}), Python Backend (${catMap.backend}), AI & Automation (${catMap.ai})` : `Dados & BI (${catMap.data}), Backend Python (${catMap.backend}), IA & Automação (${catMap.ai})`}</li>
              <li><strong>${isEn ? "Seniority Level" : "Por Senioridade"}:</strong> ${isEn ? `Junior / Intern (${levelMap.junior}), Mid-level (${levelMap.pleno}), Senior / Lead (${levelMap.senior})` : `Júnior / Estágio (${levelMap.junior}), Pleno (${levelMap.pleno}), Sênior / Especialista (${levelMap.senior})`}</li>
              <li><strong>${isEn ? "Work Modality" : "Por Modalidade"}:</strong> ${isEn ? `Remote (${modMap.remoto}), Hybrid (${modMap.hibrido}), On-site (${modMap.presencial})` : `Remoto (${modMap.remoto}), Híbrido (${modMap.hibrido}), Presencial (${modMap.presencial})`}</li>
              <li><strong>${isEn ? "Key 2026 Trend" : "Tendência-Chave 2026"}:</strong> ${isEn ? "Python + SQL are demanded in 85%+ of data roles; AI toolings (APIs & LLMs) have surged 4x." : "Python + SQL são solicitados em mais de 85% das vagas; integração de APIs e IA cresceu 4x."}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Page Break to cleanly present Action Plan and Matrix on page 2 -->
      <div class="pdf-page-break"></div>

      <!-- Section 4: Tactical 30-60-90 Day Action Plan -->
      <div class="pdf-section">
        <div class="pdf-section-title">
          <span>🚀</span>
          <span>${isEn ? "4. Tactical 30-60-90 Day Action Plan (Career Transition Execution)" : "4. Plano Tático de Ação 30-60-90 Dias (Execução Estratégica)"}</span>
        </div>
        <div class="pdf-plan-grid">
          <div class="pdf-plan-card" style="border-top: 3px solid #06b6d4;">
            <div class="pdf-plan-phase">${isEn ? "Phase 1 • Days 1 to 30" : "Bloco 1 • Dias 1 a 30"}</div>
            <div class="pdf-plan-title">${isEn ? "Data Foundation & SQL Mastery" : "Fundação Prática de Dados & Código"}</div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 6px;">
              ${isEn 
                ? "Fluency in market's #1 skill (SQL 92%) and Python ETL data cleaning."
                : "Garantir fluência na skill mais exigida (SQL 92%) e scripts de limpeza em Python."}
            </div>
            <ul class="pdf-list" style="font-size: 0.7rem;">
              <li><strong>${isEn ? "SQL Practice" : "Prática Diária SQL"}:</strong> Window Functions, CTEs & JOINs (DataLemur / LeetCode).</li>
              <li><strong>Python Pandas:</strong> ${isEn ? "ETL pipelines for messy CSV/JSON datasets." : "Tratamento de dados, limpeza de nulos e exportação estruturada."}</li>
              <li><strong>GitHub Repo:</strong> ${isEn ? "Public repository documenting daily queries and scripts." : "Repositório público documentando os 30 dias de queries e scripts."}</li>
              <li><strong>${isEn ? "Immediate Applications" : "Candidaturas Imediatas"}:</strong> ${isEn ? "Local and regional entry internships / data assist." : "Disparar inscrições para estágios locais (Saúde, Logística, Setor Público)."}</li>
            </ul>
          </div>

          <div class="pdf-plan-card" style="border-top: 3px solid #818cf8;">
            <div class="pdf-plan-phase">${isEn ? "Phase 2 • Days 31 to 60" : "Bloco 2 • Dias 31 a 60"}</div>
            <div class="pdf-plan-title">${isEn ? "API Integration, Automation & BI" : "Integração de APIs, Automações & BI"}</div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 6px;">
              ${isEn 
                ? "Bridge data pipelines with backend systems, FastAPI and n8n."
                : "Conectar dados com sistemas backend e automação low-code/pro-code."}
            </div>
            <ul class="pdf-list" style="font-size: 0.7rem;">
              <li><strong>FastAPI + PostgreSQL:</strong> ${isEn ? "REST API with Pydantic validation and CRUD." : "API RESTful com rotas GET/POST, validação Pydantic e banco local."}</li>
              <li><strong>n8n + LLM APIs:</strong> ${isEn ? "Webhook automation extracting structured JSON via AI." : "Fluxo que recebe webhooks, consulta IA e armazena dados tratados."}</li>
              <li><strong>Power BI & DAX:</strong> ${isEn ? "Star Schema model consuming processed PostgreSQL data." : "Dashboard executivo em modelo estrela (Star Schema)."}</li>
              <li><strong>${isEn ? "Focus Decision" : "Decisão de Foco"}:</strong> ${isEn ? "Cert PL-300 (Data) vs Docker/FastAPI deep-dive (Backend)." : "Certificação PL-300 (Dados) ou Docker/FastAPI (Backend)."}</li>
            </ul>
          </div>

          <div class="pdf-plan-card" style="border-top: 3px solid #00ff88;">
            <div class="pdf-plan-phase">${isEn ? "Phase 3 • Days 61 to 90" : "Bloco 3 • Dias 61 a 90"}</div>
            <div class="pdf-plan-title">${isEn ? "Flagship Project & USD Remote Jobs" : "Projeto Flagship & Vagas Remotas em USD"}</div>
            <div style="font-size: 0.68rem; color: #94a3b8; margin-bottom: 6px;">
              ${isEn 
                ? "Target international remote positions capitalizing on fluent English."
                : "Posicionar perfil para vagas remotas em Dólar aproveitando Inglês C1."}
            </div>
            <ul class="pdf-list" style="font-size: 0.7rem;">
              <li><strong>Docker Compose:</strong> ${isEn ? "Isolated PostgreSQL + FastAPI containers deployed to cloud." : "PostgreSQL + FastAPI em containers isolados com deploy na nuvem."}</li>
              <li><strong>${isEn ? "Flagship Portfolio" : "Projeto Flagship"}:</strong> ${isEn ? "End-to-end pipeline in Healthcare/Logistics + 3-min video demo." : "Pipeline ponta a ponta na área de Saúde/Logística + vídeo Loom em inglês."}</li>
              <li><strong>${isEn ? "English LinkedIn" : "LinkedIn em Inglês"}:</strong> ${isEn ? "ATS-optimized headline & keywords (SQL, Python, FastAPI)." : "Perfil otimizado para ATS com keywords (SQL, Python, Power BI, FastAPI)."}</li>
              <li><strong>${isEn ? "Global Applications" : "Aplicações Globais"}:</strong> ${isEn ? "5 weekly applications on international remote boards." : "5 aplicações semanais em plataformas remotas (Toptal, Wellfound, LinkedIn US)."}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Section 5: Complete 33-Skills Matrix Audit -->
      <div class="pdf-section">
        <div class="pdf-section-title">
          <span>🧠</span>
          <span>${isEn ? "5. Complete 33-Competencies Audit & Market Demand Matrix" : "5. Auditoria Completa das 33 Competências & Matriz de Demanda de Mercado"}</span>
        </div>
        <table class="pdf-table">
          <thead>
            <tr>
              <th style="width: 32%;">${isEn ? "Skill" : "Competência"}</th>
              <th style="width: 28%;">${isEn ? "Category" : "Categoria"}</th>
              <th style="width: 15%; text-align: center;">${isEn ? "Market %" : "Demanda %"}</th>
              <th style="width: 10%; text-align: center;">${isEn ? "Hits" : "Vagas"}</th>
              <th style="width: 15%; text-align: center;">${isEn ? "My Status" : "Meu Status"}</th>
            </tr>
          </thead>
          <tbody>
            ${this.analyzer.taxonomy.map(tax => {
              const freqItem = this.analysis.skillFrequencies.find(f => f.skill.id === tax.id) || { count: 0, percentage: 0 };
              const name = isEn ? tax.nameEn : tax.namePt;
              const cat = isEn ? tax.categoryLabelEn : tax.categoryLabelPt;
              return `
                <tr>
                  <td><strong>${name}</strong></td>
                  <td>${cat}</td>
                  <td style="text-align: center; font-weight: 700; font-family: 'JetBrains Mono', monospace;">${freqItem.percentage}%</td>
                  <td style="text-align: center;">${freqItem.count}/${total}</td>
                  <td style="text-align: center;">${statusBadge(tax.id)}</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>

      <!-- Document Footer -->
      <div class="pdf-doc-footer">
        <div>
          <strong>SkillPulse AI</strong> • ${isEn ? "Tech Career Transition Intelligence Platform (2026)" : "Plataforma de Inteligência para Transição de Carreira Tech (2026)"}
        </div>
        <div>
          ${isEn 
            ? `Generated for Matheus Henrique • Page printed on ${dateStr}`
            : `Gerado para Matheus Henrique • Documento emitido em ${dateStr}`}
        </div>
      </div>
    `;

    this.showToast(TRANSLATIONS[this.currentLang].toastPdfGenerated, "info");
    
    // Give DOM a tick to paint all elements before invoking print dialog
    setTimeout(() => {
      window.print();
    }, 250);
  }

  showToast(message, type = "info") {
    if (!this.toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";

    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "warning") icon = "⚠️";

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

// Global instance initialized on DOM ready
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new SkillPulseApp();
  window.app = app;
});
