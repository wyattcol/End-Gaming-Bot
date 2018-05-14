const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDI3NzgxODM0NjE3NjUxMjEw.DZrqUA.l5F8cuj1vlK4PB0gfanhQIIB7j8';





ScriptLink = "Mining Simulator Script http://zipansion.com/93fw"
GameLink = "https://www.roblox.com/games/1417427737/NEW-PETS-Mining-Simulator"
VideoLink = "https://www.youtube.com/watch?v=sUcQMS-YXNE&feature=youtu.be"






//Post Updated Message Start
client.on("ready", () => {
client.channels.get(315160645345607681).send({
   // client.channels.find("name", "bot-commands")
        embed: {

            color: 3066993,

            author: {

                name: client.user.username,

                icon_url: client.user.avatarURL

            },

            title: "@here The bot has updated!",

            url: "https://discord.gg/8seFVK",

            description: "The End Gaming bot recieved an update.",

            fields: [{

                    name: "Script Requests",

                    value: "With the bot, you now are able to send script requests directly to End Gaming! Just type, :requestscript (Link to script)!"

                }

            ],

            timestamp: new Date(),

            footer: {

                icon_url: client.user.avatarURL,

                text: "Bot created and managed by Orangedude4221"

            }

        }

    });

});
//Post Updated Message End


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


client.on('message', message => {
  var words = message.content.split(' ')
  if (words[0] === ':requestscript') {
   client.users.get('308212533309865996').send("New Request from " + message.author + " He/She requests this script. " + words[1]);
  }
});
//Request Script Finish

// client.on('message', message => {
//    if (message.content.startsWith("||say ")) {
//       message.delete(1000); //Supposed to delete message
//       message.channel.send(message.content.slice(5, message.content.length));
//    }
// });

client.login(token);
