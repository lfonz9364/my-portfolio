# 🚀 Developer Portfolio (Next.js + Contentful)

A modern, CMS-powered developer portfolio built with **Next.js App Router**, **Contentful**, and deployed on **Vercel**.

This portfolio is designed with a **product mindset**, allowing recruiters and visitors to quickly explore projects and experience by **filtering based on skills**.

---

## 🌐 Live Demo

tbc

---

## ✨ Features

- 🔎 **Skill-based filtering**
  - Filter projects and experience by technologies (React, Next.js, TypeScript, etc.)
  - URL-driven filters (shareable links)

- 🧠 **Unified Work Page**
  - Projects + Experience in one place
  - Faster scanning for recruiters

- 🧾 **Project Detail Pages**
  - Problem → Solution → Tech Stack → Outcome
  - GitHub & live demo links

- 🧩 **Headless CMS (Contentful)**
  - Manage content without code changes
  - Structured data (projects, experience, skills)

- ⚡ **Performance Optimized**
  - Static + ISR rendering
  - Deployed on Vercel Edge

- 🧭 **Clean UX Flow**
  - Home → Work → Filter → Project → Contact

---

## 🧭 User Flow

```mermaid
flowchart TD
  A[User lands on Home] --> B[Home Screen]
  B --> C{Next action}

  C -->|About| D[About Screen]
  C -->|Work| E[Work Screen]
  C -->|Contact| F[Contact Screen]

  E --> E1[View Projects + Experience]
  E1 --> E2{Use Skill Filters?}

  E2 -->|Yes| E3[Select skills]
  E3 --> E4[Filtered results]
  E4 --> G[Project Detail]

  E2 -->|No| E5[Browse all]
  E5 --> G

  G --> H{Interested?}
  H -->|Yes| F
  H -->|No| I[Exit]
```

---

## 🧱 UI Wireframe

```mermaid
flowchart TD
  A["Header / Nav"] --> B["Hero Section"]
  B --> C["Skills"]
  C --> D["Work Section"]

  D --> E["Filters"]
  D --> F["Projects"]
  D --> G["Experience"]

  F --> F1["Project Card"]
  G --> G1["Experience Card"]

  A --> H["Contact Section"]
```

---

## 🏗️ System Architecture

```mermaid
flowchart LR
  A["User"] --> B["Vercel Hosting"]
  B --> C["Next.js App"]

  C --> D["App Router Pages"]
  C --> E["Contentful Client"]

  E --> F["Contentful CMS"]

  C --> G["Filter Logic (URL Params)"]
  C --> H["ISR / Static Rendering"]

  I["GitHub"] --> J["Vercel CI/CD"]
  J --> B
```

---

## 🛠️ Tech Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS _(or Chakra UI if you choose)_

### Backend / Data

- Contentful (Headless CMS)
- Contentful Delivery API
- Contentful Preview API

### Deployment & DevOps

- Vercel (Hosting + Edge + ISR)
- GitHub (CI/CD integration)

### Features & Architecture

- Server Components
- Client Components (for filters)
- URL Search Params filtering
- Incremental Static Regeneration (ISR)

---

## 🧩 Content Model (Contentful)

### `skill`

- name (React, Next.js, etc.)
- slug (react, nextjs)
- category (frontend, backend, etc.)

### `project`

- title
- slug
- description
- skills (linked entries)
- githubUrl
- liveUrl

### `experience`

- company
- role
- startDate
- endDate
- skills (linked entries)

---

## 🔎 Filtering Logic

- Users select skills → updates URL:

```text
/work?skills=react,nextjs
```

- Filtering applies to:
  - Projects
  - Experience

- Supports:
  - AND filtering (default)
  - OR filtering (optional)

---

## 🚀 Getting Started

### 1. Clone repo

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create `.env.local`:

```bash
CONTENTFUL_SPACE_ID=xxx
CONTENTFUL_ACCESS_TOKEN=xxx
CONTENTFUL_PREVIEW_ACCESS_TOKEN=xxx
CONTENTFUL_ENVIRONMENT=master
```

### 4. Run locally

```bash
npm run dev
```

---

## 🚀 Deployment

1. Push to GitHub
2. Import project into Vercel
3. Add environment variables
4. Deploy

---

## 💡 Why this project?

This portfolio demonstrates:

- ✅ Strong frontend engineering (Next.js + TypeScript)
- ✅ CMS-driven architecture
- ✅ Product thinking (filter UX)
- ✅ Scalable data modeling
- ✅ Performance optimization (ISR)

---

## 📬 Contact

- Email: _(your email)_
- LinkedIn: _(your profile)_
- GitHub: _(your GitHub)_

---

## 📄 License

MI
