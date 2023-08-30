const github = require('@actions/github');

fetch(process.env.DISCORD_WEBHOOK, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: `[\`${
      github.context.payload.commits[0].message.split('\n')[0]
    }\`](${github.context.payload.commits[0].url}) merged in \`${
      github.context.payload.repository.url
    }\`! Thanks \`${github.context.payload.commits[0].author.username}\` 🥳`,
    embeds: null,
    attachments: [],
    flags: 4,
  }),
});
