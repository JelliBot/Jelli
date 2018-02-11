const config = require("./config.json");
exports.run = (client, message, args) => {
  if(!message.author.id === config.blacklist) return;
  if(!args || args.size < 1) return message.reply("**Uh oh! You didn't give me a command to reload! D:**");
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`:thumbsup: **All done! My command, ${args[0]}, has been reloaded. ** :smiley:`);
};