const config = require('../config.json')
exports.run = (client, message, args) => {
  if (message.author.id !== config.ownerID) return
  let command = message.content.replace(config.prefix + 'eval ', '')
  let output = eval(command)
  message.channel.send(`**INPUT**: \n \`\`\`` + args.join(' ') + ` \`\`\` \n **OUTPUT**: \n \`\`\`${output}\`\`\``)
}
