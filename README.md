# devplus

Monorepo structure for devplus project.

## Structure

- `apps/dashboard`: Main Next.js app with Tailwind + UI
- `apps/extension`: Chrome Extension UI + content script
- `packages/overlay-core`: Overlay logic (console hooks, state parser, etc.)
- `packages/devtools-bridge`: Code that hooks into React app (via **REACT_DEVTOOLS_GLOBAL_HOOK**)
- `packages/shared`: Shared types, constants, utilities
- `packages/ai-assistant`: AI assistant utils (OpenAI call, log summarizer)
- `public`: Shared static assets
