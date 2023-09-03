const github = require('@actions/github');

function congrats() {
  const repo = github.context.payload.repository;
  // Only works for `push` type of actions for now as this code assumes data in `github.context.payload` is for a `push` type
  const commit = github.context.payload.commits[0];

  console.log(commit.message);

  // Ignore CI messages
  if (commit.message.startsWith('[ci]')) {
    return;
  }
  // Removes "Signed-off-by" text
  const commitMessage = commit.message.split('\n')[0];

  const emojis = ['🥳', '🎉', '💪', '🦾', '🧑‍💻'];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const thanksMessages = ['Thank you,'];
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
}

congrats();
