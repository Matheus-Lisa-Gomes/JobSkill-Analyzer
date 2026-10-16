/**
 * SkillPulse AI - Job Requirements & Skill Gap Analyzer Engine (v2.0)
 * Features:
 * - Bilingual taxonomy (PT / EN)
 * - Section Segmentation (auto-strips benefits, perks, boilerplate)
 * - False-positive prevention for healthcare/benefits
 * - Split English levels (Technical Reading vs Fluent/C1 Conversational)
 * - Expanded modern taxonomy: React/Next, Java/OOP, REST APIs, NoSQL, TDD/Microservices
 * - Mandatory vs. Differential classification with context snippets
 */

const SKILL_TAXONOMY = [
  // --- LINGUAGENS & FRONTEND ---
  {
    id: "sql",
    namePt: "SQL (Consultas, Joins, Window Functions)",
    nameEn: "SQL (Queries, Joins, Window Functions)",
    category: "languages",
    categoryLabelPt: "Linguagens & Core",
    categoryLabelEn: "Languages & Core",
    tier: "Crucial",
    patterns: [/\bsql\b/i, /\bstructured query language\b/i, /\bqueries sql\b/i, /\bconsultas sql\b/i, /\bwindow functions\b/i, /\bctes\b/i],
    descPt: "Linguagem universal de extração e manipulação de dados relacionais.",
    descEn: "Universal language for relational data extraction and analytics."
  },
  {
    id: "python",
    namePt: "Python 3+ (Dados & Backend)",
    nameEn: "Python 3+ (Data & Backend)",
    category: "languages",
    categoryLabelPt: "Linguagens & Core",
    categoryLabelEn: "Languages & Core",
    tier: "Crucial",
    patterns: [/\bpython\b/i, /\bpython 3\b/i, /\bscripts? python\b/i],
    descPt: "A linguagem mais versátil do mercado atual para dados, backend e integrações de IA.",
    descEn: "Most versatile modern language for data, backend, and AI integration."
  },
  {
    id: "javascript",
    namePt: "JavaScript / TypeScript",
    nameEn: "JavaScript / TypeScript",
    category: "languages",
    categoryLabelPt: "Linguagens & Core",
    categoryLabelEn: "Languages & Core",
    tier: "Alta Demanda",
    patterns: [/\bjavascript\b/i, /\bjs\b/i, /\btypescript\b/i, /\bts\b/i, /\bes6\b/i],
    descPt: "Linguagem essencial para web, full stack e automação de scripts no navegador.",
    descEn: "Essential language for modern web, fullstack and browser automation."
  },
  {
    id: "react_next",
    namePt: "ReactJS / Next.js / Vue.js",
    nameEn: "ReactJS / Next.js / Vue.js",
    category: "languages",
    categoryLabelPt: "Linguagens & Core",
    categoryLabelEn: "Languages & Core",
    tier: "Alta Demanda",
    patterns: [/\breact(?:js|\.js)?\b/i, /\bnext(?:js|\.js)?\b/i, /\bvue(?:js|\.js)?\b/i, /\bfrontend framework\b/i],
    descPt: "Ecossistema de componentes reativos e renderização full stack para web moderna.",
    descEn: "Modern reactive frontend component and server-rendered frameworks."
  },
  {
    id: "html_css",
    namePt: "HTML5 & CSS3 Semântico",
    nameEn: "Semantic HTML5 & CSS3",
    category: "languages",
    categoryLabelPt: "Linguagens & Core",
    categoryLabelEn: "Languages & Core",
    tier: "Alta Demanda",
    patterns: [/\bhtml5?\b/i, /\bcss3?\b/i, /\bfrontend básico\b/i, /\binterfaces web\b/i],
    descPt: "Estruturação semântica e estilização para páginas web e portais.",
    descEn: "Semantic markup and styling foundations for web applications."
  },

  // --- DADOS & BUSINESS INTELLIGENCE ---
  {
    id: "power_bi",
    namePt: "Microsoft Power BI",
    nameEn: "Microsoft Power BI",
    category: "data_bi",
    categoryLabelPt: "Dados & Business Intelligence",
    categoryLabelEn: "Data & Business Intelligence",
    tier: "Crucial",
    patterns: [/\bpower\s*bi\b/i, /\bpbi\b/i, /\bpowerbi\b/i, /\bdashboards no power bi\b/i],
    descPt: "Plataforma líder global em relatórios executivos, visualizações e inteligência analítica.",
    descEn: "Global market leader in business intelligence and executive reporting."
  },
  {
    id: "dax",
    namePt: "DAX & Modelagem Relacional",
    nameEn: "DAX & Relational Modeling",
    category: "data_bi",
    categoryLabelPt: "Dados & Business Intelligence",
    categoryLabelEn: "Data & Business Intelligence",
    tier: "Crucial",
    patterns: [/\bdax\b/i, /\bdata analysis expressions\b/i, /\bpower query\b/i, /\bm language\b/i, /\bcalculate\b/i],
    descPt: "Fórmulas analíticas avançadas e modelagem de tabelas de dados no Power BI.",
    descEn: "Advanced analytic calculations and data modeling within Power BI."
  },
  {
    id: "star_schema",
    namePt: "Modelagem Dimensional (Star Schema)",
    nameEn: "Dimensional Modeling (Star Schema)",
    category: "data_bi",
    categoryLabelPt: "Dados & Business Intelligence",
    categoryLabelEn: "Data & Business Intelligence",
    tier: "Alta Demanda",
    patterns: [/\bstar schema\b/i, /\besquema estrela\b/i, /\bmodelagem dimensional\b/i, /\bkimball\b/i, /\bfato[s]? e dimens[õo]es\b/i],
    descPt: "Arquitetura ideal de armazéns de dados para alta performance e clareza analítica.",
    descEn: "Core data warehousing architecture for fast analytic aggregations."
  },
  {
    id: "pandas",
    namePt: "Python Pandas & NumPy",
    nameEn: "Python Pandas & NumPy",
    category: "data_bi",
    categoryLabelPt: "Dados & Business Intelligence",
    categoryLabelEn: "Data & Business Intelligence",
    tier: "Crucial",
    patterns: [/\bpandas\b/i, /\bnumpy\b/i, /\bdataframes?\b/i, /\btratamento de dados com python\b/i],
    descPt: "Manipulação, limpeza vetorial e agregação de dados volumosos em Python.",
    descEn: "Vectorized manipulation, data wrangling and aggregation in Python."
  },
  {
    id: "excel_adv",
    namePt: "Excel Avançado (Planilhas & Fórmulas)",
    nameEn: "Advanced Excel (Formulas & Pivot Tables)",
    category: "data_bi",
    categoryLabelPt: "Dados & Business Intelligence",
    categoryLabelEn: "Data & Business Intelligence",
    tier: "Alta Demanda",
    patterns: [/\bexcel\b/i, /\bplanilhas\b/i, /\bprocv\b/i, /\bxlookup\b/i, /\btabelas? din[âa]micas?\b/i, /\bspreadsheets\b/i],
    descPt: "Validação, prototipação rápida e alinhamento com áreas de negócio.",
    descEn: "Quick data validation, modeling, and communication with business stakeholders."
  },
  {
    id: "dbt",
    namePt: "dbt (Data Build Tool)",
    nameEn: "dbt (Data Build Tool)",
    category: "data_bi",
    categoryLabelPt: "Dados & Business Intelligence",
    categoryLabelEn: "Data & Business Intelligence",
    tier: "Diferencial",
    patterns: [/\bdbt\b/i, /\bdata build tool\b/i],
    descPt: "Padrão de engenharia analítica moderna para transformações com controle de versão.",
    descEn: "Industry standard for version-controlled data warehouse transformations."
  },
  {
    id: "storytelling",
    namePt: "Data Storytelling & Tradução de Métricas",
    nameEn: "Data Storytelling & Metrics Communication",
    category: "data_bi",
    categoryLabelPt: "Dados & Business Intelligence",
    categoryLabelEn: "Data & Business Intelligence",
    tier: "Alta Demanda",
    patterns: [/\bstorytelling\b/i, /\bapresenta[çc][ãa]o de dados\b/i, /\btradu[çc][ãa]o de indicadores\b/i, /\binsights acion[áa]veis\b/i, /\bactionable insights\b/i],
    descPt: "Capacidade de converter números complexos em decisões executivas claras.",
    descEn: "Translating complex datasets into clear, actionable executive decisions."
  },

  // --- BACKEND & ARQUITETURA ---
  {
    id: "fastapi",
    namePt: "FastAPI Framework",
    nameEn: "FastAPI Framework",
    category: "backend_apis",
    categoryLabelPt: "Backend & Arquitetura",
    categoryLabelEn: "Backend & Architecture",
    tier: "Crucial",
    patterns: [/\bfastapi\b/i, /\basyncio python\b/i],
    descPt: "Framework Python moderno, assíncrono e veloz para APIs e microsserviços.",
    descEn: "Modern, high-performance async Python framework for REST APIs."
  },
  {
    id: "rest_apis",
    namePt: "APIs RESTful & Web Services",
    nameEn: "RESTful APIs & Web Services",
    category: "backend_apis",
    categoryLabelPt: "Backend & Arquitetura",
    categoryLabelEn: "Backend & Architecture",
    tier: "Crucial",
    patterns: [/\bapi[s]?\b/i, /\brest\b/i, /\brestful\b/i, /\bweb services?\b/i, /\bendpoints?\b/i, /\bhttp requests?\b/i],
    descPt: "Padrão universal de comunicação entre cliente e servidor via HTTP/JSON.",
    descEn: "Universal standard for stateless client-server HTTP communications."
  },
  {
    id: "flask_django",
    namePt: "Flask / Django Framework",
    nameEn: "Flask / Django Framework",
    category: "backend_apis",
    categoryLabelPt: "Backend & Arquitetura",
    categoryLabelEn: "Backend & Architecture",
    tier: "Alta Demanda",
    patterns: [/\bflask\b/i, /\bdjango\b/i, /\bdjango rest framework\b/i, /\bdrf\b/i],
    descPt: "Frameworks web consolidados em Python para aplicações corporativas.",
    descEn: "Established Python frameworks for scalable web and enterprise services."
  },
  {
    id: "java_poo",
    namePt: "Java / C# & Programação Orientada a Objetos",
    nameEn: "Java / C# & Object-Oriented Programming (OOP)",
    category: "backend_apis",
    categoryLabelPt: "Backend & Arquitetura",
    categoryLabelEn: "Backend & Architecture",
    tier: "Alta Demanda",
    patterns: [/\bjava\b(?!script)/i, /\bpoo\b/i, /\boop\b/i, /\bprogramação orientada a objetos\b/i, /\bobject[- ]oriented\b/i, /\bc#\b/i, /\b\.net\b/i],
    descPt: "Pilares do desenvolvimento corporativo robusto e arquiteturas orientadas a objetos.",
    descEn: "Cornerstones of enterprise software engineering and structured OOP design."
  },
  {
    id: "pydantic",
    namePt: "Pydantic & Type Hints",
    nameEn: "Pydantic & Type Hints",
    category: "backend_apis",
    categoryLabelPt: "Backend & Arquitetura",
    categoryLabelEn: "Backend & Architecture",
    tier: "Crucial",
    patterns: [/\bpydantic\b/i, /\btype hints?\b/i, /\bvalida[çc][ãa]o de schemas?\b/i, /\bschema validation\b/i],
    descPt: "Validação estrita de dados e tipagem estática que previne falhas de contrato.",
    descEn: "Strict data validation and typing preventing runtime errors and powering structured LLMs."
  },
  {
    id: "webhooks_integrations",
    namePt: "Integrações, Webhooks & Mensageria",
    nameEn: "Integrations, Webhooks & Messaging",
    category: "backend_apis",
    categoryLabelPt: "Backend & Arquitetura",
    categoryLabelEn: "Backend & Architecture",
    tier: "Crucial",
    patterns: [/\bwebhooks?\b/i, /\bintegra[çc][ãa]o de sistemas\b/i, /\bapis de terceiros\b/i, /\brabbitmq\b/i, /\bkafka\b/i, /\bcelery\b/i],
    descPt: "Comunicação entre serviços heterogêneos orientada a eventos assíncronos.",
    descEn: "Event-driven asynchronous communications and message broker queues."
  },
  {
    id: "tdd_clean_code",
    namePt: "Qualidade de Código, TDD & Microsserviços",
    nameEn: "Code Quality, TDD & Microservices",
    category: "backend_apis",
    categoryLabelPt: "Backend & Arquitetura",
    categoryLabelEn: "Backend & Architecture",
    tier: "Alta Demanda",
    patterns: [/\btdd\b/i, /\btest[- ]driven\b/i, /\bclean code\b/i, /\bdesign patterns?\b/i, /\bmicrosservi[çc]os\b/i, /\bmicroservices\b/i, /\bcode review\b/i],
    descPt: "Padrões de design, microsserviços desacoplados e desenvolvimento guiado por testes.",
    descEn: "Clean architecture, decoupled microservices, and test-driven development."
  },
  {
    id: "pytest",
    namePt: "Testes Automatizados (Pytest / Unit Tests)",
    nameEn: "Automated Testing (Pytest / Unit Tests)",
    category: "backend_apis",
    categoryLabelPt: "Backend & Arquitetura",
    categoryLabelEn: "Backend & Architecture",
    tier: "Alta Demanda",
    patterns: [/\bpytest\b/i, /\btestes? unit[áa]rios?\b/i, /\btestes? automatizados?\b/i, /\bunit tests?\b/i, /\btestes? de integra[çc][ãa]o\b/i],
    descPt: "Garantia de qualidade e regressão zero no desenvolvimento de software.",
    descEn: "Automated quality assurance preventing regressions in production systems."
  },

  // --- BANCOS DE DADOS ---
  {
    id: "postgresql",
    namePt: "PostgreSQL",
    nameEn: "PostgreSQL",
    category: "databases",
    categoryLabelPt: "Bancos de Dados",
    categoryLabelEn: "Databases",
    tier: "Crucial",
    patterns: [/\bpostgresql\b/i, /\bpostgres\b/i, /\bpgvector\b/i],
    descPt: "O banco relacional open-source mais robusto, confiável e adotado do planeta.",
    descEn: "The most powerful open-source relational database in production globally."
  },
  {
    id: "sql_server_mysql",
    namePt: "MySQL / SQL Server / SQLite",
    nameEn: "MySQL / SQL Server / SQLite",
    category: "databases",
    categoryLabelPt: "Bancos de Dados",
    categoryLabelEn: "Databases",
    tier: "Alta Demanda",
    patterns: [/\bmysql\b/i, /\bsql server\b/i, /\bsqlite\b/i, /\boracle\b/i],
    descPt: "Ecossistemas relacionais amplamente presentes em corporações e hospitais.",
    descEn: "Standard relational engines prevalent across enterprises, healthcare, and finance."
  },
  {
    id: "nosql",
    namePt: "Bancos NoSQL (MongoDB, Redis, DynamoDB)",
    nameEn: "NoSQL Databases (MongoDB, Redis, DynamoDB)",
    category: "databases",
    categoryLabelPt: "Bancos de Dados",
    categoryLabelEn: "Databases",
    tier: "Alta Demanda",
    patterns: [/\bnosql\b/i, /\bmongodb\b/i, /\bmongo\b/i, /\bredis\b/i, /\bdynamodb\b/i, /\bcassandra\b/i],
    descPt: "Armazenamento flexível de documentos, chave-valor e cache de alta performance.",
    descEn: "High-performance key-value caching and flexible schema document stores."
  },
  {
    id: "cloud_dw",
    namePt: "BigQuery / Snowflake / Redshift",
    nameEn: "BigQuery / Snowflake / Redshift",
    category: "databases",
    categoryLabelPt: "Bancos de Dados",
    categoryLabelEn: "Databases",
    tier: "Alta Demanda",
    patterns: [/\bbigquery\b/i, /\bsnowflake\b/i, /\bredshift\b/i, /\bdatabricks\b/i, /\bdata warehouse\b/i, /\bdw\b/i],
    descPt: "Bancos analíticos colunares na nuvem para processar grandes volumes de dados.",
    descEn: "Cloud-native columnar analytical data warehouses for massive data volumes."
  },

  // --- CLOUD, INFRAESTRUTURA & DEVOPS ---
  {
    id: "git",
    namePt: "Git & GitHub (Versionamento)",
    nameEn: "Git & GitHub (Version Control)",
    category: "cloud_devops",
    categoryLabelPt: "Cloud & DevOps",
    categoryLabelEn: "Cloud & DevOps",
    tier: "Crucial",
    patterns: [/\bgit\b/i, /\bgithub\b/i, /\bgitlab\b/i, /\bpull requests?\b/i, /\bbranches\b/i, /\bversionamento\b/i],
    descPt: "Controle de versão obrigatório para equipes de desenvolvimento e engenharia.",
    descEn: "Mandatory version control and collaborative workflow standard."
  },
  {
    id: "docker",
    namePt: "Docker & Docker Compose",
    nameEn: "Docker & Docker Compose",
    category: "cloud_devops",
    categoryLabelPt: "Cloud & DevOps",
    categoryLabelEn: "Cloud & DevOps",
    tier: "Crucial",
    patterns: [/\bdocker\b/i, /\bdocker-compose\b/i, /\bdockerfile\b/i, /\bcont[eê]iner[es]*\b/i, /\bcontainerization\b/i],
    descPt: "Padronização de ambientes de desenvolvimento, bancos locais e deploys portáteis.",
    descEn: "Containerization standardizing environments, local databases, and deployments."
  },
  {
    id: "aws",
    namePt: "Amazon Web Services (AWS / GCP)",
    nameEn: "Amazon Web Services (AWS / GCP)",
    category: "cloud_devops",
    categoryLabelPt: "Cloud & DevOps",
    categoryLabelEn: "Cloud & DevOps",
    tier: "Alta Demanda",
    patterns: [/\baws\b/i, /\bamazon web services\b/i, /\bs3\b/i, /\blambda\b/i, /\bec2\b/i, /\bgcp\b/i, /\bgoogle cloud\b/i],
    descPt: "A maior nuvem pública do mundo, fundamental para contratações em USD.",
    descEn: "Leading global cloud provider critical for international remote roles."
  },
  {
    id: "azure",
    namePt: "Microsoft Azure",
    nameEn: "Microsoft Azure",
    category: "cloud_devops",
    categoryLabelPt: "Cloud & DevOps",
    categoryLabelEn: "Cloud & DevOps",
    tier: "Alta Demanda",
    patterns: [/\bazure\b/i, /\bmicrosoft cloud\b/i, /\baz-900\b/i, /\baz-204\b/i],
    descPt: "Nuvem favorita de hospitais, instituições financeiras e órgãos públicos.",
    descEn: "Primary cloud infrastructure for major healthcare and enterprise institutions."
  },
  {
    id: "ci_cd",
    namePt: "CI/CD & GitHub Actions",
    nameEn: "CI/CD & GitHub Actions",
    category: "cloud_devops",
    categoryLabelPt: "Cloud & DevOps",
    categoryLabelEn: "Cloud & DevOps",
    tier: "Alta Demanda",
    patterns: [/\bci\/cd\b/i, /\bcontinuous integration\b/i, /\bgithub actions\b/i, /\besteiras? de deploy\b/i],
    descPt: "Automação de testes, validações e entregas contínuas de código em produção.",
    descEn: "Automated pipelines ensuring continuous testing and production releases."
  },

  // --- IA APLICADA & AUTOMAÇÃO ---
  {
    id: "n8n",
    namePt: "n8n (Orquestração de Automação)",
    nameEn: "n8n (Workflow Automation)",
    category: "ai_automation",
    categoryLabelPt: "IA Aplicada & Automação",
    categoryLabelEn: "Applied AI & Automation",
    tier: "Diferencial",
    patterns: [/\bn8n\b/i, /\bautoma[çc][ãa]o de fluxos\b/i, /\bworkflow automation\b/i, /\bno-code\b/i, /\blow-code\b/i],
    descPt: "Plataforma open-source para conectar webhooks, APIs e IAs sem retrabalho.",
    descEn: "Open-source automation platform orchestrating webhooks, APIs, and AI models."
  },
  {
    id: "llm_apis",
    namePt: "APIs de IA Generativa (OpenAI, Claude, Gemini)",
    nameEn: "Generative AI APIs (OpenAI, Claude, Gemini)",
    category: "ai_automation",
    categoryLabelPt: "IA Aplicada & Automação",
    categoryLabelEn: "Applied AI & Automation",
    tier: "Crucial",
    patterns: [/\bopenai\b/i, /\bclaude\b/i, /\bgemini\b/i, /\bllm[s]?\b/i, /\bmodelos? de linguagem\b/i, /\bia generativa\b/i],
    descPt: "Integração programática de inteligência artificial via endpoints oficiais para dados em lote.",
    descEn: "Programmatic consumption of LLM endpoints for batch processing and workflow augmentation."
  },
  {
    id: "structured_outputs",
    namePt: "Structured Outputs (JSON Rígido com IA)",
    nameEn: "Structured Outputs (Strict JSON Schemas)",
    category: "ai_automation",
    categoryLabelPt: "IA Aplicada & Automação",
    categoryLabelEn: "Applied AI & Automation",
    tier: "Crucial",
    patterns: [/\bstructured outputs?\b/i, /\bsa[íi]das? estruturadas?\b/i, /\bjson schema\b/i, /\bextra[çc][ãa]o de entidades\b/i],
    descPt: "Garantia de respostas de IA em formato JSON estrito para gravação direta em SQL.",
    descEn: "Enforcing deterministic JSON responses from LLMs for relational database persistence."
  },
  {
    id: "prompt_eng",
    namePt: "Engenharia de Prompt & Spec-First",
    nameEn: "Prompt Engineering & Spec-First",
    category: "ai_automation",
    categoryLabelPt: "IA Aplicada & Automação",
    categoryLabelEn: "Applied AI & Automation",
    tier: "Alta Demanda",
    patterns: [/\bprompt engineering\b/i, /\bengenharia de prompt\b/i, /\bfew-shot\b/i, /\bspec-first\b/i],
    descPt: "Instrução técnica precisa para agentes de IA produzirem código e dados sem alucinação.",
    descEn: "Deterministic instruction engineering guiding AI agents to accurate execution."
  },
  {
    id: "rag_langchain",
    namePt: "RAG & LangChain / LlamaIndex",
    nameEn: "RAG & LangChain / LlamaIndex",
    category: "ai_automation",
    categoryLabelPt: "IA Aplicada & Automação",
    categoryLabelEn: "Applied AI & Automation",
    tier: "Diferencial",
    patterns: [/\brag\b/i, /\blangchain\b/i, /\bllamaindex\b/i, /\bbancos? vetoria[l|is]\b/i, /\bretrieval augmented generation\b/i],
    descPt: "Construção de sistemas de busca semântica em documentos próprios com IA generativa.",
    descEn: "Semantic search and retrieval architectures augmented with custom organizational data."
  },

  // --- IDIOMAS, FORMAÇÃO & DOMÍNIO REAL ---
  {
    id: "english_tech",
    namePt: "Inglês Técnico (Leitura & Documentação)",
    nameEn: "Technical English (Reading & Documentation)",
    category: "education_diff",
    categoryLabelPt: "Soft Skills & Idiomas",
    categoryLabelEn: "Soft Skills & Languages",
    tier: "Alta Demanda",
    patterns: [
      /\bingl[êe]s t[ée]cnico\b/i, 
      /\bleitura de documenta[çc][ãa]o\b/i, 
      /\btechnical english\b/i, 
      /\breading documentation\b/i, 
      /\bwritten english\b/i, 
      /\bingl[êe]s instrumental\b/i, 
      /\bingl[êe]s b[áa]sico para leitura\b/i,
      /\bingl[êe]s intermedi[áa]rio\b/i
    ],
    descPt: "Habilidade de ler especificações, documentação técnica oficial e mensagens de erro.",
    descEn: "Ability to comprehend API docs, technical whitepapers, and error traces in English."
  },
  {
    id: "english_fluent",
    namePt: "Inglês Fluente / C1 (Conversação & Vagas USD)",
    nameEn: "Fluent English / C1 (Conversational & USD Roles)",
    category: "education_diff",
    categoryLabelPt: "Soft Skills & Idiomas",
    categoryLabelEn: "Soft Skills & Languages",
    tier: "Diferencial",
    patterns: [
      /\bc1\b/i, 
      /\bc2\b/i, 
      /\bfluent english\b/i, 
      /\bingl[êe]s fluente\b/i, 
      /\bfluent in english\b/i, 
      /\bconversational english\b/i, 
      /\bconversação em ingl[êe]s\b/i, 
      /\badvanced english\b/i, 
      /\bingl[êe]s avan[çc]ado\b/i, 
      /\bremote usd\b/i,
      /\benglish \(?c1/i
    ],
    descPt: "Fluência em conversação que abre vagas internacionais em Dólar (US$ 3.000 a 5.000/mês).",
    descEn: "Verbal fluency unlocking international USD employment ($3,000 to $5,000+/mo)."
  },
  {
    id: "cs_degree",
    namePt: "Graduação em Computação / Ciência de Dados",
    nameEn: "Degree in Computer Science / IT",
    category: "education_diff",
    categoryLabelPt: "Soft Skills & Idiomas",
    categoryLabelEn: "Soft Skills & Languages",
    tier: "Alta Demanda",
    patterns: [/\bci[êe]ncia da computa[çc][ãa]o\b/i, /\bsistemas de informa[çc][ãa]o\b/i, /\bengenharia de software\b/i, /\bcomputa[çc][ãa]o\b/i, /\bgradua[çc][ãa]o\b/i, /\bensino superior\b/i, /\bcomputer science\b/i],
    descPt: "Alavanca para programas de estágio corporativo oficial (Lei nº 11.788) e triagens ATS.",
    descEn: "Academic credential qualifying for official corporate internships and ATS filters."
  },
  {
    id: "agile_scrum",
    namePt: "Metodologias Ágeis (Scrum / Kanban)",
    nameEn: "Agile Methodologies (Scrum / Kanban)",
    category: "education_diff",
    categoryLabelPt: "Soft Skills & Idiomas",
    categoryLabelEn: "Soft Skills & Languages",
    tier: "Alta Demanda",
    patterns: [/\bscrum\b/i, /\bkanban\b/i, /\bmetodologias [áa]geis\b/i, /\bsprints?\b/i, /\bjira\b/i, /\bagile\b/i],
    descPt: "Alinhamento com os rituais diários, estimativas e entregas em equipe de produto.",
    descEn: "Familiarity with sprint cadences, standups, backlogs, and agile team execution."
  },
  {
    id: "domain_health_logistics",
    namePt: "Conhecimento de Negócio (Saúde / Auditoria / Logística)",
    nameEn: "Domain Knowledge (Healthcare / Auditing / Logistics)",
    category: "education_diff",
    categoryLabelPt: "Soft Skills & Idiomas",
    categoryLabelEn: "Soft Skills & Languages",
    tier: "Diferencial",
    patterns: [
      /\bsetor de sa[úu]de\b/i,
      /\bárea da sa[úu]de\b/i,
      /\bmercado de sa[úu]de\b/i,
      /\bhealthtech\b/i,
      /\bprontu[áa]rio[s]?\b/i,
      /\behr\b/i,
      /\bglosas?\b/i,
      /\bauditoria m[ée]dica\b/i,
      /\bfaturamento hospitalar\b/i,
      /\bhealthcare domain\b/i,
      /\bclinical data\b/i,
      /\btasy\b/i,
      /\bmv\b/i,
      /\boperadora[s]? de sa[úu]de\b/i,
      /\bsetor log[íi]stico\b/i,
      /\bopera[çc][õo]es log[íi]sticas\b/i,
      /\bcadeia de suprimentos\b/i,
      /\bsupply chain\b/i,
      /\bfulfilment\b/i
    ],
    descPt: "Experiência prévia em dores reais de hospitais, clínicas, faturamento e logística.",
    descEn: "Operational domain background in hospital systems, medical auditing, billing, or logistics."
  }
];

// Ensure all baseline skills are strictly tagged as official benchmark standards
SKILL_TAXONOMY.forEach(s => {
  if (!s.origin) s.origin = "official";
  if (!s.officialSource) s.officialSource = "Padrão Oficial (Benchmark 2026 / Stack Overflow & IEEE Standards)";
});

/**
 * Curated catalog of high-demand tech competencies requested by official industry authorities:
 * - Stack Overflow Annual Developer Survey
 * - IEEE Computer Society & Spectrum Rankings
 * - Cloud Native Computing Foundation (CNCF)
 * - Apache Software Foundation
 * - DORA State of DevOps & Linux Foundation
 * - Gartner Cloud DBMS & OWASP Foundation
 */
const OFFICIAL_RECOMMENDED_SKILLS = [
  {
    id: "kubernetes",
    namePt: "Kubernetes (K8s & Orquestração CNCF)",
    nameEn: "Kubernetes (K8s & CNCF Container Orchestration)",
    category: "cloud_devops",
    categoryLabelPt: "Cloud & DevOps",
    categoryLabelEn: "Cloud & DevOps",
    tier: "Crucial",
    origin: "official",
    officialSource: "CNCF / Linux Foundation / DORA State of DevOps",
    patterns: [/\bkubernetes\b/i, /\bk8s\b/i, /\bhelm charts?\b/i, /\bkubectl\b/i, /\bclusters? k8s\b/i],
    descPt: "Padrão da indústria CNCF para orquestração escalável de microsserviços em contêineres.",
    descEn: "Industry standard for container orchestration and cloud-native scaling."
  },
  {
    id: "terraform",
    namePt: "Terraform (Infraestrutura como Código - IaC)",
    nameEn: "Terraform (Infrastructure as Code - IaC)",
    category: "cloud_devops",
    categoryLabelPt: "Cloud & DevOps",
    categoryLabelEn: "Cloud & DevOps",
    tier: "Alta Demanda",
    origin: "official",
    officialSource: "HashiCorp / DORA State of DevOps",
    patterns: [/\bterraform\b/i, /\biac\b/i, /\binfrastructure as code\b/i, /\binfraestrutura como c[óo]digo\b/i, /\bhcl\b/i],
    descPt: "Padrão corporativo para provisionamento determinístico de nuvens e infraestrutura.",
    descEn: "Declarative infrastructure as code for multi-cloud environments."
  },
  {
    id: "kafka",
    namePt: "Apache Kafka (Streaming de Eventos & Pub/Sub)",
    nameEn: "Apache Kafka (Event Streaming & Pub/Sub)",
    category: "data_bi",
    categoryLabelPt: "Dados & Business Intelligence",
    categoryLabelEn: "Data & Business Intelligence",
    tier: "Crucial",
    origin: "official",
    officialSource: "Apache Software Foundation / IEEE Enterprise",
    patterns: [/\bkafka\b/i, /\bapache kafka\b/i, /\bevent streaming\b/i, /\bstreaming de dados\b/i, /\bkafka connect\b/i],
    descPt: "Plataforma distribuída de mensageria e streaming de eventos de altíssima vazão.",
    descEn: "Distributed high-throughput event streaming platform for modern data."
  },
  {
    id: "airflow",
    namePt: "Apache Airflow (Orquestração de DAGs & Pipelines)",
    nameEn: "Apache Airflow (DAG Orchestration & Pipelines)",
    category: "data_bi",
    categoryLabelPt: "Dados & Business Intelligence",
    categoryLabelEn: "Data & Business Intelligence",
    tier: "Crucial",
    origin: "official",
    officialSource: "Apache Software Foundation / Modern Data Stack",
    patterns: [/\bairflow\b/i, /\bapache airflow\b/i, /\bdags?\b/i, /\borquestra[çc][ãa]o de pipelines?\b/i],
    descPt: "O orquestrador padrão mundial para pipelines de engenharia de dados e ELT.",
    descEn: "Industry standard programmatic workflow orchestrator for data pipelines."
  },
  {
    id: "rust",
    namePt: "Rust (Sistemas & Alta Performance)",
    nameEn: "Rust (Systems & High Performance)",
    category: "languages",
    categoryLabelPt: "Linguagens & Core",
    categoryLabelEn: "Languages & Core",
    tier: "Diferencial",
    origin: "official",
    officialSource: "Stack Overflow Developer Survey (#1 Most Loved Language)",
    patterns: [/\brust\b/i, /\brustlang\b/i, /\bcargo\b/i, /\bmemory safety\b/i],
    descPt: "Linguagem com máxima segurança de memória e velocidade extrema sem garbage collection.",
    descEn: "Blazingly fast language with compile-time memory safety without a garbage collector."
  },
  {
    id: "golang",
    namePt: "Go / Golang (Backend & Concorrência)",
    nameEn: "Go / Golang (Backend & Concurrency)",
    category: "languages",
    categoryLabelPt: "Linguagens & Core",
    categoryLabelEn: "Languages & Core",
    tier: "Alta Demanda",
    origin: "official",
    officialSource: "IEEE Spectrum / Google Cloud Backend Standard",
    patterns: [/\bgolang\b/i, /\bgo language\b/i, /\blinguagem go\b/i, /\bgoroutines?\b/i],
    descPt: "Linguagem criada pela Google para microsserviços velozes e concorrência nativa.",
    descEn: "Statically typed, compiled language by Google designed for concurrency and microservices."
  },
  {
    id: "graphql",
    namePt: "GraphQL (APIs Flexíveis)",
    nameEn: "GraphQL (Flexible API Queries)",
    category: "backend_apis",
    categoryLabelPt: "Backend & Arquitetura",
    categoryLabelEn: "Backend & Architecture",
    tier: "Diferencial",
    origin: "official",
    officialSource: "GraphQL Foundation / Linux Foundation",
    patterns: [/\bgraphql\b/i, /\bapollo\b/i, /\bqueries graphql\b/i, /\bgraphql schema\b/i],
    descPt: "Linguagem de consulta declarativa para APIs que elimina over-fetching e under-fetching.",
    descEn: "Query language and runtime for APIs that lets clients request exactly the data needed."
  },
  {
    id: "linux_shell",
    namePt: "Linux & Shell Scripting (Bash / Terminal)",
    nameEn: "Linux & Shell Scripting (Bash / Terminal)",
    category: "cloud_devops",
    categoryLabelPt: "Cloud & DevOps",
    categoryLabelEn: "Cloud & DevOps",
    tier: "Crucial",
    origin: "official",
    officialSource: "Linux Foundation / Stack Overflow Core Standard",
    patterns: [/\blinux\b/i, /\bbash\b/i, /\bshell script(?:ing)?\b/i, /\bterminal\b/i, /\bunix\b/i, /\bzsh\b/i],
    descPt: "Conhecimento mandatório de sistemas operacionais, automação de scripts e servidores.",
    descEn: "Fundamental operating system scripting, administration, and command line mastery."
  },
  {
    id: "snowflake_dw",
    namePt: "Snowflake (Data Cloud DW)",
    nameEn: "Snowflake (Data Cloud DW)",
    category: "databases",
    categoryLabelPt: "Bancos de Dados",
    categoryLabelEn: "Databases",
    tier: "Alta Demanda",
    origin: "official",
    officialSource: "Gartner Magic Quadrant Cloud DBMS",
    patterns: [/\bsnowflake\b/i, /\bsnowsql\b/i, /\bsnowpark\b/i, /\bdata cloud\b/i],
    descPt: "Data warehouse moderno em nuvem com separação total entre armazenamento e computação.",
    descEn: "Multi-cloud data warehouse platform powering modern enterprise data architecture."
  },
  {
    id: "databricks_spark",
    namePt: "Databricks & Apache Spark (Lakehouse & PySpark)",
    nameEn: "Databricks & Apache Spark (Lakehouse & PySpark)",
    category: "data_bi",
    categoryLabelPt: "Dados & Business Intelligence",
    categoryLabelEn: "Data & Business Intelligence",
    tier: "Crucial",
    origin: "official",
    officialSource: "Databricks / Apache Spark / Big Data Benchmark",
    patterns: [/\bspark\b/i, /\bpyspark\b/i, /\bapache spark\b/i, /\bdatabricks\b/i, /\bdelta lake\b/i, /\blakehouse\b/i],
    descPt: "Framework padrão ouro da indústria para computação distribuída e processamento massivo.",
    descEn: "Unified big data processing engine and lakehouse standard for analytics and AI."
  },
  {
    id: "cybersecurity_owasp",
    namePt: "Cibersegurança & Padrão OWASP",
    nameEn: "Cybersecurity & OWASP Top 10 Standards",
    category: "backend_apis",
    categoryLabelPt: "Backend & Arquitetura",
    categoryLabelEn: "Backend & Architecture",
    tier: "Alta Demanda",
    origin: "official",
    officialSource: "OWASP Foundation / ISO 27001 Security Standard",
    patterns: [/\bowasp\b/i, /\bciberseguran[çc]a\b/i, /\bcybersecurity\b/i, /\bseguran[çc]a da informa[çc][ãa]o\b/i, /\bvulnerabilidades\b/i, /\bappsec\b/i],
    descPt: "Proteção de dados, prevenção de injeção SQL, autenticação robusta e segurança corporativa.",
    descEn: "Core web application security, credential safety, and vulnerability mitigation."
  },
  {
    id: "ml_deeplearning",
    namePt: "Machine Learning & PyTorch / Scikit-Learn",
    nameEn: "Machine Learning & PyTorch / Scikit-Learn",
    category: "ai_automation",
    categoryLabelPt: "IA Aplicada & Automação",
    categoryLabelEn: "Applied AI & Automation",
    tier: "Alta Demanda",
    origin: "official",
    officialSource: "IEEE Computational Intelligence / Stanford AI Index",
    patterns: [/\bmachine learning\b/i, /\baprendizado de m[áa]quina\b/i, /\bscikit[- ]learn\b/i, /\bpytorch\b/i, /\btensorflow\b/i, /\bmodelos preditivos\b/i],
    descPt: "Treinamento e inferência de modelos preditivos estatísticos e redes neurais profundas.",
    descEn: "Predictive statistical modeling and neural network architectures for AI solutions."
  }
];

class JobMarketAnalyzer {
  constructor(skillsTaxonomy = SKILL_TAXONOMY) {
    this.setTaxonomy(skillsTaxonomy);
  }

  setTaxonomy(newTaxonomy) {
    this.taxonomy = Array.isArray(newTaxonomy) ? [...newTaxonomy] : [...SKILL_TAXONOMY];
    this.skillMap = new Map(this.taxonomy.map(s => [s.id, s]));
  }

  /**
   * Automatically strips off-scope sections:
   * Benefits, perks, medical insurance, transport reimbursement, corporate boilerplate.
   */
  cleanJobText(rawText) {
    if (!rawText || typeof rawText !== 'string') return '';

    let text = rawText;

    // Pattern matching benefits and additional info sections
    const benefitsCutoffRegex = /(?:\n|\r\n?)(?:🏥\s*|💳\s*|💰\s*|\*\*)?(?:benef[íi]cios|informa[çc][õo]es adicionais|sa[úu]de e bem[- ]estar|o que oferecemos|what we offer|perks|benefits|compensation\s*(?:&|and)\s*benefits|remunera[çc][ãa]o e benef[íi]cios)[\s\S]*$/i;
    text = text.replace(benefitsCutoffRegex, '');

    // Pattern matching corporate about / boilerplate intro before actual requirements
    const aboutCutoffRegex = /^(?:sobre a empresa|about the company|quem somos|about us)[\s\S]*?(?=(?:responsabilidades|atribui[çc][õo]es|requisitos|qualifica[çc][õo]es|requirements|responsibilities|o que voc[êe] vai fazer))/i;
    text = text.replace(aboutCutoffRegex, '');

    return text;
  }

  /**
   * Splits cleaned text into Mandatory vs Differential (Nice-to-Have) subsections.
   */
  segmentRequirements(cleanedText) {
    const differentialMarker = /(?:ser[áa] um diferencial|diferencia(?:l|is)|desej[áa]ve(?:l|is)|nice to have|bonus points?|plus)[\s\S]*$/i;
    const diffMatch = cleanedText.match(differentialMarker);

    let differentialText = "";
    let mandatoryText = cleanedText;

    if (diffMatch && diffMatch.index !== undefined) {
      differentialText = cleanedText.slice(diffMatch.index);
      mandatoryText = cleanedText.slice(0, diffMatch.index);
    }

    return {
      mandatoryText,
      differentialText
    };
  }

  /**
   * Extracts matched skills with:
   * - Strict section exclusion (no "plano de saúde" false positives)
   * - Mandatory vs Differential categorization
   * - Context evidence snippets
   */
  extractSkills(text, options = { lang: 'pt' }) {
    if (!text || typeof text !== 'string') return [];

    const cleanedText = this.cleanJobText(text);
    const { mandatoryText, differentialText } = this.segmentRequirements(cleanedText);
    const foundSkills = [];

    for (const skill of this.taxonomy) {
      // Exception: prevent technical english from triggering when english_fluent is matched
      let isMatch = false;
      let totalCount = 0;
      let matchedSnippets = [];

      for (const pattern of skill.patterns) {
        const matches = [...cleanedText.matchAll(new RegExp(pattern.source, 'gi'))];
        if (matches && matches.length > 0) {
          isMatch = true;
          totalCount += matches.length;

          // Capture a surrounding sentence snippet for verification
          matches.slice(0, 2).forEach(m => {
            const idx = m.index || 0;
            const start = Math.max(0, idx - 45);
            const end = Math.min(cleanedText.length, idx + m[0].length + 45);
            let snippet = cleanedText.substring(start, end).replace(/\s+/g, ' ').trim();
            if (start > 0) snippet = "..." + snippet;
            if (end < cleanedText.length) snippet = snippet + "...";
            if (!matchedSnippets.includes(snippet)) matchedSnippets.push(snippet);
          });
        }
      }

      if (isMatch) {
        // Special guard: If skill is english_fluent, verify it does NOT only match "inglês técnico"
        if (skill.id === "english_fluent") {
          const onlyTechnical = /ingl[êe]s t[ée]cnico|leitura de documenta[çc][ãa]o|reading documentation/i.test(cleanedText);
          const hasExplicitFluent = /c1|c2|fluente|fluent|conversational|conversação|usd/i.test(cleanedText);
          if (onlyTechnical && !hasExplicitFluent) {
            continue; // Skip english_fluent, let english_tech claim it
          }
        }

        // Determine requirement classification: Mandatory vs. Differential
        let isDifferential = false;
        let diffHits = 0;
        let mandHits = 0;

        for (const pattern of skill.patterns) {
          const inDiff = differentialText.match(new RegExp(pattern.source, 'gi'));
          if (inDiff) diffHits += inDiff.length;
          const inMand = mandatoryText.match(new RegExp(pattern.source, 'gi'));
          if (inMand) mandHits += inMand.length;
        }

        if (diffHits > 0 && mandHits === 0) {
          isDifferential = true;
        }

        const name = options.lang === 'en' ? skill.nameEn : skill.namePt;
        const categoryLabel = options.lang === 'en' ? skill.categoryLabelEn : skill.categoryLabelPt;
        const description = options.lang === 'en' ? skill.descEn : skill.descPt;

        foundSkills.push({
          id: skill.id,
          name,
          namePt: skill.namePt,
          nameEn: skill.nameEn,
          category: skill.category,
          categoryLabel,
          tier: skill.tier,
          matchCount: totalCount,
          isDifferential,
          requirementType: isDifferential ? 'differential' : 'mandatory',
          evidenceSnippet: matchedSnippets[0] || "",
          weight: isDifferential ? 0.8 : 1.2
        });
      }
    }

    return foundSkills;
  }

  /**
   * Analyzes an array of job postings and calculates market statistics.
   */
  analyzePostings(postings, options = { lang: 'pt' }) {
    const totalPostings = postings.length;
    if (totalPostings === 0) {
      return {
        totalPostings: 0,
        skillFrequencies: [],
        categoryFrequencies: {},
        levelCounts: {},
        modalityCounts: {},
        coOccurrences: []
      };
    }

    const skillCounts = {};
    const levelCounts = {};
    const modalityCounts = {};
    const coOccurrencePairs = {};

    // Initialize counts for all known skills
    this.taxonomy.forEach(s => {
      skillCounts[s.id] = {
        skill: s,
        name: options.lang === 'en' ? s.nameEn : s.namePt,
        count: 0,
        mandatoryCount: 0,
        differentialCount: 0,
        percentage: 0,
        roles: { data: 0, backend: 0, ai_automation: 0, fullstack: 0 }
      };
    });

    postings.forEach(posting => {
      levelCounts[posting.level] = (levelCounts[posting.level] || 0) + 1;
      modalityCounts[posting.modality] = (modalityCounts[posting.modality] || 0) + 1;

      const extracted = this.extractSkills(posting.description + " " + posting.title, options);
      const extractedIds = extracted.map(e => e.id);

      extracted.forEach(item => {
        if (skillCounts[item.id]) {
          skillCounts[item.id].count += 1;
          if (item.isDifferential) {
            skillCounts[item.id].differentialCount += 1;
          } else {
            skillCounts[item.id].mandatoryCount += 1;
          }

          const role = posting.category || 'data';
          if (skillCounts[item.id].roles[role] !== undefined) {
            skillCounts[item.id].roles[role] += 1;
          }
        }
      });

      // Co-occurrence combinations
      for (let i = 0; i < extractedIds.length; i++) {
        for (let j = i + 1; j < extractedIds.length; j++) {
          const pairKey = [extractedIds[i], extractedIds[j]].sort().join("&");
          coOccurrencePairs[pairKey] = (coOccurrencePairs[pairKey] || 0) + 1;
        }
      }
    });

    // Calculate percentages and sort descending (guard against division by zero if totalPostings is 0)
    const skillFrequencies = Object.values(skillCounts)
      .map(item => ({
        ...item,
        percentage: totalPostings > 0 ? Math.round((item.count / totalPostings) * 100) : 0
      }))
      .sort((a, b) => b.count - a.count);

    // Format top co-occurrences (guard against division by zero)
    const coOccurrences = Object.entries(coOccurrencePairs)
      .map(([pair, count]) => {
        const [idA, idB] = pair.split("&");
        return {
          skillA: this.skillMap.get(idA),
          skillB: this.skillMap.get(idB),
          count,
          percentage: totalPostings > 0 ? Math.round((count / totalPostings) * 100) : 0
        };
      })
      .filter(item => item.skillA && item.skillB)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return {
      totalPostings,
      skillFrequencies,
      levelCounts,
      modalityCounts,
      coOccurrences
    };
  }

  /**
   * Computes the personal skill gap against analyzed market frequencies.
   */
  computeSkillGap(analyzedSkills, userSkills) {
    let weightedEarned = 0;
    let weightedTotal = 0;

    const mastered = [];
    const learning = [];
    const gaps = [];

    analyzedSkills.forEach(item => {
      const status = userSkills[item.skill.id] || 'gap';
      const weight = item.percentage;

      weightedTotal += weight;

      if (status === 'mastered') {
        weightedEarned += weight;
        mastered.push(item);
      } else if (status === 'learning') {
        weightedEarned += weight * 0.5;
        learning.push(item);
      } else {
        gaps.push(item);
      }
    });

    const matchScore = weightedTotal > 0 ? Math.round((weightedEarned / weightedTotal) * 100) : 0;

    const criticalGaps = gaps
      .filter(item => item.percentage >= 40)
      .sort((a, b) => b.percentage - a.percentage);

    const quickWins = learning
      .sort((a, b) => b.percentage - a.percentage);

    const keyStrengths = mastered
      .sort((a, b) => b.percentage - a.percentage);

    return {
      matchScore,
      masteredCount: mastered.length,
      learningCount: learning.length,
      gapCount: gaps.length,
      mastered,
      learning,
      gaps,
      criticalGaps,
      quickWins,
      keyStrengths
    };
  }
}

// Export for browser and node environments
if (typeof window !== "undefined") {
  window.SKILL_TAXONOMY = SKILL_TAXONOMY;
  window.OFFICIAL_RECOMMENDED_SKILLS = OFFICIAL_RECOMMENDED_SKILLS;
  window.JobMarketAnalyzer = JobMarketAnalyzer;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SKILL_TAXONOMY, OFFICIAL_RECOMMENDED_SKILLS, JobMarketAnalyzer };
}

