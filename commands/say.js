exports.run = (client, message, args) => {
    var user = (args.join(' '));
  user = user.replace('@', 'That person with an ID of ');
  message.channel.sendMessage(user);
}
