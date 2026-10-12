# 1Ai-API-Suite

Node CLI and HTTP client for the 1Ai chat API with redaction-aware logging.

## Why this exists

Third-party AI gateways need reproducible clients for security review and integration
testing on accounts you control.

## Features

- Commander CLI with config loading
- HTTP header and payload builders with tests
- Response redaction utilities

## Install

```bash
git clone https://github.com/HackerX-offical/1Ai-API-Suite.git
cd 1Ai-API-Suite
npm install
```

## Quick start

```bash
node src/cli/main.js
```

## Output

Stdout tables and chat responses; optional history files under configured paths.

## Develop

```bash
npm test
npm run format:check
```

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for module layout and extension points.

## Ethics

Use only on systems and content you are **authorized** to test. See
[SECURITY.md](./SECURITY.md).

## License

Licensed under the [HackerX License](./LICENSE). Redistributions must retain copyright,
license text, and [NOTICE](./NOTICE) attribution per the license terms.
