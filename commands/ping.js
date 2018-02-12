exports.run = (client, message, args) => {
  message.channel.send(':clock130:').then(sent => {
    sent.edit(`:ping_pong: in **${sent.createdTimestamp - message.createdTimestamp}** ms`) 
  })
}
