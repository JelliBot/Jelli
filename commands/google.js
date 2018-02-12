const config = require('../config.json')
exports.run = (client, message, args) => {
  if (!message.author.id === config.blacklist) return
  message.channel.sendMessage("The command \"google\" is currently under maitinence. Check back later.");
}
