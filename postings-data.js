/**
 * 50 Real-World Benchmark Job Postings (2026 Tech Market)
 * Curated for Data Analytics, Python Backend, AI Engineering & Software Development
 * Covering: Estágio, Júnior, Pleno | Remoto BR, Remoto USD, Híbrido Salvador & SP
 */

const BENCHMARK_JOB_POSTINGS = [
  // --- 1 to 18: DATA ANALYTICS & BI ---
  {
    id: 1,
    title: "Analista de Dados Júnior",
    company: "Fintech Neon Pagamentos",
    category: "data",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.200 - R$ 5.500",
    postedDate: "Há 2 dias",
    description: `Sobre a vaga:
Buscamos uma pessoa Analista de Dados Júnior para atuar na tribo de Crédito e Cobrança, transformando dados brutos em insights acionáveis e dashboards gerenciais.

Responsabilidades:
- Construir e manter painéis no Power BI conectados ao nosso Data Warehouse.
- Escrever consultas SQL complexas para extração, agregação e análise de métricas financeiras.
- Apoiar as áreas de negócio com análises exploratórias em Python (Pandas) e relatórios em Excel.
- Documentar regras de negócio e dicionários de dados.

Requisitos Obrigatórios:
- SQL intermediário: domínio de JOINs, GROUP BY, HAVING, Subqueries e Window Functions.
- Power BI: criação de dashboards, modelagem de dados relacional e cálculos com DAX (CALCULATE, RELATED, SUMX).
- Excel avançado (tabelas dinâmicas, PROCV/XLOOKUP).
- Boa capacidade de comunicação e storytelling com dados.

Diferenciais / Desejáveis:
- Conhecimento em Python para análise de dados (Pandas, NumPy).
- Noções de Git e GitHub para versionamento.
- Graduação em Ciência da Computação, Estatística ou áreas correlatas.`
  },
  {
    id: 2,
    title: "Estagiário de Dados e Inteligência de Negócios",
    company: "Hospital Aliança / Rede D'Or",
    category: "data",
    level: "Estágio",
    modality: "Híbrido Salvador/BA",
    salary: "Bolsa R$ 1.800 + Benefícios",
    postedDate: "Há 1 dia",
    description: `Sobre a oportunidade:
Oportunidade para estudantes universitários que desejam ingressar na área de dados em uma das maiores redes hospitalares do país em Salvador, BA.

Atividades:
- Apoio na extração de relatórios do sistema hospitalar (TASY / MV) e prontuários eletrônicos.
- Auxílio na criação de relatórios de faturamento, auditoria médica e tempo de espera no pronto atendimento.
- Criação e atualização de relatórios gerenciais no Power BI e planilhas de controle.

Requisitos:
- Cursando Ciência da Computação, Engenharia, Sistemas de Informação ou Biomedicina/Saúde com transição para TI.
- SQL básico a intermediário (SELECT, WHERE, filtros e agrupamentos).
- Conhecimento prático de Power BI e Excel.
- Atenção a detalhes e sigilo com dados médicos (LGPD).

Diferenciais:
- Conhecimento em regras de faturamento hospitalar, tabelas SUS/TUSS ou auditoria.
- Noções de Python para limpeza de planilhas CSV/Excel.`
  },
  {
    id: 3,
    title: "Analytics Engineer Júnior",
    company: "Stone Co.",
    category: "data",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 5.000 - R$ 6.500",
    postedDate: "Há 3 dias",
    description: `A equipe de Dados da Stone está crescendo! Procuramos um(a) Analytics Engineer Júnior para criar a ponte entre a Engenharia de Dados e os Analistas de Negócio.

O que você fará:
- Desenvolver pipelines de transformação de dados usando SQL e dbt.
- Modelar dados em esquemas estrela (Star Schema) e snowflake para consumo no Power BI e Metabase.
- Garantir a qualidade, integridade e testes automatizados nos dados transformados.
- Utilizar Git para versionamento de código e fluxos de CI/CD.

O que exigimos:
- SQL avançado (CTEs, Window Functions, otimização de consultas).
- Conceitos sólidos de Modelagem Dimensional (fatos, dimensões, surrogate keys).
- Familiaridade com dbt (data build tool) ou vontade comprovada de aprender.
- Uso de Git e GitHub no dia a dia.

Diferenciais:
- Experiência prévia com Python para pipelines (Pandas, SQLAlchemy).
- Conhecimento em nuvem AWS (S3, Redshift) ou BigQuery / Snowflake.
- Certificação Microsoft PL-300.`
  },
  {
    id: 4,
    title: "Junior Data Analyst (US Remote)",
    company: "HealthPulse Analytics Inc.",
    category: "data",
    level: "Júnior",
    modality: "Remoto Internacional (USD)",
    salary: "$2,800 - $3,800 USD/month",
    postedDate: "Há 4 dias",
    description: `About the Role:
We are a US-based healthcare analytics consultancy looking for a remote Junior Data Analyst based in Latin America. You will work directly with our clinical data operations team.

Key Responsibilities:
- Query relational databases (PostgreSQL, SQL Server) to audit clinical billing and claims data.
- Build clean, interactive dashboards in Power BI and Tableau for hospital executives.
- Clean and normalize messy EHR datasets using Python (Pandas) and automated scripts.
- Present findings to international stakeholders in English during weekly sprints.

Required Qualifications:
- Advanced or Fluent English (C1/C2) is strictly mandatory for daily standups and reports.
- Strong SQL querying skills (Joins, aggregations, window functions).
- Demonstrated experience building production dashboards in Power BI (DAX, data modeling).
- Python fundamentals for data wrangling (Pandas, NumPy).

Bonus Points:
- Healthcare domain experience (electronic health records, medical billing, ICD-10).
- Experience with cloud storage (AWS S3) and Docker.`
  },
  {
    id: 5,
    title: "Analista de BI e Dados Pleno",
    company: "Grupo Boticário",
    category: "data",
    level: "Pleno",
    modality: "Remoto BR",
    salary: "R$ 7.000 - R$ 9.000",
    postedDate: "Há 5 dias",
    description: `Missão da Posição:
Liderar o desenvolvimento de inteligência de negócios para o canal de e-commerce e logística reversa.

Requisitos Técnicos:
- Domínio avançado de Power BI: DAX complexo, modelagem estrela, segurança RLS e governança.
- SQL avançado para consultas em bancos analíticos (BigQuery / PostgreSQL).
- Vivência em Python para automação de coleta de dados e APIs REST.
- Experiência sólida com metodologias ágeis (Scrum / Kanban).

Diferenciais:
- Certificação Microsoft PL-300: Power BI Data Analyst.
- Experiência com automação de fluxos no n8n ou Apache Airflow.
- Inglês para contato com parceiros globais.`
  },
  {
    id: 6,
    title: "Estágio em Engenharia de Dados & BI",
    company: "SEFAZ / Prodeb Bahia",
    category: "data",
    level: "Estágio",
    modality: "Híbrido Salvador/BA",
    salary: "Bolsa R$ 1.600 + Auxílio Transporte",
    postedDate: "Há 3 dias",
    description: `Vaga de Estágio para alunos matriculados em cursos de Tecnologia da Informação / Computação em Salvador.

Atribuições:
- Apoiar na manutenção de views e consultas SQL no banco PostgreSQL e Oracle.
- Auxiliar no desenvolvimento de painéis no Power BI e Metabase.
- Criação de scripts básicos em Python para validação de dados de notas fiscais eletrônicas.

Requisitos:
- Cursando Ciência da Computação, Análise e Desenvolvimento de Sistemas ou Engenharia.
- Conhecimentos em SQL (consultas, joins).
- Vontade de aprender e perfil proativo.
- Noções de Git.`
  },
  {
    id: 7,
    title: "Analista de Dados Júnior (Foco em Operações e Logística)",
    company: "Mercado Livre",
    category: "data",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.800 - R$ 6.200",
    postedDate: "Há 1 semana",
    description: `Venha fazer parte da equipe de logística e fulfilment do Mercado Livre!

O que buscamos:
- Profissional com facilidade em traduzir dores logísticas (lead time, SLA de entrega, taxa de extravio) em indicadores.
- Excelente habilidade com SQL para extrair milhões de linhas em bancos relacionais e BigQuery.
- Construção de dashboards operacionais no Power BI e Looker Studio.
- Experiência em scripts Python (Pandas) para limpeza de bases pesadas.

Requisitos:
- SQL intermediário a avançado.
- Power BI com DAX e modelagem dimensional.
- Noções de cadeia de suprimentos, faturamento ou logística.
- Conhecimento em Git.`
  },
  {
    id: 8,
    title: "Data & BI Analyst",
    company: "Nubank",
    category: "data",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 5.500 - R$ 7.200",
    postedDate: "Há 2 dias",
    description: `No Nu, dados são o sangue da nossa operação. Estamos contratando Analistas de Dados Júnior.

Responsabilidades:
- Conduzir análises de funil e churn de clientes.
- Escrever queries SQL limpas, documentadas e eficientes.
- Criar modelos de dados e dashboards em Power BI e Metabase.
- Conectar dados a modelos preditivos simples em Python.

Requisitos:
- Sólida base em SQL e lógica relacional.
- Power BI ou Tableau.
- Python (Pandas, Matplotlib/Seaborn).
- Inglês intermediário a avançado (leitura e escrita frequentes).
- Git e boas práticas de versionamento.`
  },
  {
    id: 9,
    title: "Data Analyst - Healthcare Operations",
    company: "Carebridge Health (US Client)",
    category: "data",
    level: "Júnior",
    modality: "Remoto Internacional (USD)",
    salary: "$3,200 - $4,200 USD/month",
    postedDate: "Há 6 dias",
    description: `We are scaling our remote technical team across South America.

Role:
- Perform data mining on patient admission, discharge, and audit databases.
- Develop Power BI executive reporting suites with automated data refreshes.
- Write Python scripts to parse JSON and CSV files received from health insurance providers.
- Maintain documentation on data lineage and compliance.

Requirements:
- Fluent / C1 English proficiency (verbal and written).
- 1+ year experience or strong portfolio in SQL and Power BI.
- Python experience with Pandas and REST API integration.
- Background in healthcare billing, biology, or clinical operations is a huge plus!`
  },
  {
    id: 10,
    title: "Analista de BI Júnior",
    company: "Mater Dei Salvador",
    category: "data",
    level: "Júnior",
    modality: "Híbrido Salvador/BA",
    salary: "R$ 3.800 - R$ 4.800",
    postedDate: "Há 4 dias",
    description: `Rede Mater Dei de Saúde contrata Analista de BI Júnior para unidade Salvador.

Responsabilidades:
- Manter e desenvolver os dashboards de indicadores hospitalares (ocupação de leitos, faturamento, glosas).
- Apoiar médicos e gestores com relatórios analíticos em Excel e Power BI.
- Realizar consultas e rotinas em SQL Server e PostgreSQL.

Requisitos:
- Formação concluída ou em andamento em TI, Computação ou áreas afins.
- Experiência com Power BI (DAX e modelagem).
- Domínio de SQL para filtros e junções de tabelas.
- Conhecimento de Excel avançado.`
  },
  {
    id: 11,
    title: "Junior Analytics & Data Ops",
    company: "Loft",
    category: "data",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.500 - R$ 5.800",
    postedDate: "Há 1 semana",
    description: `Buscamos Analista de Dados com foco em Operações para atuar remotamente.

Requisitos:
- SQL para consultas analíticas (Window functions, CTEs).
- Power BI ou Metabase para visualização.
- Python com Pandas para tratamento e limpeza de dados.
- Conhecimentos em Git e GitHub.
- Experiência em empresas de tecnologia ou startups é diferencial.`
  },
  {
    id: 12,
    title: "Estágio em Análise de Dados e Finanças",
    company: "Suzano Papel e Celulose",
    category: "data",
    level: "Estágio",
    modality: "Híbrido Salvador/BA",
    salary: "Bolsa R$ 1.900 + Vale Alimentação",
    postedDate: "Há 5 dias",
    description: `Programa de Estágio Suzano - Unidade Bahia.

Atividades:
- Apoiar a equipe de Controladoria e Planejamento Financeiro na automação de relatórios.
- Conectar bases de dados SQL ao Power BI para acompanhamento de custos operacionais.
- Criar rotinas em Python para conciliação bancária automática.

Requisitos:
- Estudante de Ciência da Computação, Economia, Administração ou Engenharias.
- Excel intermediário a avançado.
- SQL básico.
- Power BI básico a intermediário.`
  },
  {
    id: 13,
    title: "Analista de Dados & Automação Júnior",
    company: "Loggi Tecnologia",
    category: "data",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.800 - R$ 6.000",
    postedDate: "Há 3 dias",
    description: `Venha otimizar as entregas de ponta a ponta no Brasil!

Requisitos:
- SQL afiado (consultas diárias em PostgreSQL e Snowflake).
- Automação de rotinas com Python (requests, pandas) e ferramentas no-code/low-code como n8n.
- Criação de dashboards em Power BI.
- Conhecimento em Git.
- Mindset analítico e foco em resolução de problemas.`
  },
  {
    id: 14,
    title: "BI Developer Junior",
    company: "Compass UOL",
    category: "data",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 3.800 - R$ 5.000",
    postedDate: "Há 1 semana",
    description: `A Compass UOL está buscando novos talentos para projetos internacionais e nacionais.

Requisitos:
- SQL intermediário.
- Power BI (DAX, Power Query, Star Schema).
- Conceitos de ETL / ELT.
- Conhecimento em nuvem AWS ou Azure (diferencial).
- Inglês para conversação é desejável.`
  },
  {
    id: 15,
    title: "Analytics Engineer Pleno",
    company: "QuintoAndar",
    category: "data",
    level: "Pleno",
    modality: "Remoto BR",
    salary: "R$ 8.000 - R$ 10.500",
    postedDate: "Há 2 dias",
    description: `Procuramos Analytics Engineer para liderar transformações com dbt e BigQuery.

Requisitos:
- SQL de alto desempenho.
- Modelagem dimensional Kimball (Star Schema).
- dbt, Airflow e Python para scripts de apoio.
- Docker e Git em ambiente produtivo.
- Excelente comunicação com stakeholders.`
  },
  {
    id: 16,
    title: "Analista de Inteligência de Mercado Júnior",
    company: "iFood",
    category: "data",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.700 - R$ 6.000",
    postedDate: "Há 4 dias",
    description: `Buscamos Analista Júnior para acompanhar crescimento de restaurantes e parceiros.

Requisitos:
- SQL (PostgreSQL / Redshift).
- Dashboards em Power BI ou Tableau.
- Python (Pandas) para manipulação de bases volumosas.
- Excel avançado.
- Perfil investigativo.`
  },
  {
    id: 17,
    title: "Estágio em TI e Governança de Dados",
    company: "Tribunal Regional Eleitoral (TRE-BA)",
    category: "data",
    level: "Estágio",
    modality: "Híbrido Salvador/BA",
    salary: "Bolsa R$ 1.500 + Benefícios",
    postedDate: "Há 6 dias",
    description: `Oportunidade para estudantes universitários de TI com matrícula ativa na Bahia.

Requisitos:
- Cursando Ciência da Computação, Sistemas de Informação ou correlatos.
- Noções de banco de dados relacionais e SQL.
- Pacote Office e Power BI básico.
- Conhecimentos em documentação de processos e LGPD.`
  },
  {
    id: 18,
    title: "Junior Data Specialist",
    company: "Apex Global Solutions (US Remote)",
    category: "data",
    level: "Júnior",
    modality: "Remoto Internacional (USD)",
    salary: "$3,000 - $4,000 USD/month",
    postedDate: "Há 3 dias",
    description: `Join our remote data team servicing Fortune 500 logistics and retail clients.

Requirements:
- Fluent English communication (written & spoken - C1 level).
- Advanced SQL queries and data manipulation.
- Power BI or Tableau reporting experience with interactive drill-downs.
- Python scripting (Pandas, REST APIs, JSON parsing).
- Git repository management.`
  },

  // --- 19 to 36: PYTHON BACKEND & SOFTWARE ENGINEERING ---
  {
    id: 19,
    title: "Desenvolvedor Python Backend Júnior",
    company: "Dasa Saúde",
    category: "backend",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.500 - R$ 6.000",
    postedDate: "Há 1 dia",
    description: `A Dasa, maior ecossistema de saúde integrada do Brasil, está contratando Desenvolvedores Backend Python Júnior!

O que você fará:
- Desenvolver e manter APIs REST utilizando FastAPI e Python 3.11+.
- Integrar nossos sistemas de exames e laudos a prontuários eletrônicos via Webhooks e mensageria.
- Criar modelos de dados e queries otimizadas em PostgreSQL utilizando SQLAlchemy e Pydantic.
- Escrever testes automatizados com Pytest e criar contêineres Docker.

Requisitos Técnicos:
- Domínio de Python fundamental e orientação a objetos com Type Hints.
- Experiência prática na criação de APIs REST com FastAPI ou Flask.
- Conhecimento em banco de dados relacional SQL (PostgreSQL ou MySQL).
- Uso rotineiro de Git e GitHub (branches, pull requests, code reviews).
- Conhecimento básico de Docker (Dockerfile, docker-compose).

Diferenciais:
- Conhecimento do setor de saúde ou auditoria de prontuários.
- Noções de deploy em nuvem (AWS ou Azure).
- Inglês técnico para leitura e documentação.`
  },
  {
    id: 20,
    title: "Junior Python Engineer (Remote USD)",
    company: "Veloce Technologies Inc.",
    category: "backend",
    level: "Júnior",
    modality: "Remoto Internacional (USD)",
    salary: "$3,500 - $4,500 USD/month",
    postedDate: "Há 3 dias",
    description: `We are looking for a hungry, disciplined Junior Python Backend Engineer to join our fully remote US engineering team.

Responsibilities:
- Build high-performance RESTful APIs with FastAPI and Pydantic.
- Write robust unit tests with pytest ensuring 85%+ coverage.
- Work with PostgreSQL databases, writing clean migrations and optimized SQL queries.
- Build Docker containers and integrate with GitHub Actions CI/CD pipelines.

Requirements:
- Strong English fluency (C1 level minimum) for daily syncs, tickets, and architecture debates.
- Solid Python programming foundation with modern features (asyncio, type hints).
- Proven hands-on experience building endpoints in FastAPI or Django.
- Relational databases (PostgreSQL), SQL knowledge, and basic ORMs (SQLAlchemy/Tortoise).
- Git mastery.`
  },
  {
    id: 21,
    title: "Estagiário de Desenvolvimento Backend (Python)",
    company: "Jusbrasil",
    category: "backend",
    level: "Estágio",
    modality: "Híbrido Salvador/BA",
    salary: "Bolsa R$ 2.200 + Vouchers",
    postedDate: "Há 2 dias",
    description: `O Jusbrasil nasceu em Salvador e conecta milhões de brasileiros à justiça. Temos vagas abertas para estágio de tecnologia!

Atividades:
- Aprender e codificar microsserviços em Python e Go.
- Apoiar na manutenção de scrapers e parsers de diários oficiais e dados jurídicos.
- Realizar consultas e modelagem em PostgreSQL e Elasticsearch.
- Participar de code reviews com engenheiros sêniores.

Requisitos:
- Cursando Ciência da Computação, Engenharia da Computação ou afins (com previsão de formatura a partir de 2027).
- Boa base em lógica de programação e algoritmos em Python.
- Noções de banco de dados e SQL.
- Uso de Git.
- Residir em Salvador ou região metropolitana.`
  },
  {
    id: 22,
    title: "Desenvolvedor Backend Python / Automações Júnior",
    company: "Zup Innovation",
    category: "backend",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.200 - R$ 5.600",
    postedDate: "Há 5 dias",
    description: `Procuramos Desenvolvedor Python Júnior focado em integrações de sistemas.

Requisitos:
- Python moderno (FastAPI, Requests, Pydantic).
- Integração de APIs de terceiros, autenticação OAuth2 e Webhooks.
- Banco de dados PostgreSQL e consultas SQL.
- Docker e Docker Compose para ambiente local.
- Git/GitHub.`
  },
  {
    id: 23,
    title: "Engenheiro de Software Backend Pleno (Python / FastAPI)",
    company: "PicPay",
    category: "backend",
    level: "Pleno",
    modality: "Remoto BR",
    salary: "R$ 8.500 - R$ 11.000",
    postedDate: "Há 4 dias",
    description: `Atuação na squad de Open Finance e pagamentos instantâneos.

Requisitos:
- Domínio profundo de Python 3, arquitetura assíncrona com asyncio e FastAPI.
- Bancos de dados relacionais (PostgreSQL) com alto volume e Redis para cache.
- Conteinerização com Docker e orquestração com Kubernetes.
- Mensageria com RabbitMQ ou Kafka.
- Cloud AWS (ECS, Lambda, S3, RDS).`
  },
  {
    id: 24,
    title: "Estágio em Desenvolvimento de Software",
    company: "Indústria Petroquímica Braskem",
    category: "backend",
    level: "Estágio",
    modality: "Híbrido Salvador/BA",
    salary: "Bolsa R$ 2.000 + Benefícios",
    postedDate: "Há 1 semana",
    description: `Programa de Estágio Universitário no Polo Industrial de Camaçari / Escritório Salvador.

Atividades:
- Auxiliar no desenvolvimento de scripts internos de automação industrial com Python.
- Conectar sensores e bancos de dados SQL a interfaces web e relatórios gerenciais.
- Auxiliar na documentação de APIs e manuais de sistemas.

Requisitos:
- Matrícula regular em Ciência da Computação, Engenharia ou Sistemas.
- Python e SQL básicos.
- Boa comunicação e interesse em indústria 4.0.`
  },
  {
    id: 25,
    title: "Junior Backend Developer - Python / AWS",
    company: "Toptal Talent Network",
    category: "backend",
    level: "Júnior",
    modality: "Remoto Internacional (USD)",
    salary: "$3,200 - $4,200 USD/month",
    postedDate: "Há 4 dias",
    description: `Global clients looking for disciplined Junior/Mid Backend Engineers.

Stack:
- Python 3.11+, FastAPI or Django REST Framework.
- PostgreSQL database design and query tuning.
- AWS cloud foundations (S3, Lambda, API Gateway).
- Docker containers and CI/CD automation.

Requirements:
- Fluency in English (C1 spoken and written).
- Portfolio or open-source GitHub projects showcasing REST APIs.
- Self-sufficient problem solver.`
  },
  {
    id: 26,
    title: "Desenvolvedor Python Júnior (Finanças e APIs)",
    company: "XP Inc.",
    category: "backend",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 5.000 - R$ 6.800",
    postedDate: "Há 2 dias",
    description: `Venha transformar o mercado financeiro com a XP!

Requisitos:
- Python avançado para backend e processamento de dados.
- Construção de APIs REST escaláveis com FastAPI.
- Conhecimento em bancos SQL (PostgreSQL, SQL Server).
- Testes automatizados (pytest) e Git.
- Desejável conhecimento em Docker e nuvem Azure ou AWS.`
  },
  {
    id: 27,
    title: "Programador Python Júnior",
    company: "Totvs Salvador",
    category: "backend",
    level: "Júnior",
    modality: "Híbrido Salvador/BA",
    salary: "R$ 3.800 - R$ 4.900",
    postedDate: "Há 5 dias",
    description: `Unidade Totvs Bahia contrata programador para desenvolvimento de rotinas em ERP e integrações via Web Services.

Requisitos:
- Lógica de programação sólida em Python.
- Criação e consumo de APIs REST/JSON.
- Banco de dados relacional (SQL Server ou PostgreSQL).
- Git para controle de versão.
- Residir em Salvador ou Lauro de Freitas.`
  },
  {
    id: 28,
    title: "Python Backend Developer (AI Integrations)",
    company: "Automata Labs (US Remote)",
    category: "backend",
    level: "Júnior",
    modality: "Remoto Internacional (USD)",
    salary: "$3,800 - $4,800 USD/month",
    postedDate: "Há 3 dias",
    description: `We build intelligent workflow automation for legal and compliance teams.

Role:
- Develop FastAPI microservices that orchestrate LLM calls (OpenAI, Claude API).
- Handle structured outputs with Pydantic and persist vectors and relational data in PostgreSQL.
- Implement background workers and task queues with Celery and Redis.

Requirements:
- C1 English proficiency.
- Python backend expertise (FastAPI, async/await).
- Relational SQL database skills (PostgreSQL).
- Git, Docker, and familiarity with LLM API consumption.`
  },
  {
    id: 29,
    title: "Desenvolvedor Backend Python Júnior",
    company: "Ebanx",
    category: "backend",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.800 - R$ 6.200",
    postedDate: "Há 1 semana",
    description: `Buscamos desenvolvedor(a) backend para processar pagamentos globais.

Requisitos:
- Conhecimentos em Python (FastAPI ou Flask).
- Bancos de dados relacionais (PostgreSQL/MySQL) e queries SQL.
- Testes unitários com Pytest.
- Docker e Git.
- Noções de segurança de APIs (tokens JWT, OAuth).`
  },
  {
    id: 30,
    title: "Estágio em TI / Desenvolvimento de Sistemas",
    company: "Tribunal de Contas do Estado da Bahia (TCE-BA)",
    category: "backend",
    level: "Estágio",
    modality: "Híbrido Salvador/BA",
    salary: "Bolsa R$ 1.700 + Auxílios",
    postedDate: "Há 3 dias",
    description: `Vaga de estágio em órgão público para estudantes de Ciência da Computação / TI.

Atribuições:
- Auxiliar na manutenção de sistemas em Python e Java.
- Criar rotinas SQL para auditoria de prestação de contas governamentais.
- Documentar regras de negócio e fluxogramas de processos.

Requisitos:
- Matrícula ativa em curso superior de TI.
- SQL intermediário.
- Python ou lógica de programação orientada a objetos.`
  },
  {
    id: 31,
    title: "Software Engineer Júnior - Python",
    company: "LuizaLabs (Magazine Luiza)",
    category: "backend",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.600 - R$ 5.800",
    postedDate: "Há 4 dias",
    description: `O LuizaLabs está buscando Desenvolvedores Python Júnior para o time de catálogo e logística.

Requisitos:
- Python 3 e FastAPI ou Django.
- Conhecimento em bancos SQL (PostgreSQL) e NoSQL.
- Testes automatizados e CI/CD.
- Git, GitHub e Docker.
- Vontade de aprender e trabalhar em equipe colaborativa.`
  },
  {
    id: 32,
    title: "Junior Backend Engineer",
    company: "Skyline Cloud Services (Canada Remote)",
    category: "backend",
    level: "Júnior",
    modality: "Remoto Internacional (USD)",
    salary: "$3,000 - $4,000 USD/month",
    postedDate: "Há 6 dias",
    description: `Requirements:
- Fluency in English (C1 minimum).
- Python programming skills, REST APIs, JSON data processing.
- Relational databases (PostgreSQL/MySQL), SQL queries.
- Docker containers and cloud infrastructure basics (AWS).
- Problem solving mindset.`
  },
  {
    id: 33,
    title: "Desenvolvedor Python Pleno (APIs & Microservices)",
    company: "GFT Technologies",
    category: "backend",
    level: "Pleno",
    modality: "Remoto BR",
    salary: "R$ 8.000 - R$ 10.000",
    postedDate: "Há 2 dias",
    description: `Atuação em projetos bancários de grande porte.

Requisitos:
- Sólida experiência em Python, FastAPI e Flask.
- Bancos de dados PostgreSQL, queries otimizadas e índices.
- Docker, Kubernetes e esteiras de CI/CD.
- Cloud AWS ou Microsoft Azure.
- Inglês para reuniões com clientes internacionais é diferencial.`
  },
  {
    id: 34,
    title: "Desenvolvedor Backend Júnior (Python / Automação de Processos)",
    company: "Sidia Instituto de Tecnologia",
    category: "backend",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.300 - R$ 5.500",
    postedDate: "Há 5 dias",
    description: `Oportunidade para desenvolver automações e ferramentas de suporte interno em Python.

Requisitos:
- Python intermediário.
- Consumo de APIs REST e tratamento de JSON.
- Banco de dados relacional SQL.
- Git e GitHub.
- Perfil autodidata e comunicativo.`
  },
  {
    id: 35,
    title: "Desenvolvedor Python Júnior",
    company: "Stefanini Group",
    category: "backend",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 3.800 - R$ 4.800",
    postedDate: "Há 1 semana",
    description: `Requisitos:
- Programação em Python (POO, funções, type hints).
- Frameworks web (FastAPI ou Flask).
- SQL e bancos relacionais.
- Git.
- Desejável certificação cloud (AWS Cloud Practitioner ou Azure Fundamentals).`
  },
  {
    id: 36,
    title: "Backend Engineer - Data Pipelines",
    company: "Pathology AI Systems (US Remote)",
    category: "backend",
    level: "Mid/Senior",
    modality: "Remoto Internacional (USD)",
    salary: "$5,000 - $6,500 USD/month",
    postedDate: "Há 3 dias",
    description: `We process digital pathology slides and clinical data using deep learning.

Requirements:
- Fluent English (C1/C2).
- Advanced Python, FastAPI, Docker, and PostgreSQL.
- Experience with medical data, DICOM or HIPAA compliance is highly valued.
- AWS cloud infrastructure (S3, SQS, ECS).`
  },

  // --- 37 to 44: AI APPLIED, AUTOMATION & LLM INTEGRATION ---
  {
    id: 37,
    title: "Engenheiro de IA Aplicada e Automação Júnior",
    company: "SmarterAI Solutions",
    category: "ai_automation",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 5.500 - R$ 7.000",
    postedDate: "Há 1 dia",
    description: `Buscamos um profissional apaixonado por automação inteligente para conectar inteligência artificial aos fluxos operacionais de clientes corporativos.

Responsabilidades:
- Criar pipelines no n8n orquestrando webhooks, APIs e modelos de linguagem (LLMs).
- Desenvolver scripts Python com FastAPI consumindo APIs oficiais (OpenAI, Anthropic, Google Gemini).
- Implementar extração de entidades estruturadas (Structured Outputs / JSON) a partir de documentos e prontuários.
- Salvar e consultar dados em bancos PostgreSQL e vetoriais.

Requisitos:
- Python intermediário com consumo de APIs REST.
- Experiência prática na orquestração de fluxos com n8n ou ferramentas similares de automação.
- Domínio de Prompt Engineering e saídas estruturadas em JSON.
- SQL e banco de dados relacional (PostgreSQL).
- Git e Docker básico.

Diferenciais:
- Conhecimento em RAG (Retrieval Augmented Generation) e LangChain.
- Background em auditoria de documentos, saúde ou logística.`
  },
  {
    id: 38,
    title: "AI Integration & Automation Specialist",
    company: "OmniFlow Automation (US Remote)",
    category: "ai_automation",
    level: "Júnior",
    modality: "Remoto Internacional (USD)",
    salary: "$3,600 - $4,800 USD/month",
    postedDate: "Há 2 dias",
    description: `Join our boutique automation agency creating automated business systems for US enterprises.

What You Will Do:
- Build complex workflows using n8n and Python scripts.
- Integrate LLM APIs (OpenAI, Claude) to summarize, categorize, and extract structured data from unstructured emails, invoices, and PDFs.
- Connect third-party SaaS tools via Webhooks, REST APIs, and PostgreSQL databases.
- Write clean Python scripts with Docker containers for custom nodes.

Requirements:
- Fluent / C1 English for live daily communication and documentation.
- Demonstrated experience with n8n and API integrations.
- Python scripting with Pydantic for rigid JSON schema outputs.
- SQL querying skills.
- Git and containerization (Docker).`
  },
  {
    id: 39,
    title: "Desenvolvedor de Automação n8n e Python",
    company: "Bhub Gestão Integrada",
    category: "ai_automation",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.500 - R$ 5.800",
    postedDate: "Há 4 dias",
    description: `Estamos automatizando as rotinas financeiras e contábeis de centenas de PMEs pelo Brasil.

Requisitos:
- Domínio de n8n para criação de automações avançadas.
- Scripts em Python (Requests, Pandas, Pydantic) para manipulação de arquivos e APIs.
- Conexão com bancos de dados PostgreSQL e MySQL via SQL.
- Experiência com integração de APIs de LLM (OpenAI / Gemini).
- Versionamento com Git.`
  },
  {
    id: 40,
    title: "Estágio em Inteligência Artificial e Automação de Processos",
    company: "Hospital Mater Dei / Inovação",
    category: "ai_automation",
    level: "Estágio",
    modality: "Híbrido Salvador/BA",
    salary: "Bolsa R$ 1.900 + Benefícios",
    postedDate: "Há 3 dias",
    description: `Laboratório de Inovação em Saúde busca estudante para projetos de automação com IA.

Atividades:
- Apoiar na automação de leitura e triagem de guias médicas e relatórios clínicos fictícios com n8n e LLMs.
- Escrever scripts Python para validação de dados em banco de dados SQL.
- Ajudar a construir dashboards de acompanhamento no Power BI.

Requisitos:
- Cursando Ciência da Computação, Engenharia ou área biomédica com forte foco em TI.
- Conhecimentos em Python e SQL.
- Curiosidade com ferramentas de Inteligência Artificial generativa.
- Boa comunicação.`
  },
  {
    id: 41,
    title: "AI Engineer (LLM Applications & RAG)",
    company: "Cognitive Tech Brasil",
    category: "ai_automation",
    level: "Pleno",
    modality: "Remoto BR",
    salary: "R$ 9.000 - R$ 12.000",
    postedDate: "Há 5 dias",
    description: `Requisitos:
- Desenvolvimento de aplicações com LangChain / LlamaIndex.
- Python avançado, FastAPI, Docker.
- Bancos vetoriais (Chroma, Pinecone, pgvector no PostgreSQL).
- Structured Outputs e avaliação de prompts (evals).
- Cloud AWS ou Azure.`
  },
  {
    id: 42,
    title: "Especialista em Automação Low-Code / Pro-Code (n8n + Python)",
    company: "Avenue Securities",
    category: "ai_automation",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 5.000 - R$ 6.500",
    postedDate: "Há 2 dias",
    description: `Requisitos:
- Experiência sólida em n8n (deploy self-hosted em Docker).
- Python para criar funções customizadas e integração com PostgreSQL.
- Conhecimento em consumo de APIs de IA para automação de atendimento e backoffice.
- Git e CI/CD.
- Inglês avançado é forte diferencial.`
  },
  {
    id: 43,
    title: "Prompt Engineer & AI Operations Associate",
    company: "Synthesize Global (US Remote)",
    category: "ai_automation",
    level: "Júnior",
    modality: "Remoto Internacional (USD)",
    salary: "$3,400 - $4,200 USD/month",
    postedDate: "Há 1 semana",
    description: `Requirements:
- C1 English proficiency.
- Python backend scripting, JSON validation, and SQL databases.
- Experience tuning prompts for LLMs (few-shot prompting, schema enforcement).
- Automation pipelines with n8n or Zapier.
- Attention to detail.`
  },
  {
    id: 44,
    title: "Desenvolvedor Python & IA Júnior",
    company: "Sidia / Laboratório de IA",
    category: "ai_automation",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.800 - R$ 6.000",
    postedDate: "Há 4 dias",
    description: `Requisitos:
- Python 3 com FastAPI.
- Consumo de modelos de linguagem e APIs REST.
- SQL (PostgreSQL / SQLite).
- Git e Docker.
- Formação em Ciência da Computação ou afins.`
  },

  // --- 45 to 50: FULL STACK & JUNIOR SOFTWARE ENGINEERING ---
  {
    id: 45,
    title: "Desenvolvedor Full Stack Júnior (Python + JavaScript)",
    company: "HostGator / Newfold Digital",
    category: "fullstack",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.200 - R$ 5.400",
    postedDate: "Há 2 dias",
    description: `Procuramos Desenvolvedor(a) Full Stack Júnior para criar soluções de hospedagem e portais de clientes.

Requisitos:
- Backend em Python (FastAPI ou Flask) ou Node.js.
- Frontend em JavaScript (ES6+), HTML5 e CSS3 moderno.
- Bancos de dados relacionais e SQL (MySQL ou PostgreSQL).
- Git e GitHub.
- Docker para ambiente local.`
  },
  {
    id: 46,
    title: "Estágio em Desenvolvimento Full Stack",
    company: "Softplan Tecnologia",
    category: "fullstack",
    level: "Estágio",
    modality: "Remoto BR",
    salary: "Bolsa R$ 1.800 + Benefícios",
    postedDate: "Há 1 semana",
    description: `Vaga de estágio para atuar na modernização de sistemas de gestão jurídica e pública.

Requisitos:
- Cursando Ciência da Computação, Sistemas de Informação ou Engenharia.
- Lógica de programação em JavaScript ou Python.
- HTML, CSS e noções de APIs REST.
- Banco de dados SQL básico.
- Git.`
  },
  {
    id: 47,
    title: "Desenvolvedor Web Júnior (HTML/CSS, JS & Python)",
    company: "Agência Digital Salvador",
    category: "fullstack",
    level: "Júnior",
    modality: "Híbrido Salvador/BA",
    salary: "R$ 3.500 - R$ 4.500",
    postedDate: "Há 4 dias",
    description: `Requisitos:
- Domínio de HTML5 semântico, CSS3 e JavaScript Vanilla.
- Backend básico em Python (FastAPI/Django) para criação de formulários e APIs.
- Integração com banco PostgreSQL/MySQL com SQL.
- Git e GitHub.
- Residir em Salvador.`
  },
  {
    id: 48,
    title: "Junior Fullstack Engineer (US Remote)",
    company: "NovaSpark Software (US Client)",
    category: "fullstack",
    level: "Júnior",
    modality: "Remoto Internacional (USD)",
    salary: "$3,200 - $4,200 USD/month",
    postedDate: "Há 3 dias",
    description: `Requirements:
- Strong English communication (C1).
- Frontend: HTML5, CSS3, modern JavaScript.
- Backend: Python (FastAPI/Django) or Node.js.
- SQL querying and PostgreSQL.
- Git, GitHub, Docker basics.`
  },
  {
    id: 49,
    title: "Desenvolvedor Júnior de Software",
    company: "Ci&T",
    category: "fullstack",
    level: "Júnior",
    modality: "Remoto BR",
    salary: "R$ 4.400 - R$ 5.600",
    postedDate: "Há 5 dias",
    description: `Requisitos:
- Fundamentos de desenvolvimento de software em Python ou JavaScript.
- Criação e integração de APIs REST.
- Bancos de dados SQL relacionais.
- Git, GitHub e boas práticas de código limpo.
- Metodologia ágil (Scrum/Kanban).`
  },
  {
    id: 50,
    title: "Estagiário de Engenharia de Software e Suporte",
    company: "Rede D'Or São Rafael",
    category: "fullstack",
    level: "Estágio",
    modality: "Híbrido Salvador/BA",
    salary: "Bolsa R$ 1.750 + Benefícios",
    postedDate: "Há 2 dias",
    description: `Estágio para atuação na unidade Hospital São Rafael em Salvador, BA.

Atribuições:
- Apoiar no suporte e parametrização de sistemas médicos e integrações.
- Desenvolver scripts em Python e SQL para extração de dados e validações.
- Manutenção de pequenas aplicações internas em HTML/CSS e JavaScript.

Requisitos:
- Cursando Ciência da Computação ou afins.
- SQL e lógica de programação.
- Bom relacionamento interpessoal e pontualidade.`
  }
];

// Mark all built-in postings as benchmark reference
BENCHMARK_JOB_POSTINGS.forEach(p => {
  p.isBenchmark = true;
});
