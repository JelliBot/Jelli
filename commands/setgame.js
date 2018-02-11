const config = require("./config.json");
exports.run = (client, message, args, config) => {
   if(message.author.id !== config.ownerID) return;
      client.user.setGame(args.join(" "))
      message.channel.send(" :white_check_mark:  **Sure thing, I've set my game to '" + args.join(" ") + ".'**")
}