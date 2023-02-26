const config = new require('./config.json');
const fs = require("fs");

const discord = require('discord.js');
const client = new discord.Client({ intents: [
    discord.GatewayIntentBits.Guilds, 
    discord.GatewayIntentBits.GuildMessages, 
    discord.GatewayIntentBits.GuildMembers,
    discord.GatewayIntentBits.MessageContent,
]});

client.commands = new discord.Collection();

//hadnlers events
fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith('.js')) return;
      const event = require(`./events/${file}`);
      const eventName = file.split('.')[0];
      client.on(eventName, event.bind(null, client, discord));
    });
});

fs.readdir('./commands/', (err) => {
  if (err) return console.error(err);
  const commands = fs.readdirSync(`./commands/`).filter((file) => file.endsWith(".js"));

  for (const file of commands) {
    const cmd = require(`./commands/${file}`);
    if (cmd.name) {
      console.log(cmd.name);
      client.commands.set(cmd.name, cmd);
    } else {
      console.log(`Error: ${file}`);
    }
  }
});

client.login(config.token);