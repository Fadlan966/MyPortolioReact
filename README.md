# ⚡ MyPortfolio — Muhammad Fadlan

> **QA Engineer & Test Automation Enthusiast** who makes sure software runs smoothly — and packages it in a futuristic look.

A personal portfolio website with a **neon cyberpunk theme (cyan & purple)**, built as a lightweight, fast, and easily customizable single-page application. All content is managed from **one file**: `src/App.jsx`.

---

## 📖 About the Project

**MyPortfolio** is a space to introduce who I am, what I have worked on, and how I work. I'm **Muhammad Fadlan**, and I focus on **Quality Assurance and test automation** — from manual testing and documentation to writing **Python + Playwright** scripts that automate reservation and queue-management workflows.

The futuristic design is intentional: good QA is about detail, and this website aims to show that detail applies to the interface too.

---

## ✨ Features & Website Sections

| Section | Description |
|---|---|
| **Hero** | Opening section with a cyberpunk-style *glitch* effect, my name, and professional role |
| **About** | Short profile, education (Universitas Bina Sarana Informatika), and QA experience |
| **Skills** | Tools & technologies: Playwright (Python), GitHub, Vercel, Trello, Agile/Scrum |
| **Projects** | A collection of projects: **Qbook, AirQ, Wals, GripReserve, AIDO** |
| **Experience** | QA internship experience, including testing projects at IMP: **HIPA ITS**, **Sibertren**, and **Pusaka Kemenag** |
| **Contact** | Links to get in touch with me |

**Technical highlights**
- 🎨 Neon cyan/purple theme with glow and glitch effects
- ⚡ Blazing fast thanks to Vite (instant HMR during development)
- 📱 Responsive on desktop, tablet, and mobile
- 🧩 Single content file — change text, projects, and contacts without touching anything else
- 🚀 Ready to deploy to Vercel with a single build

---

## 🧪 Areas of Expertise

- **Test Automation** — writing and iterating Python Playwright scripts for reservation, floor plan, and queue-management flows
- **Manual Testing & Documentation** — compiling test results in Google Sheets and Microsoft Word
- **Team Collaboration** — working with Agile/Scrum and managing tasks in Trello
- **Version Control & Deployment** — GitHub and Vercel

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 |
| Icons | lucide-react |
| Deployment | Vercel |

---

## 📂 Project Structure

```
MyPortfolio/
├── public/              # static assets
├── src/
│   ├── App.jsx          # ⭐ all content: name, projects, skills, contact
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind directives & global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# open http://localhost:5173

# 3. Build for production
npm run build
# output is in the dist/ folder
```

---

## ✏️ Customizing the Content

Everything on the website lives in **`src/App.jsx`**. Simply edit the following parts:

1. **Identity** — name, role, and short description in the Hero & About sections
2. **Projects** — add or change the project list (name, description, links)
3. **Skills** — adjust the list of tools and technologies
4. **Contact** — update your email, LinkedIn, GitHub, or other links

Want to change the theme colors? Update the Tailwind classes using `cyan` and `purple` in `App.jsx` to your liking.

---

## ☁️ Deploying to Vercel

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → select this repository
3. Vercel automatically detects Vite — click **Deploy**
4. Your website is live 🎉

Or manually: run `npm run build`, then upload the contents of the `dist/` folder.

---

## 🗺️ Roadmap

- [ ] Light/dark mode toggle
- [ ] Scroll animations between sections
- [ ] Detail page for each project
- [ ] Contact form connected directly to email
- [ ] Bilingual support (ID/EN)

---

## 👤 Contact

**Muhammad Fadlan** — QA Engineer / Test Automation

- GitHub: `https://github.com/<username>`
- LinkedIn: `https://linkedin.com/in/<username>`
- Email: `<your-email>`

---

<p align="center">Built with ☕, React, and a little neon light by <b>Muhammad Fadlan</b></p>