const config = require('./config.json')
exports.run = (client, message, args, config) => {
   if (message.author.id !== config.ownerID) return
   client.user.setGame(args.join(' '))
   message.channel.send(`:white_check_mark: **OK**! Game set to ${args.join(' ')}`)
}
