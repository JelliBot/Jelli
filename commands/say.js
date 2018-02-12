const config = require('../config.json')
exports.run = (client, message, args) => {
  if (!message.author.id === config.blacklist) return
    var user = (args.join(' '));
  user = user.replace('@', 'That person with an ID of ');
  message.channel.sendMessage(user);
}
