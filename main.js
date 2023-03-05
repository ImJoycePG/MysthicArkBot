const config = new require('./config.json');
const discord = require('discord.js');

const client = new discord.Client({ intents: [
    discord.GatewayIntentBits.Guilds, 
    discord.GatewayIntentBits.GuildMessages, 
    discord.GatewayIntentBits.GuildMembers,
    discord.GatewayIntentBits.MessageContent,
]});

client.events = new discord.Collection();
client.commands = new discord.Collection();
client.slash = new discord.Collection();

["handlersCommands", "handlersEvents", "handlersSlash"].forEach((file) => {
  require(`./functions/${file}`)(client, discord);
})

client.login(config.token);