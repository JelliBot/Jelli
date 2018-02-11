const config = require('./config.json')
exports.run = (client, message, args) => {
  if (!message.author.id === config.blacklist) return
  message.channel.send(':clock130:').then(sent => {
    sent.edit(`:ping_pong: in **${sent.createdTimestamp - message.createdTimestamp}** ms`) 
  })
}
