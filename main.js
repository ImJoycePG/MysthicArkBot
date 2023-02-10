const config = new require('./config.json');
const fs = require("fs");

const discord= require('discord.js');
const client = new discord.Client({ intents: [discord.GatewayIntentBits.Guilds, discord.GatewayIntentBits.GuildMessages, discord.GatewayIntentBits.GuildMembers]});

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith('.js')) return;
      const event = require(`./events/${file}`);
      const eventName = file.split('.')[0];
      client.on(eventName, event.bind(null, client, discord));
    });
});

client.login(config.token);