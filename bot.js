const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDI3NzgxODM0NjE3NjUxMjEw.DZrqUA.l5F8cuj1vlK4PB0gfanhQIIB7j8';





ScriptLink = "http://rapidteria.com/5TMt"
GameLink = "https://www.roblox.com/games/654732683/Car-Crushers-2-Beta"
VideoLink = "https://www.youtube.com/watch?v=9ryAS102lLI&feature=youtu.be"






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
      text: " "
    }
  }
});
	
	}
});

client.login(token);
