fetch(process.env.DISCORD_WEBHOOK, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: `\`repo name\` [\`test\`](https://tauri.app) merged! Thanks \`username\` 🥳`,
    embeds: null,
    attachments: [],
    flags: 4,
  }),
});
