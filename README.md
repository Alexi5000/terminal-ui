# 🖥️ terminal-ui

> Beautiful terminal-like UI components for the web. Build CLI experiences in React.

[![CI](https://github.com/Alexi5000/terminal-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/Alexi5000/terminal-ui/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![AI Agent Friendly](https://img.shields.io/badge/AI%20agents-welcome-purple.svg)](AGENTS.md)

> 🤖 **AI Agent Friendly!** This repo has comprehensive guides for AI agents (OpenClaw, etc.) to contribute automatically. See [AGENTS.md](AGENTS.md) and [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md).

## Why this fork exists

**What it does.** terminal-ui is a Next.js and React component library that renders terminal-style interfaces in the browser: a window container, command and output lines, logs, progress, tables, trees, diffs, prompts, tabs, and a local playground at `/playground`. This fork keeps the upstream components and adds a CI quality gate (lint, typecheck, smoke test, build), a repository contract test, and fork policy documents.

**Who it serves.** Developers building operator consoles or dashboards for AI agents and automation, who need agent state, streaming output, and operator input to be visible and keyboard accessible, and who want a reproducible local validation path before shipping.

**Why Alex forked it.** The fork was created on 2026-02-25 (GitHub `created_at`). The first fork-only commits establish it as an agent-interface reference: `ffbb504` (2026-08-17, "ci: add lint and smoke-test quality gates") and `8357f2d` (2026-08-18, "chore: establish agent-interface fork standards"), which added `FORK_POLICY.md`, `SUPPORT.md`, `SECURITY.md`, and the contract test. `FORK_POLICY.md` records the purpose as "an applied terminal-interface reference fork" that adds "guidance for agent-building, automation visibility, operator experience, repository quality, and safe integration review". Later fork-only commits are maintenance: `360510b` (2026-10-18, dependency refresh and a vendored `braces` recursion guard) and `af6c6c2` (2026-10-20, compile Tailwind styles and respect reduced motion).

**Real-world use case (2025–2026 evidence).** **Proposed use case.** A team running coding agents wants a browser console that shows each agent's command stream, tool output, and diffs, with keyboard navigation and a reduced-motion mode. The playground in this repository demonstrates those primitives, but no deployment of such a console is recorded here. The stack choices are current: Tailwind CSS v4 moved to a CSS-first configuration and a new engine in January 2025[^1], Next.js 16 shipped in October 2025 with Turbopack as the default bundler[^2], React 19.2 added Activity and View Transitions in October 2025[^3], and Node.js 24 (the CI runtime here) was released in May 2025[^4].

| Use case | Starting point |
|---|---|
| Agent-control or operator console | Start with `TerminalApp`, `TerminalLog`, `TerminalStatusBar`, and `TerminalPrompt` to make activity and operator input visible. |
| AI-assisted developer tool | Use `TerminalCommand`, `TerminalOutput`, `TerminalDiff`, and `TerminalTree` for inspectable command, patch, and repository workflows. |
| Tool-connected automation interface | Combine `TerminalPane`, `TerminalTabs`, `TerminalAlert`, and `TerminalProgress` to surface state, review points, and safe user confirmation. |
| Learning and prototyping | Use the playground and the component matrix to evaluate accessible terminal UI patterns before adapting them to a production application. |

[^1]: Tailwind CSS v4.0 release post, tailwindcss.com, published 2025-01-22. https://tailwindcss.com/blog/tailwindcss-v4
[^2]: Next.js 16 release post, nextjs.org, published 2025-10-21. https://nextjs.org/blog/next-16
[^3]: React 19.2 release post, react.dev, published 2025-10-01. https://react.dev/blog/2025/10/01/react-19-2
[^4]: Node.js 24.0.0 release notes, nodejs.org, published 2025-05-06. https://nodejs.org/en/blog/release/v24.0.0

## 🎯 What is this?

A collection of React components that bring the elegance of terminal UIs to the browser. Perfect for:

- 🤖 AI agent interfaces (like OpenClaw)
- 📚 Interactive CLI tutorials
- 🎮 Developer tools and dashboards
- 🎨 Retro-futuristic web apps

## ✨ Features

- 🎨 **Beautiful out of the box** - Glassmorphic design with smooth animations
- ⚡ **Lightweight** - No heavy dependencies
- 🎹 **Keyboard-first** - Full keyboard navigation support
- 🌈 **Syntax highlighting** - Built-in code formatting
- 📱 **Responsive** - Works on desktop and mobile
- 🎭 **Customizable** - Theming system with CSS variables

## Verified setup

Use Node.js 24 and pnpm 10.28.2 (the version declared by `package.json`). The following workflow installs the locked dependency tree, starts the local component playground, and verifies the repository-quality contract.

```bash
git clone https://github.com/Alexi5000/terminal-ui.git
cd terminal-ui
pnpm install --frozen-lockfile
pnpm run dev
```

Open `http://localhost:3000` to use the local playground. Before opening a pull request, run:

```bash
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
```

The package is not published to the npm registry as of 2026-10-21 (`npm view @openknots/terminal-ui` returns 404), and `package.json` declares no `main` or `exports` entry. To use the components in another application, copy the files you need from `components/` and `lib/` into your project and import them through your own path alias, as the playground does:

```tsx
import { Terminal, TerminalCommand, TerminalOutput } from '@/components/terminal'

export default function App() {
  return (
    <Terminal prompt="user@demo">
      <TerminalCommand>npm install terminal-ui</TerminalCommand>
      <TerminalOutput>✓ Installed terminal-ui@0.1.0</TerminalOutput>
    </Terminal>
  )
}
```

## 📦 Components

### Available Now

- **Terminal** - Main container with window chrome
- **TerminalCommand** - Render a command with prompt
- **TerminalOutput** - Format command output
- **TerminalSpinner** - Loading indicators

### Also implemented in this repository

- **TerminalProgress** - Progress bars ([components/terminal-progress.tsx](components/terminal-progress.tsx))
- **TerminalTable** - Render tables ([components/terminal-table.tsx](components/terminal-table.tsx))
- **TerminalTree** - File tree views ([components/terminal-tree.tsx](components/terminal-tree.tsx))
- **TerminalPrompt** - Interactive input ([components/terminal-prompt.tsx](components/terminal-prompt.tsx))

See the status matrix below for maturity. Upstream good-first-issues live at [OpenKnots/terminal-ui/issues](https://github.com/OpenKnots/terminal-ui/issues?q=label%3A%22good-first-issue%22).

## 📊 Component Status Matrix

| Component | Status | Keyboard Support | Notes |
|---|---|---|---|
| `Terminal` | ✅ Stable | ✅ | Core window chrome + content container |
| `TerminalCommand` | ✅ Stable | ✅ | Prompt + command line rendering |
| `TerminalOutput` | ✅ Stable | ✅ | Semantic output colors + optional animation |
| `TerminalSpinner` | ✅ Stable | ✅ | Braille frame animation for loading states |
| `TerminalTree` | ✅ Stable | ✅ | Expandable tree with render-props + keyboard nav |
| `TerminalBadge` | ✅ Stable | n/a | Inline status badges with variant colors |
| `TerminalDiff` | ✅ Stable | ✅ | Unified and split diff views |
| `TerminalLog` | 🧪 Beta | ✅ | Streaming log viewer with capped history |
| `TerminalTable` | 🧪 Beta | ✅ | Terminal-style tabular data |
| `TerminalPrompt` | 🧪 Beta | ✅ | Interactive prompt patterns |
| `TerminalProgress` | 🧪 Beta | ✅ | Progress indicators |
| `TerminalAutocomplete` | 🧪 Beta | ✅ | Command autocomplete with fuzzy matching |
| `ThemeSwitcher` | ✅ Stable | ✅ | Runtime theme dropdown with localStorage |
| `GhosttyThemePicker` | 🧪 Beta | ✅ | Ghostty theme parser + picker grid |

> Legend: ✅ Stable = production-ready baseline, 🧪 Beta = usable with active iteration.

## 🎮 Live Demo

[**→ View the Playground**](https://terminal-ui.vercel.app)

## 🤖 For AI Agents (OpenClaw, etc.)

This repository is **designed for AI agent contributions**. Complete documentation provided:

### Quick Start

**Simplest approach:**

```
@agent Read https://github.com/OpenKnots/terminal-ui/blob/main/AGENTS.md
and implement a good-first-issue
```

**What AGENTS.md contains:**
- ✅ Complete project structure
- ✅ Step-by-step theme guide (just copy-paste CSS)
- ✅ Component templates with examples
- ✅ Development workflow (setup → test → PR)
- ✅ Styling rules and patterns
- ✅ PR checklist and examples
- ✅ Common pitfalls to avoid

### Example Task

```bash
# Task: Add Dracula color theme (5 minutes)

1. Read AGENTS.md section "Adding a Color Theme"
2. Get official colors from draculatheme.com
3. Add theme block to app/globals.css
4. Run `pnpm run build` to verify
5. Take screenshot
6. Open PR with title "feat: add Dracula color theme"
7. Include screenshot and checklist
```

### Key Resources

- **[AGENTS.md](AGENTS.md)**: Complete agent guide (13KB, read this first!)
- **[PROJECT_CONTEXT.md](PROJECT_CONTEXT.md)**: Project status and decisions
- **[OPENCLAW_USAGE.md](OPENCLAW_USAGE.md)**: OpenClaw-specific instructions
- **[.github/STARTER_ISSUES.md](.github/STARTER_ISSUES.md)**: 12 pre-written issues to implement

### What Agents Can Do

| Task | Time | Difficulty | Guide Section |
|------|------|------------|---------------|
| Add color theme | 5 min | ⭐ Easy | "Adding a Color Theme" |
| Create TerminalProgress | 15 min | ⭐⭐ Medium | "Creating a Component" |
| Add JSDoc comments | 10 min | ⭐ Easy | "Component Guidelines" |
| Fix mobile scrolling | 20 min | ⭐⭐ Medium | Follow issue #7 |

All tasks include:
- Step-by-step instructions in the issue
- Code templates in AGENTS.md
- Clear acceptance criteria
- Example PRs to reference

### Success Rate

Agents that follow AGENTS.md consistently produce **production-ready PRs** that can be merged immediately. The guide includes:

- ✅ TypeScript patterns
- ✅ Component templates
- ✅ Styling rules (CSS variables + Tailwind)
- ✅ Testing workflow
- ✅ PR checklist
- ✅ Common mistakes to avoid

**Result:** High-quality automated contributions! 🎉

## Support and responsible use

For a reproducible component defect, documentation correction, or fork-specific improvement, open a focused [GitHub issue](https://github.com/Alexi5000/terminal-ui/issues) with the affected component, browser or runtime details, expected behavior, and sanitized reproduction steps. For support, security, conduct, and fork-maintenance expectations, read [SUPPORT.md](./SUPPORT.md), [SECURITY.md](./SECURITY.md), [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md), and [FORK_POLICY.md](./FORK_POLICY.md).

Do not include API keys, OAuth tokens, private prompts, customer data, or unreported vulnerabilities in public issues. Treat every agent or automation integration as code requiring its own credentials review, least-privilege design, and confirmation model for consequential external actions.

## Security

No open Dependabot, code-scanning, or secret-scanning alerts were recorded for this repository on 2026-10-20. Fork commit `360510b` (2026-10-18) refreshed dependencies and pinned `braces` to a vendored `3.0.3` build with a recursion guard (`vendor/braces-3.0.3.tgz`, enforced through `pnpm.overrides` and checked by `scripts/verify-braces.mjs` during `pnpm run build`). Report vulnerabilities through [SECURITY.md](SECURITY.md), not public issues.

## Upstream

- Upstream project: [OpenKnots/terminal-ui](https://github.com/OpenKnots/terminal-ui)
- Upstream license: MIT, preserved unchanged in [LICENSE](LICENSE). This fork does not relicense.
- Fork created: 2026-02-25 (GitHub `created_at`)
- Sync state on 2026-10-20: 4 commits ahead of `upstream/main`, 0 behind (`gh api repos/Alexi5000/terminal-ui/compare/OpenKnots:main...Alexi5000:main`).

**What changed in this fork** (`git log upstream/main..origin/main`, 4 commits, 33 files changed, +4538/-2375):

- `8357f2d` (2026-08-18): fork standards, including `FORK_POLICY.md`, `SUPPORT.md`, `SECURITY.md`, `AGENTS.md` updates, and `tests/project-contract.test.mjs`.
- `ffbb504` (2026-08-17): `.github/workflows/ci.yml` quality gate (lint, typecheck, smoke test, build) and a PR title check.
- `360510b` (2026-10-18): dependency refresh and the vendored `braces` recursion guard.
- `af6c6c2` (2026-10-20): compiled Tailwind styles, mobile layout fixes, and `prefers-reduced-motion` handling.

Upstream authors and contributors retain full credit for their work. Fork-specific documentation, agent-interface guidance, and quality automation are maintained by Alex Cinovoj, Founder & CTO of TechTide AI; they should not be represented as upstream policy unless separately accepted upstream.

## 🤝 Contributing

We **love** contributions! This repo is designed for practice PRs.

**Good first issues:**
- 🎨 Add a new color theme
- 📦 Create a new component
- 📚 Improve documentation
- 🐛 Fix a bug
- ✨ Add an example

**For Humans:**
- 📖 [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- 💡 [GOOD_FIRST_ISSUES.md](GOOD_FIRST_ISSUES.md) - Ideas for PRs
- 🛡️ [.github/BRANCH_PROTECTION.md](.github/BRANCH_PROTECTION.md) - Recommended merge safeguards

**For AI Agents:**
- 🤖 [AGENTS.md](AGENTS.md) - Complete agent guide (start here!)
- 🎯 [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) - Project overview & status
- 🚀 [OPENCLAW_USAGE.md](OPENCLAW_USAGE.md) - How to use with OpenClaw

**Quick Start for Agents:**

```
1. Read AGENTS.md (complete patterns & templates)
2. Browse good-first-issues: https://github.com/OpenKnots/terminal-ui/issues?q=label%3A%22good-first-issue%22
3. Pick an issue, follow AGENTS.md guide
4. Open PR with checklist completed
```

## 🎯 Project Goals

1. **Make CLI UIs accessible** - Bring terminal aesthetics to the web
2. **Practice PR workflow** - Use a focused branch, run the quality checks, and open a pull request with validation evidence.
3. **Build community** - Create a library together

## 📜 License

MIT © OpenKnots

---

Built with ❤️ by the OpenClaw community
