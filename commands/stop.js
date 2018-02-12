exports.run = (client, message, args) => {
  message.member.voiceChannel.leave()
  message.channel.send('**OK**! Stopping and leaving the voice channel now...')
}
