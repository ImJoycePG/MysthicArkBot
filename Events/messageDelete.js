const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = async (client, Discord, message) => {
    const channel = client.channels.cache.get(config.channelLogsMessage);
    if (!channel) return console.log("The channel does not exist.");

    let messageContent;
    let messageAuthor;
    let messageCreatedAt;
    let messageChannel;

    if (message.content) messageContent = message.content;
    if (message.author) messageAuthor = message.author.username;
    if (message.createdAt) messageCreatedAt = message.createdAt;
    if (message.channel) messageChannel = message.channel.name;

    const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('Mensaje Eliminado')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Octagon_delete.svg/2048px-Octagon_delete.svg.png')
        .setDescription('El bot ha detectado un nuevo mensaje eliminado. Aquí se proporciona la siguiente información:')
        .addFields([
            { name: 'Autor del mensaje:', value: `${messageAuthor}`},
            { name: 'Mensaje:', value: `${messageContent}`},
            { name: 'Fecha:', value: `${messageCreatedAt}`},
            { name: 'Del canal:', value: `${messageChannel}`},
        ])
        .setFooter({
            text: 'MysthicArk Studios | Bot Oficial',
            iconURL: `${client.user.displayAvatarURL({format: "png"})}`
        });

    try {
        const sentMessage = await channel.send({
            embeds: [embed]
        });
        // Guarda la ID del mensaje enviado para poder eliminarlo más tarde
        const messageId = sentMessage.id;
        // ...
    } catch (error) {
        console.error(error);
    }
};