# Security policy

## Reporting a vulnerability

Do **not** disclose suspected vulnerabilities in a public issue, pull request, or discussion. Send a concise report through the private contact path at [TechTide AI](https://techtideai.io), including the affected component or route, prerequisites, sanitized reproduction steps, potential impact, and a suggested mitigation when available.

Reports involving exposed credentials, unsafe browser or tool actions, untrusted content rendering, cross-site scripting, dependency compromise, unsafe local-storage behavior, accessibility failures that block safety controls, or misleading agent/automation status are in scope. Do not include real API keys, OAuth tokens, private prompts, customer data, or production logs in the report.

Maintainers will acknowledge credible reports, assess scope and severity, coordinate remediation, and communicate disclosure timing as appropriate. Please allow a reasonable remediation period before public disclosure.

## Safe integration guidance

This project can be used to visualize agent and automation activity, but it does not make an external action safe by itself. Design the consuming application with least-privilege credentials, clear action previews, explicit confirmation for consequential operations, secure handling of untrusted content, and reviewable logs appropriate to its deployment environment.

For ordinary support, use [SUPPORT.md](./SUPPORT.md). For contribution workflow, use [CONTRIBUTING.md](./CONTRIBUTING.md).
