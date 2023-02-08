const config = new require('./config.json');

const Discord= require('discord.js');
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds]});

const readyEvent = require('./Events/ReadyEvent.js');

client.on('ready', () => {
    readyEvent.ready(client);
    console.log(`${client.user.username} ha encendido correctamente.`);
});


client.login(config.token);