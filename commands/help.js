const config = require('../config.json')
exports.run = (client, message, args) => {
  if (!message.author.id === config.blacklist) return
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Help',
    description: 'Here\'s some of my commands',
    fields: [{
      name: 'Moderation Commands',
      value: 'kick [user], ban [user], reload [owner only], eval [owner only]'
    },
    {
      name: 'Normal Commands',
      value: 'help, ping, say [text], 8ball [question], google [query], slap [user]'
    },
    {
      name: 'Voice Commands',
      value: 'play [youtube url], stop'
    }],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: '© Jelli'
    }
  }})
}
