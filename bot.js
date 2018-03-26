const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDI3NzgxODM0NjE3NjUxMjEw.DZpiZQ.famnBTdoUbyotiTvMN4_Fvr4n2k';
var PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('devkey');
pastebin
  .getPaste('SWppkfq7')
  .then(function (data) {
    // data contains the raw paste
    console.log(data);
  })
  .fail(function (err) {
    // Something went wrong
    console.log(err);
  })



ScriptLink = "   "
GameLink = "   "





client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
	var words = message.content.split(' ')
	if (words[0] === ':runmessage') {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "A new exploit from End Gaming!",
    url: "http://google.com",
    description: "Here are some instructions to go along with the exploit",
    fields: [{
        name: "Link to script",
        value: ScriptLink
      },
      {
        name: "Game Link",
        value: data
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: " "
    }
  }
});

	}
});

client.login(token);
