const github = require('@actions/github');

const payload = fetch(process.env.DISCORD_WEBHOOK, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: `[\`${JSON.stringify(
      github.context.payload.head_commit.message
    )}\`](${github.context.payload.head_commit.url}) merged in \`${
      github.context.repo.repo
    }\`! Thanks \`${github.context.payload.head_commit.author.username}\` 🥳`,
    embeds: null,
    attachments: [],
    flags: 4,
  }),
});
