const github = require('@actions/github');

const repo = github.context.payload.repository;
const commit = github.context.payload.commits[0];
// Removes "Signed-off-by" text
const commitMessage = commit.message.split('\n')[0];

const emojis = ['🥳', '🎉', '💜', '💪', '🦾'];
const emoji = emojis[Math.floor(Math.random() * emojis.length)];

const thanksMessages = ['Thanks'];
const thanksMessage =
  thanksMessages[Math.floor(Math.random() * thanksMessages.length)];

fetch(process.env.DISCORD_WEBHOOK, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: `[\`${commitMessage}\`](${commit.url}) merged in [\`${repo.name}\`](${repo.url})! ${thanksMessage} \`${commit.author.username}\` ${emoji}`,
    embeds: null,
    attachments: [],
    flags: 4,
  }),
});
