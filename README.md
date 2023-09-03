# Tauri Automations

Automations that are used across the `tauri-apps` GitHub organization.

## Workflows

### [`congrats`](.github/workflows/congrats.yml)

Sends a message to a Discord channel with the last commit's message, author, and the repo it was posted in. Will ignore any commits that start with `[ci]`.

Note: Currently only works for `push` triggers.

**Inputs**

- `DISCORD_WEBHOOK` (required): See workflow for documentation

**Example**

```yml
on:
  push:
    branches: [dev]

jobs:
  congrats:
    uses: tauri-apps/automation/.github/workflows/congrats.yml@main
    secrets:
      DISCORD_WEBHOOK: ${{ secrets.DISCORD_WEBHOOK }}
```
