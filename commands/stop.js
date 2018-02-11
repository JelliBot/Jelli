exports.run = (client, message, args) => {
  const voiceChannel = message.member.voiceChannel;
  voiceChannel.leave();
  message.channel.send("**Gotcha covered!! Stopping and leaving the voice channel now!**");
}