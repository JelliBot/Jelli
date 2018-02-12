exports.run = (client, message, args, config) => {
  
  var user = (args.join(' '));
  user = user.replace('@', 'That person with an ID of ');
  message.channel.sendMessage(`:scream: ${message.author.username} **just slapped** ` + user + `!`)
}
