# 1Ai-API-Suite — architecture

## Purpose

Layers config, HTTP client, chat module, and CLI. Non-goals: credential stuffing or
abusing shared API keys.

## High-level flow

```mermaid
flowchart LR
  CLI[CLI] --> Core[Core engine]
  Core --> Modules[Domain modules]
  Modules --> Reporters[Reporters]
```

## Module map

| Path                      | Responsibility          |
| ------------------------- | ----------------------- |
| `src/cli/main.js`         | CLI entry               |
| `src/core/http_client.js` | HTTP session            |
| `src/modules/chat/`       | Chat service            |
| `src/chat/payload.ts`     | Request payload builder |

## Extension

1. Add a module under the appropriate `src/` folder.
2. Register it in the orchestrator (if applicable).
3. Add unit tests with mocks — no live network in unit tests.
4. Run `npm test` and `npm run format:check`.

## Testing strategy

- **Unit**: mocked I/O, pure parsers, reporters.
- **Integration** (if present): live targets documented in README; optional in CI or
  scheduled.

## Ethics & scope

Authorized engagements only. See [SECURITY.md](./SECURITY.md).
