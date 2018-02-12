const config = require('../config.json')
exports.run = (client, message, args) => {
  if (!message.author.id === config.blacklist) return
  message.channel.sendMessage(":raised_hands: We are on **" + client.guilds.size + "** servers!")
}
