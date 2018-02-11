const config = require('./config.json')
exports.run = (client, message, args) => {
  if (!message.author.id !== config.blacklist) return
  message.channel.sendMessage(args.join(' '));
}
