<div align="center">

<img src="src/app/icon.svg" alt="Digi-Toolbox logo" width="96" height="96" />

# Digi-Toolbox

[![License: MIT](https://img.shields.io/badge/License-MIT-3DA639?logo=opensourceinitiative&logoColor=white)](LICENSE) [![Next.js](https://img.shields.io/badge/Next.js-16-5F3DC4?logo=next.js&logoColor=white)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-087EA4?logo=react&logoColor=white)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org) [![PWA](https://img.shields.io/badge/PWA-ready-5A0FC8?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

**Every common developer tool you need — JSON, CSV, YAML, XML, Text and more —
in one fast, free place.**

A collection of **55+ everyday utilities** for developers, all in one place. No
sign-up, no ads, no uploads to a server — everything runs entirely in your
browser. Installable as a PWA and works offline.

[**Try it live**](https://digi-toolbox.vercel.app/)

</div>

---

## Features

- **100% client-side** — your data never leaves your machine.
- **Desktop-app workbench** — a categorized sidebar, side-by-side editor panes
  with line numbers, status bars and live validation as you type.
- **Command menu** — press <kbd>⌘</kbd> <kbd>K</kbd> (or <kbd>Ctrl</kbd>
  <kbd>K</kbd>) to jump to any tool or switch theme.
- **Favorites and recents** — pin the tools you use most; recently used tools
  are one click away.
- **Sticky input and share links** — your work survives a refresh, and any
  input can be shared as a link.
- **One-click workflows** — paste, open or drop a file, load a sample, copy,
  download, and swap a converter's direction carrying the output across.
- **See everything at once** — unit converters show every unit, the hash
  generator every digest, the case converter every case style.
- **Light, dark or system theme** and an offline-ready, installable PWA.

## Tools

| Category       | Tools                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------- |
| **JSON**       | Prettify, Minify, JSON to CSV / XML / YAML, JSON to TypeScript                                 |
| **CSV**        | CSV to JSON / XML / YAML                                                                       |
| **XML**        | Prettify, Minify, XML to JSON / CSV / YAML                                                     |
| **YAML**       | YAML to JSON / CSV / XML                                                                       |
| **Text**       | Diff Checker, Regex Tester, Case Converter, Text Statistics, Sort & Dedupe Lines, Extract Text |
| **Encoding**   | Base64, URL encode/decode, URL Parser, HTML entities, Slash escape, Hex, JWT Decoder           |
| **Generators** | UUID, Hash (SHA-1/256/384/512), Password, Lorem Ipsum                                          |
| **Converters** | Unix Timestamp, Number Base, Color, Data Size, Time, Length, Mass, Temperature, Area, Speed, … |
| **Image**      | Image to Base64, Base64 to Image, Image Color Picker                                           |

## Project Structure

```text
src/
├── app/                  # Next.js routes: home, /[tool], sitemap, robots
├── components/
│   ├── ui/               # shadcn/ui primitives (Base UI)
│   ├── layout/           # app shell, sidebar, command menu, tool header
│   ├── tool/             # tool building blocks: TransformTool, UnitConverter, panes…
│   └── home/             # overview page sections
├── hooks/                # persisted input, workspace (favorites/recents), hotkeys
├── lib/                  # framework-free helpers (files, clipboard, base64, units…)
└── tools/
    ├── registry.ts       # every tool's metadata — routing, nav, search and SEO derive from it
    ├── loaders.ts        # lazy import of each tool's screen
    └── <category>/       # one screen per tool + lib.ts (pure logic) + lib.test.ts
```

Adding a tool means one entry in `registry.ts`, one line in `loaders.ts`, and
its screen (plus any logic and tests) in the category folder.

## Tech Stack

| Area          | Tools                                                                                                                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, statically generated)                                                                                                                                                           |
| **UI**        | [React 19](https://react.dev/) · [shadcn/ui](https://ui.shadcn.com/) on [Base UI](https://base-ui.com/) · [Lucide](https://lucide.dev/)                                                                                        |
| **Styling**   | [Tailwind CSS 4](https://tailwindcss.com/)                                                                                                                                                                                     |
| **Testing**   | [Vitest](https://vitest.dev/)                                                                                                                                                                                                  |
| **Tooling**   | [Oxlint](https://oxc.rs/docs/guide/usage/linter) + [oxlint-tailwindcss](https://github.com/sergioazoc/oxlint-tailwindcss) · [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) · [TypeScript](https://www.typescriptlang.org/) |

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development purposes.

### Requirements

To install and run this project you need:

- [Node.js](https://nodejs.org/) 20.9+
- [git](https://git-scm.com/downloads) (only to clone this repository)

### Installation

To set up everything on your local machine, follow these steps:

1. Clone this repo and then change directory to the `digi-toolbox` folder:

```bash
git clone https://github.com/kaushalmeena/digi-toolbox.git
cd digi-toolbox
```

2. Install project dependencies using npm:

```bash
npm install
```

### Running

To run the project simply run:

```bash
npm run dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

### Testing

To run the unit tests:

```bash
npm run test
```

To lint and format-check the project:

```bash
npm run lint
npm run format:check
```

To run every check (types, lint, format, tests):

```bash
npm run check
```

To type-check the project:

```bash
npm run typecheck
```

### Building

To create a production build:

```bash
npm run build
```

## Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the development server                 |
| `npm run build`     | Create a production build                    |
| `npm run start`     | Serve the production build                   |
| `npm run lint`      | Lint with Oxlint (`lint:fix` to auto-fix)    |
| `npm run format`    | Format with Oxfmt (`format:check` to verify) |
| `npm run typecheck` | Type-check with TypeScript                   |
| `npm run test`      | Run unit tests (`test:watch` for watch mode) |
| `npm run check`     | Run typecheck, lint, format check and tests  |

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please
[open an issue](https://github.com/kaushalmeena/digi-toolbox/issues/new/choose)
first to discuss it. For code changes, fork the repository, create a branch,
and open a pull request.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE)
file for details.
