# ghostaff.ai

The public website of Ghostaff. See [AGENTS.md](AGENTS.md).

## Setup

```bash
git clone git@github.com:ghostaff-ai/web.git ~/githubs/ghostaff-ai/web
cd ~/githubs/ghostaff-ai/web && pnpm install && pnpm dev
```

To make the film (docs/film.md), Claude Code needs Higgsfield's MCP server, signed in with the
Ghostaff Higgsfield account:

```bash
claude mcp add --transport http --scope user higgsfield https://mcp.higgsfield.ai/mcp
```
