import github from '@actions/github';

fetch(process.env.DISCORD_WEBHOOK, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: `\`${github.context.repo.repo}\` [\`test\`](https://tauri.app) merged! Thanks \`username\` 🥳`,
    embeds: null,
    attachments: [],
    flags: 4,
  }),
});
