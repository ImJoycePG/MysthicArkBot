const Discord= require('discord.js');
const config = require('../config.json')

module.exports = {
    ready: function(client){
        let status = [
            { name: '🐤 @ImJoycePG', type: Discord.ActivityType.Playing },
            { name: '🐤 @MysthicArk', type: Discord.ActivityType.Playing },
        ];
        
        setInterval(() => {
            const statusRandom = status[Math.floor(Math.random() * status.length)];

            client.user.setActivity(statusRandom.name, { type: statusRandom.type });
        }, 5000);
        const channel = client.channels.cache.find(channel => channel.id === config.channelLoadBot);
        channel.send(`> ${client.user.username} ha encendido correctamente.`);
    }
};