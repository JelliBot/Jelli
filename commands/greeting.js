exports.run = (client, message, args) => {
client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("welcome").send(`Hey there! "${member.user.username}" has joined "${member.guild.name}"`);
});
}
