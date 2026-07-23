<div align="center">

# 🔧 FindThatTool

**Every common developer tool you need — JSON, CSV, YAML, XML, Text and more — in one fast, free place.**

[**Open the app →**](https://find-that-tool.vercel.app/)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev/) [![Blueprint](https://img.shields.io/badge/Blueprint-6-2d72d2)](https://blueprintjs.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

FindThatTool is a collection of **45+ everyday utilities** for developers, all in one place. No sign-up, no ads, no uploads to a server — **everything runs entirely in your browser**. It's installable as an app and works **offline**.

## ✨ Highlights

- ⚡ **100% client-side** — your data never leaves your machine.
- 🌙 **Light & dark mode** that follows your system and remembers your choice.
- 🔎 **Instant command-palette search** (the search bar) to jump to any tool.
- 💾 **Sticky input** — your work survives a refresh, and every tool has a **Share** button that turns your input into a link.
- 🪄 **Drag & drop** a file straight onto the input, or upload / download / copy with one click.
- 📴 **Offline-ready PWA** — install it and use it on a plane.
- ♿ Built on [Blueprint](https://blueprintjs.com/) for a clean, accessible UI.

## 🧰 The toolbox

<details open>
<summary><b>JSON</b></summary>

Prettify JSON · Minify JSON · JSON → CSV · JSON → XML · JSON → YAML
</details>

<details>
<summary><b>CSV</b></summary>

CSV → JSON · CSV → XML · CSV → YAML
</details>

<details>
<summary><b>XML</b></summary>

Prettify XML · Minify XML · XML → CSV · XML → JSON · XML → YAML
</details>

<details>
<summary><b>YAML</b></summary>

YAML → CSV · YAML → JSON · YAML → XML
</details>

<details>
<summary><b>Text</b></summary>

Base64 Encode / Decode · URL Encode / Decode · HTML Encode / Decode · Slash Escape / Unescape · Text ↔ Hex · Extract text from HTML / XML · **Hash Generator** (SHA-1/256/384/512)
</details>

<details>
<summary><b>Converters</b></summary>

Length · Mass · Temperature · Area · Angle · Speed · Pressure · Energy · Color · Base (2–16)
</details>

<details>
<summary><b>Other</b></summary>

Diff Checker · Image ↔ Base64 · Image Color Picker · **JWT Decoder** · **UUID Generator**
</details>

## 🏗️ Tech stack

| | |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, static export) |
| **UI** | [React 19](https://react.dev/) + [Blueprint 6](https://blueprintjs.com/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) (theme driven by Blueprint's palette) |
| **Tooling** | [Biome](https://biomejs.dev/) (lint + format), [Vitest](https://vitest.dev/) (tests), TypeScript |

## 🚀 Getting started

**Requirements:** [Node.js](https://nodejs.org/) 20.9+ and [git](https://git-scm.com/downloads).

```bash
git clone https://github.com/kaushalmeena/find-that-tool.git
cd find-that-tool
npm install
npm run dev
```

The app runs at [localhost:3000](http://localhost:3000/).

## 📜 Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint with Biome |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run format` | Format with Biome |
| `npm run typecheck` | Type-check with TypeScript |
| `npm run test` | Run the Vitest suite |
| `npm run check` | Types + lint + tests in one go |

## 📄 License

Licensed under the MIT License — see [LICENSE](LICENSE) for details.
