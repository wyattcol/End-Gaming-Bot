const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDI3NzgxODM0NjE3NjUxMjEw.DZrqUA.l5F8cuj1vlK4PB0gfanhQIIB7j8';





ScriptLink = "http://fasttory.com/CnbU"
GameLink = "https://www.roblox.com/games/13822889/Lumber-Tycoon-2"
VideoLink = "https://www.youtube.com/watch?v=U4Qr3BVrIXk"






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
		
		
client.on('message', message => {
	var words = message.content.split(' ')
	if (words[0] === ':cshelp') {
message.guild.channels.find("name", "helprequests").send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help Request",
    url: "",
    description: "Someone needs help with something!",
    fields: [{
        name: "Users name",
        value: name
      },
      {
        name: "Instructions",
        value: "Dm " + name + " and ask them how they need assistance. If you cannot figure out how to help them ask another staff member to try."
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
