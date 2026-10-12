# 1AI API Testing Suite

A professional, "end-to-end" API testing framework designed for the 1AI ecosystem. This
codebase provides deep insights into network requests, error handling, credit
management, and message history.

##  Key Features

- **CLI-First Workflow**: Rich, interactive terminal experience powered by `commander`
  and `ora`.
- **Persistent History**: Automatically logs every request and response to a local JSON
  database so you never lose a trace.
- **Advanced Networking**: Built on a modular `HttpClient` with interceptors for
  request/response metrics (latency tracking).
- **Environment Isolation**: Secure credential management via `.env`.
- **Modular Architecture**:
  - `src/core`: Low-level networking and data persistence.
  - `src/modules`: Feature-specific logic (Chat, User).
  - `src/cli`: Command-line interface definitions.
  - `src/utils`: Formatting and logging helpers.

##  Getting Started

### 1. Installation

```bash
npm install
```

### 2. Configuration

Ensure your `.env` file is set up:

```bash
cp .env.example .env
# Edit .env with your Token and IDs
```

### 3. Usage

The suite is run via `node index.js`.

**Send a Message:**

```bash
node index.js chat "Hello, is this working?"
```

**View Request History:**

```bash
node index.js history
```

**Run Deep Diagnostics:**

```bash
node index.js probe
```

**Change Model:**

```bash
node index.js chat "Test message" --model "google/gemini-2.5-flash"
```

##  Under the Hood

- **Interceptors**: Every request is stamped with a UUID and start time. Network latency
  is calculated and logged.
- **Fail-Safe Logging**: Even if the network crashes, errors are serialized and stored
  in `src/data/history.json` for post-mortem analysis.

---

_Built for High-Level API Security & Reliability Testing_

## License

Licensed under the [HackerX License](./LICENSE). Redistributions must retain copyright,
license text, and [NOTICE](./NOTICE) attribution per the license terms.
