exports.run = (client, message, args) => {
  message.channel.sendMessage(":raised_hands: We are on **" + client.guilds.size + "** servers!")
}
