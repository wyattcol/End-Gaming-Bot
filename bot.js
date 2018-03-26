const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDI3NzgxODM0NjE3NjUxMjEw.DZpiZQ.famnBTdoUbyotiTvMN4_Fvr4n2k';





ScriptLink = "http://fasttory.com/CnbU"
GameLink = "https://www.roblox.com/games/13822889/Lumber-Tycoon-2"







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
        value: GameLink
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
