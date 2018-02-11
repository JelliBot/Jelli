const config = require("./config.json");
exports.run = (client, message, args) => {
 message.channel.send("**Sure thing! https://namemc.com/profile/" + args.join(" ") + " **") 
}