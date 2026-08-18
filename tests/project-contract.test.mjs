import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const repositoryRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => readFileSync(join(repositoryRoot, relativePath), "utf8");
const packageJson = JSON.parse(read("package.json"));
const readme = read("README.md");
const homePage = read("app/page.tsx");

test("package exposes the complete local quality contract", () => {
  for (const script of ["lint", "typecheck", "test", "test:smoke", "build"]) {
    assert.ok(packageJson.scripts[script], `missing package script: ${script}`);
  }

  assert.equal(packageJson.packageManager, "pnpm@10.28.2");
});

test("agent-oriented terminal primitives and playground routes are present", () => {
  for (const path of [
    "components/terminal-app.tsx",
    "components/terminal-log.tsx",
    "components/terminal-prompt.tsx",
    "components/terminal-status-bar.tsx",
    "components/terminal.tsx",
    "app/playground/page.tsx",
  ]) {
    assert.ok(existsSync(join(repositoryRoot, path)), `missing interface primitive: ${path}`);
  }

  assert.match(homePage, /TerminalApp/);
  assert.match(homePage, /href="\/playground"/);
});

test("README states the fork purpose, verified setup, use cases, and support path", () => {
  for (const marker of [
    "## Alexi5000 fork purpose",
    "Alexi5000’s applied terminal-interface reference fork",
    "## Verified setup",
    "pnpm install --frozen-lockfile",
    "pnpm run test",
    "## Support and responsible use",
    "## Upstream attribution",
  ]) {
    assert.ok(readme.includes(marker), `missing README marker: ${marker}`);
  }
});

test("community health and fork-maintenance policies are present", () => {
  for (const policy of [
    "CODE_OF_CONDUCT.md",
    "CONTRIBUTING.md",
    "FORK_POLICY.md",
    "LICENSE",
    "SECURITY.md",
    "SUPPORT.md",
  ]) {
    assert.ok(existsSync(join(repositoryRoot, policy)), `missing policy: ${policy}`);
  }
});
