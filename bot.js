const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDI3NzgxODM0NjE3NjUxMjEw.DZrqUA.l5F8cuj1vlK4PB0gfanhQIIB7j8';





ScriptLink = "Mining Simulator Script http://zipansion.com/93fw"
GameLink = "https://www.roblox.com/games/1417427737/NEW-PETS-Mining-Simulator"
VideoLink = "https://www.youtube.com/watch?v=sUcQMS-YXNE&feature=youtu.be"






//Post Updated Message Start
client.on("ready", () => {

    client.channels.find("name", "bot-commands").send({
        embed: {

            color: 3066993,

            author: {

                name: client.user.username,

                icon_url: client.user.avatarURL

            },

            title: "The bot has updated!",

            url: "https://discord.gg/8seFVK",

            description: "The End Gaming bot recieved an update.",

            fields: [{

                    name: "Test Message",

                    value: "Test Message Description"

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

//Request Script Start
client.on('message', words => {
  if (words[0] === ':requestscript') {
  	client.users.get('308212533309865996').send("Test")
  }
});




// client.on('message', message => {
//     var words = message.content.split(' ')
//     if (words[0] === ':requestscript') {
// client.users.get('308212533309865996').send({embed: {
//     color: 3447003,
//     author: {
//       name: client.user.username,
//       icon_url: client.user.avatarURL
//     },
//     title: (name) + " has requested a script!",
//     url: VideoLink,
//     description: "This is the script link.",
//     fields: [{
//         name: "Link to script",
//         value: words[1]
//       }
//     ],
//     timestamp: new Date(),
//     footer: {
//       icon_url: client.user.avatarURL,
//       text: "Bot created and managed by Orangedude4221"
//     }
//   }
// });
         
//     }
// });
//Request Script Finish

client.login(token);
