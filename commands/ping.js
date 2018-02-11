const config = require("./config.json");
exports.run = (client, message, args) => {
  
  if(!message.author.id === config.blacklist) return;
    message.channel.send("**Waiting...**").then(sentMessage => sentMessage.edit("**:ping_pong: Pong! Took " + (new Date().getTime() - message.createdTimestamp) + "ms!**"))  
}