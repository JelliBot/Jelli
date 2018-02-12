exports.run = (client, message, args, config) => {
   if (message.author.id !== process.env.ownerID) return
   client.user.setGame(args.join(' '))
   message.channel.send(`:white_check_mark: **OK**! Game set to ${args.join(' ')}`)
}
