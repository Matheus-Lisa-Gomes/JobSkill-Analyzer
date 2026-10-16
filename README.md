# 🚀 SkillPulse AI — JobSkill Analyzer & Career Transition Intelligence (v2.5)

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla%20Dark%20System-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![Storage](https://img.shields.io/badge/Storage-LocalStorage%20Sync-00C7B7?style=flat)](#)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20External%20Deps-success?style=flat)](#)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **"Substitua o 'achismo' por inteligência de dados: analise descrições reais de vagas, meça seus gaps técnicos e planeje sua transição de carreira com precisão cirúrgica."**

---

## 📑 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Módulos da Aplicação](#-módulos-da-aplicação)
- [Taxonomia do Motor NLP (33 Competências)](#-taxonomia-do-motor-nlp-33-competências)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Guia de Uso Passo a Passo](#-guia-de-uso-passo-a-passo)
  - [1. Navegação e Métricas de Mercado](#1-navegação-e-métricas-de-mercado)
  - [2. Mapeamento de Habilidades (Matriz de Gaps)](#2-mapeamento-de-habilidades-matriz-de-gaps)
  - [3. Ingestão de Novas Vagas (LinkedIn, Indeed, Gupy)](#3-ingestão-de-novas-vagas-linkedin-indeed-gupy)
  - [4. Gestão e Filtros do Banco de Vagas](#4-gestão-e-filtros-do-banco-de-vagas)
  - [5. Geração do Relatório Executivo em PDF (Tema Escuro)](#5-geração-do-relatório-executivo-em-pdf-tema-escuro)
  - [6. Backup e Restauração de Dados (JSON)](#6-backup-e-restauração-de-dados-json)
- [Arquitetura e Segurança](#-arquitetura-e-segurança)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Como Contribuir](#-como-contribuir)
- [Autor e Licença](#-autor-e-licença)

---

## 🎯 Visão Geral

O **SkillPulse AI** é uma plataforma analítica desenvolvida para profissionais e estudantes em transição de carreira (com ênfase em **Engenharia de Dados, Backend, Cloud, Big Data e IA**). 

Em vez de seguir conselhos genéricos de cursos ou redes sociais, o SkillPulse AI permite ingestão de descrições reais de vagas de emprego, extrai requisitos técnicos por meio de um **motor NLP proprietário client-side**, compara as exigências do mercado com seu nível atual de proficiência e gera automaticamente:
1. **Índice de Aderência (Match Score)** percentual;
2. **Matriz de Gap de Habilidades** destacando faltas críticas e diferenciais competitivos;
3. **Plano de Ação Tático 30-60-90 Dias** customizado para o seu perfil;
4. **Relatório Executivo Completo em PDF com Tema Escuro (Dark Mode)** pronto para impressão ou apresentação.

A aplicação roda **100% no navegador**, sem necessidade de servidores de backend ou instalação de ferramentas complexas, preservando a **privacidade total dos seus dados**.

---

## ✨ Funcionalidades Principais

- **📊 50 Vagas Reais de Referência (Benchmark):** Base curada e balanceada cobrindo posições Júnior, Pleno, Sênior e Especialista/Lead em grandes empresas de tecnologia.
- **✨ Central de Habilidades Dinâmica (Oficiais vs. Personalizadas):** 
  - **Catálogo Oficial da Indústria:** Ative competências de alta demanda respaldadas por fontes de autoridade (**Stack Overflow Annual Survey**, **IEEE Spectrum**, **CNCF**, **Apache Software Foundation**, **DORA** e **Gartner**) como *Kubernetes*, *Terraform*, *Kafka*, *Airflow*, *Rust*, *Golang*, *Snowflake*, *Databricks* e *PyTorch*.
  - **Criação de Habilidades Personalizadas:** Crie qualquer competência personalizada do zero com palavras-chave de detecção NLP automática e nível de proficiência inicial.
  - **Diferenciação Visual Estrita:** Identificação clara por badges institucionais (`🏛️ Padrão Oficial` vs `👤 Personalizada`) e filtros dedicados por origem na Matriz de Habilidades.
  - **Exclusão Segura:** Permite remover habilidades personalizadas a qualquer momento com recálculo instantâneo de métricas, preservando a integridade das competências oficiais.
- **🧠 Motor NLP com Segmentação de Seções & Regexes Calibradas:** Extração de requisitos e classificação em *Obrigatório* ou *Diferencial* com captura de evidências contextuais.
- **🛡️ Segmentação Inteligente Anti-Falso Positivo:** Remove automaticamente blocos de benefícios (*"Plano de Saúde"*, *"Vale Refeição"*, *"Seguro de Vida"*), evitando que menções a planos de saúde sejam computadas como requisitos de conhecimento no setor hospitalar.
- **🌐 Suporte Bilingue Instantâneo (🇧🇷 PT-BR / 🇺🇸 EN):** Tradução em tempo real de toda a interface, estatísticas, alertas e relatórios com apenas um clique.
- **🎛️ Seletor de Fonte Dinâmico:** Alterne a análise entre:
  - 🌐 *Todas as Vagas* (Agregado geral)
  - 🏛️ *Benchmark Referência* (As 50 vagas de calibração)
  - 👤 *Minhas Vagas Adicionadas* (Vagas inseridas pelo próprio usuário)
- **📄 Relatório Executivo Dark-Themed em PDF:** Um clique no cabeçalho compila um dossiê completo de carreira estilizado com padrão visual escuro profissional para impressão ou exportação em PDF, com tags de proveniência de cada habilidade.
- **💾 Persistência & Backup Robusto:** Salva suas habilidades e vagas customizadas no `localStorage` do navegador com sincronização entre abas e botões dedicados de **Exportar/Importar JSON**.

---

## 🧩 Módulos da Aplicação

### 1. 📈 Visão Geral & Métricas do Mercado
- **Cards de Métricas Globais:** Total de vagas ativas, competências monitoradas, demanda média e aderência média do usuário.
- **Distribuição de Demandas (Top Skills):** Gráfico interativo com barras proporcionais indicando quais tecnologias aparecem em maior porcentagem das vagas.
- **Rede de Co-ocorrências:** Algoritmo que identifica quais tecnologias aparecem juntas no mesmo anúncio (ex.: *Python + Spark + AWS* ou *SQL + dbt + Airflow*).

### 2. 🎯 Minha Matriz de Habilidades & Central de Competências
- **Botão "Adicionar Habilidade":**
  - **Aba Fontes Oficiais:** Lista de competências validadas por padrões da indústria com ativação em 1 clique.
  - **Aba Habilidade Personalizada:** Formulário para cadastrar qualquer tecnologia com palavras-chave regex para o analisador de vagas.
- **Filtro de Origem:** Alterne a visualização da matriz entre `🌐 Todas`, `🏛️ Padrão Oficial` e `👤 Personalizadas`.
- **Avaliação em 4 Níveis:**
  - `0 - Sem Interesse / Não domino`
  - `1 - Iniciante (Conceitos básicos / Estudos)`
  - `2 - Intermediário (Uso prático em projetos)`
  - `3 - Avançado / Especialista (Domínio em produção)`
- **Classificação Dinâmica de Gaps:**
  - 🔴 **Gap Crítico:** Alta frequência no mercado (> 40%) e nível do usuário inferior a Intermediário.
  - 🟡 **Gap Moderado:** Frequência relevante no mercado (20% - 40%) com oportunidade de evolução.
  - 🟢 **Ponto Forte / Alinhado:** Competências dominadas que atendem à demanda.
  - ⭐ **Diferencial Competitivo:** Domínio em tecnologias de ponta com alta valorização.

### 3. 🗓️ Plano de Ação 30-60-90 Dias
- Estratégia de estudos e projetos baseada na priorização dos seus maiores gaps:
  - **Primeiros 30 Dias:** Fechamento de gaps urgentes e fundamentos de mercado (ex.: Python, SQL, Git).
  - **60 Dias:** Engenharia de dados aplicada, pipelines, testes e projetos para portfólio no GitHub.
  - **90 Dias:** Arquiteturas em Cloud, orquestração avançada, streaming e conversação em inglês para vagas internacionais.

### 4. 💼 Banco de Vagas & Ingestão
- Lista completa das vagas cadastradas com visualização em cards.
- Busca em tempo real com normalização de acentos.
- Filtros por senioridade (`Júnior`, `Pleno`, `Sênior`, `Tech Lead`) e fonte (`Benchmark` ou `Minhas Vagas`).
- Modal de adição rápida de novas vagas com processamento de texto imediato.

---

## 🔬 Taxonomia do Motor NLP (33 Competências)

O motor léxico (`analyzer.js`) analisa sentenças e expressões regulares calibradas nos seguintes grupos:

| Domínio | Competências Monitoradas |
| :--- | :--- |
| **Linguagens & Paradigmas** | Python, SQL, Java, C#, TypeScript / JavaScript, Programação Orientada a Objetos (POO) |
| **Dados & Big Data** | Apache Spark / PySpark, Apache Kafka, Apache Airflow, dbt, Pandas / NumPy, Databricks, Bancos NoSQL, Data Lakehouse / Delta Lake |
| **Nuvem & DevOps** | Amazon Web Services (AWS), Microsoft Azure, Google Cloud (GCP), Docker & Containers, Kubernetes, CI/CD Pipelines, Terraform (IaC) |
| **Engenharia de Software** | Git & Controle de Versão, APIs RESTful & Web Services, Testes Automatizados & TDD, Arquitetura de Microsserviços |
| **Inteligência Artificial** | Machine Learning & Data Science, Modelos de Linguagem (LLMs) & IA Generativa |
| **Negócios & Idiomas** | Inglês Técnico (Leitura/Documentação), Inglês Fluente / C1 (Conversação), Metodologias Ágeis (Scrum / Kanban) |

---

## 🏃 Como Executar o Projeto

Não é necessário instalar Node.js, compilar pacotes ou configurar banco de dados. A aplicação é totalmente autônoma.

### Opção 1: Abertura Direta no Navegador
1. Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/Matheus-Lisa-Gomes/JobSkill-Analyzer.git
   ```
2. Abra a pasta do projeto e dê um duplo clique no arquivo [`index.html`](index.html).
3. A aplicação abrirá instantaneamente no seu navegador padrão.

### Opção 2: Servidor Local Simples (Recomendado para desenvolvimento)
Você pode utilizar qualquer servidor HTTP estático local:

- **Via extensão do VS Code:** Utilize a extensão **Live Server** (clique com o botão direito em `index.html` > *Open with Live Server*).
- **Via Python:**
  ```bash
  python -m http.server 8000
  ```
  Acesse `http://localhost:8000` no seu navegador.
- **Via Node (npx):**
  ```bash
  npx serve .
  ```

---

## 📖 Guia de Uso Passo a Passo

### 1. Navegação e Métricas de Mercado
- Ao carregar a aplicação, a barra superior exibe:
  - **Status da Base:** Total de vagas ativas (iniciando com 50 vagas de benchmark).
  - **Seletor de Idioma:** Alterne entre `🇧🇷 PT` e `🇺🇸 EN`.
  - **Ação Rápida:** Botão `+ Nova Vaga` para inserção rápida.
  - **Relatório PDF:** Botão `Gerar Relatório PDF` para gerar o dossiê executivo.
- Na aba **Visão Geral**, consulte o gráfico de barras para entender quais tecnologias o mercado mais exige no momento.

### 2. Mapeamento de Habilidades (Matriz de Gaps)
1. Clique na aba **"Matriz de Gaps"**.
2. Percorra as competências listadas em cada um dos cards de domínio.
3. Altere o seletor de cada habilidade para o seu nível real:
   - Se você nunca utilizou ou não tem interesse, marque `0 - Sem Interesse`.
   - Se já fez cursos ou tutoriais, marque `1 - Iniciante`.
   - Se já entregou projetos práticos ou atuou profissionalmente, marque `2 - Intermediário`.
   - Se domina arquitetura e resolução de problemas complexos, marque `3 - Avançado/Especialista`.
4. Conforme você ajusta os níveis, observe o topo da tela:
   - Seu **Match Score** se recalcula na hora.
   - Os cards de **Gaps Críticos** indicam exatamente o que você deve priorizar.

### 3. Ingestão de Novas Vagas (LinkedIn, Indeed, Gupy)
1. Clique no botão **"+ Nova Vaga"** na barra superior ou no rodapé do banco de vagas.
2. No modal que se abrir:
   - Preencha o **Título do Cargo** (ex.: *Engenheiro de Dados Pleno*).
   - Preencha o **Nome da Empresa** (ex.: *Nubank*, *Itaú*, *PicPay*).
   - Selecione a **Senioridade** (`Júnior`, `Pleno`, `Sênior` ou `Especialista`).
   - Cole o texto da descrição da vaga no campo de texto.
3. Clique em **"Analisar e Salvar Vaga"**.
4. O motor NLP processará o texto, identificará automaticamente as habilidades exigidas e atualizará todos os gráficos e métricas instantaneamente.

### 4. Gestão e Filtros do Banco de Vagas
- Na aba **"Banco de Vagas"**:
  - Digite termos no campo de busca (ex.: `Python`, `Remoto`, `AWS`) para encontrar vagas instantaneamente.
  - Filtre por senioridade usando o menu suspenso.
  - Visualize os badges coloridos de tecnologias encontradas em cada card.
  - Clique em **"Ver Detalhes"** para inspecionar os trechos do anúncio original.
  - Exclua vagas criadas por você sempre que necessário.

### 5. Geração do Relatório Executivo em PDF (Tema Escuro)
O SkillPulse AI possui uma folha de estilos de impressão `@media print` dedicada a manter o visual premium escuro no documento final:
1. No cabeçalho da aplicação, clique no botão **"Gerar Relatório PDF"** (ícone de impressora/arquivo).
2. A janela de impressão nativa do navegador será disparada automaticamente.
3. Na janela de impressão:
   - **Destino:** Selecione `Salvar como PDF` (ou `Microsoft Print to PDF`).
   - **Layout:** Escolha `Retrato` (Portrait) ou `Paisagem` (Landscape) conforme sua preferência.
   - **Configurações Adicionais:** Certifique-se de marcar a opção **"Gráficos de segundo plano"** (ou *"Background graphics"*) para que o fundo escuro, os gradientes e as cores das badges sejam impressos com máxima fidelidade.
4. Salve o arquivo PDF gerado. Ele já inclui sumário de métricas, ranking de tecnologias, matriz de gaps e o plano 30-60-90.

### 6. Backup e Restauração de Dados (JSON)
- Seus dados ficam salvos localmente no seu computador.
- Para não perder suas vagas cadastradas ou transferi-las para outro navegador/máquina:
  - Acesse a aba **"Banco de Vagas"**.
  - Clique no botão **"Exportar JSON"** para baixar um arquivo com todas as suas vagas personalizadas.
  - Para restaurar, clique em **"Importar JSON"** e selecione o arquivo baixado anteriormente.
  - Se quiser restaurar a base padrão de 50 vagas a qualquer momento, clique no botão **"Restaurar 50 Vagas Originais"**.

---

## 🔒 Arquitetura e Segurança

- **Zero Dependências Externas:** Não há bibliotecas pesadas de terceiros (sem jQuery, sem React, sem Tailwind em runtime). O código é rápido, leve e roda em menos de 100ms.
- **Proteção Anti-XSS:** Todas as entradas de usuário (títulos, nomes de empresas e descrições de vagas) são estritamente sanitizadas via função `escapeHtml()` antes de qualquer renderização no DOM.
- **Normalização de Textos:** O algoritmo de busca aplica remoção de acentos (`normalize("NFD")`) e regex insensível a maiúsculas/minúsculas para buscas intuitivas.
- **Tolerância a Quota de Armazenamento:** Tratamento de erros caso o `localStorage` do navegador atinja seu limite, alertando o usuário sem travar a interface.
- **Multi-Tab Sync:** Ações realizadas em uma aba aberta do navegador disparam eventos `storage` que sincronizam o estado em tempo real com outras abas abertas.

---

## 📁 Estrutura de Arquivos

```
JobSkill-Analyzer/
├── assets/
│   └── logo.jpg              # Logotipo holográfico moderno
├── index.html                # Estrutura semântica HTML5, modais e barra de controle
├── style.css                 # Design System Obsidian, Glassmorphism e CSS @media print
├── analyzer.js               # Motor NLP, 33 competências, anti-falso positivo e co-ocorrências
├── postings-data.js          # Base curada de 50 vagas de referência do mercado
├── app.js                    # Controlador da aplicação, reatividade, i18n, persistência e PDF
├── .gitignore                # Regras de exclusão de arquivos de sistema e temporários
└── README.md                 # Documentação completa e guia do usuário
```

---

## 🤝 Como Contribuir

Contribuições para enriquecer a taxonomia de competências, melhorar os algoritmos de NLP ou sugerir novas vagas para a base de benchmark são muito bem-vindas!

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/MinhaNovaFeature`)
3. Faça o Commit das suas alterações (`git commit -m "feat: Adiciona suporte a Rust e WebAssembly"`)
4. Faça o Push para a Branch (`git push origin feature/MinhaNovaFeature`)
5. Abra um **Pull Request**

---

## 👤 Autor e Licença

Desenvolvido por **Matheus Lisa Gomes**  
GitHub: [@Matheus-Lisa-Gomes](https://github.com/Matheus-Lisa-Gomes)  
Repositório: [JobSkill-Analyzer](https://github.com/Matheus-Lisa-Gomes/JobSkill-Analyzer.git)

Distribuído sob a licença **MIT**. Consulte o arquivo de licença para mais detalhes.
