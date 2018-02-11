const config = require('./config.json')
exports.run = (client, message, args) => {
  message.channel.send(`https://www.namemc.com/profile/${args.join(' ')}`)
}
