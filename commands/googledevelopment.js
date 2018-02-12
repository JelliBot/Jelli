var google = require('google')
 
exports.run = (client, message, args) => {

google.resultsPerPage = 2
var nextCounter = 0
 
google(args.join(" ") , function (err, res){
  if (err) console.error(err)
 
  for (var i = 0; i < res.links.length; ++i) {
    var link = res.links[i];
    message.channel.send(link.title + ' - ' + link.href)
    message.channel.send(link.description + "\n")
  }
 
  if (nextCounter < 1) {
    nextCounter += 2
    if (res.next) res.next()
  }
})
}