# Fork policy

## Purpose

Alexi5000/terminal-ui is an applied terminal-interface reference fork of [OpenKnots/terminal-ui](https://github.com/OpenKnots/terminal-ui). It preserves upstream credit and MIT licensing while adding Alexi5000-specific guidance for agent-building, automation visibility, operator experience, repository quality, and safe integration review.

## Maintenance boundary

The upstream project remains authoritative for its original component library and community decisions. This fork is authoritative for files that define its own purpose, support and security paths, fork policy, quality checks, and agent-interface review guidance. Do not present fork-only standards as upstream policy.

Improvements that are broadly useful to the upstream project and independent of this fork’s operating model should be considered for an upstream contribution. Guidance specific to Alexi5000’s agent-engineering practice belongs in this fork.

## Synchronization discipline

Before syncing upstream, review incoming changes, preserve fork-specific policy files, run the local quality contract, and record meaningful conflicts or intentional deviations in the resulting commit or pull request. Never remove upstream author credit, licenses, or contributor attribution.

## Agent-interface readiness

Terminal UI components are presentation primitives, not authorization or safety controls. A consumer claiming production readiness should document its action-confirmation design, credential boundaries, handling of untrusted output, accessibility requirements, auditability, and operational context before deployment.
