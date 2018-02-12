const yt = require('ytdl-core')
exports.run = (client, message, args) => {
  const voiceChannel = message.member.voiceChannel
  if (!voiceChannel) return message.channel.sendMessage(':no_entry: **You are not in a voice channel.**')
  voiceChannel.join().then(conn => {
    message.channel.sendMessage(`:white_check_mark: **Connected to** ${voiceChannel}`)
    const args = message.content.split(' ').slice(1)
    const stream = yt(args.join(' '), {audioonly: true})
    yt.getInfo(args.join(' '), (err, info) => {
        message.channel.send(`:radio: **Now playing** ${info.title}, requested by ` + message.author.username)
    })
    const dispatcher = conn.playStream(stream)
    dispatcher.on('end', () => {}).catch(console.error)
  })
}
