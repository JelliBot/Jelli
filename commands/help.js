const config = require("./config.json");
exports.run = (client, message, args) => {
  
  if(!message.author.id === config.blacklist) return;
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Sure, I can help you out.",
    description: "Here's some of my commands",
    fields: [{
        name: "Moderation Commands",
        value: "Kick"
      },
      {
        name: "Normal Commands",
        value: "Help \nPing \nReload \nSay"
      },
      {
        name: "Markdown",
        value: "Toothbrush \nBan"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Jelly"
    }
  }
});
}