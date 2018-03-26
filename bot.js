const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDI3NzgxODM0NjE3NjUxMjEw.DZpiZQ.famnBTdoUbyotiTvMN4_Fvr4n2k';
VideoLink = ""






client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
	let args = message.content.split(" ").slice(0);
	if (words[0] === ':announce') {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Announcement!",
    url: VideoLink,
    description: "This is an important message",
    fields: [{
        name: "Announcement",
        value: args
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
