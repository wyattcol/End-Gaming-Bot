const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDI3NzgxODM0NjE3NjUxMjEw.DZrqUA.l5F8cuj1vlK4PB0gfanhQIIB7j8';





ScriptLink = "Mining Simulator Script http://zipansion.com/93fw"
GameLink = "https://www.roblox.com/games/1417427737/NEW-PETS-Mining-Simulator"
VideoLink = "https://www.youtube.com/watch?v=sUcQMS-YXNE&feature=youtu.be"






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
    url: VideoLink,
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
      text: "Bot created and managed by Orangedude4221"
    }
  }
});
		
	}
});

client.login(token);
