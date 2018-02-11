exports.run = (client, message, args, config) => {
  message.channel.sendMessage(`:scream: ${message.author.username} **just slapped** ${args.join(' ')}!`)
}
