# 1Ai-API-Suite architecture

Node CLI wrapping the 1Ai chat HTTP API.

```
src/
  cli/         # Commander entry
  config/      # Env-driven API URLs and headers
  core/        # HTTP client, history
  services/    # API orchestration
  modules/chat/
```
