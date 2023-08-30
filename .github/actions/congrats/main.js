const github = require('@actions/github');

const commit = github.context.payload.commits[0];
const repo = github.context.payload.repository;

fetch(process.env.DISCORD_WEBHOOK, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: `[\`${commit.message.split('\n')[0]}\`](${
      commit.url
    }) merged in [\`${repo.name}\`](${repo.url})! Thanks \`${
      commit.author.username
    }\` 🥳`,
    embeds: null,
    attachments: [],
    flags: 4,
  }),
});
