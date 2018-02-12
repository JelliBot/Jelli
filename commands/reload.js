exports.run = (client, message, args) => {
  if (message.author.id !== process.env.ownerID) return
  if(!args || args.size < 1) return message.reply(':no_entry: **No command to reload!**')
  delete require.cache[require.resolve(`./${args[0]}.js`)]
  message.reply(`:white_check_mark: **OK**! Command ${args[0]} reloaded`)
}
