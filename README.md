<div align="center">

<img src="src/app/icon.svg" alt="Digi-Toolbox logo" width="96" height="96" />

# Digi-Toolbox

**Every common developer tool you need — JSON, CSV, YAML, XML, Text and more —
in one fast, free place.**

A collection of **45+ everyday utilities** for developers, all in one place. No
sign-up, no ads, no uploads to a server — everything runs entirely in your
browser. Installable as a PWA and works offline.

[**Try it live**](https://digi-toolbox.vercel.app/)

[![License: MIT](https://img.shields.io/badge/License-MIT-3DA639?logo=opensourceinitiative&logoColor=white)](LICENSE) [![Next.js](https://img.shields.io/badge/Next.js-16-404854?logo=next.js&logoColor=white)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-087EA4?logo=react&logoColor=white)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org) [![PWA](https://img.shields.io/badge/PWA-ready-5A0FC8?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

</div>

---

## Features

- **100% client-side** — your data never leaves your machine.
- **Light and dark mode** — follows your system and remembers your choice.
- **Instant command-palette search** — the search bar jumps to any tool.
- **Sticky input** — your work survives a refresh, and every tool has a **Share**
  button that turns your input into a link.
- **Drag and drop** — drop a file straight onto the input, or upload / download
  / copy with one click.
- **Offline-ready PWA** — install it and use it on a plane.
- **Accessible UI** — built on [Blueprint](https://blueprintjs.com/) for a clean,
  accessible interface.

## Tech Stack

| Area          | Tools                                                                 |
| ------------- | --------------------------------------------------------------------- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, static export)         |
| **UI**        | [React 19](https://react.dev/) · [Blueprint 6](https://blueprintjs.com/) |
| **Styling**   | [Tailwind CSS 4](https://tailwindcss.com/)                            |
| **Testing**   | [Vitest](https://vitest.dev/)                                         |
| **Tooling**   | [Biome](https://biomejs.dev/) (lint + format) · [TypeScript](https://www.typescriptlang.org/) |

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

To lint the project:

```bash
npm run lint
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

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please
[open an issue](https://github.com/kaushalmeena/digi-toolbox/issues/new/choose)
first to discuss it. For code changes, fork the repository, create a branch,
and open a pull request.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE)
file for details.
