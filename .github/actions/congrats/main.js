const github = require('@actions/github');

const payload = fetch(process.env.DISCORD_WEBHOOK, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: `[\`${JSON.stringify(
      github.context.payload.commits[0].message
    )}\`](${github.context.payload.commits[0].url}) merged in \`${
      github.context.repo.repo
    }\`! Thanks \`${github.context.payload.commits[0].author.username}\` 🥳`,
    embeds: null,
    attachments: [],
    flags: 4,
  }),
});
