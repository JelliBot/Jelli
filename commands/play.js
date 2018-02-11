

const yt = require('ytdl-core');
    exports.run = (client, message, args) => {

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel){
      return message.channel.sendMessage(":x: You are not in a voice channel!!");
    }
	message.channel.sendMessage(`:white_check_mark: **Connected to ` + voiceChannel + `!**`);
    voiceChannel.join()
    .then(connection => {
	const args = message.content.split(" ").slice(1);
      let stream = yt(args.join(" "), {audioonly: true});
      yt.getInfo(args.join(" "), function(err, info) {
      const title = info.title
	  message.channel.send(`**Sure Thing! Now playing \ ${title}\.**`)
      }) 
      const dispatcher = connection.playStream(stream);
      dispatcher.on('end', () => {
       }).catch(e =>{
         console.error(e);
       });
    })
  }