const config = new require('../config.json');

module.exports = async (client, Discord, message) => {
    const channel = client.channels.cache.get(config.channelLogsMessage);
    if(!channel) return console.log("The channel does not exist.");

    const embed = new Discord.EmbedBuilder()
        .setColor('#ff0000')
        .setTitle('Mensaje Eliminado')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Octagon_delete.svg/2048px-Octagon_delete.svg.png')
        .setDescription('El bot ha detectado un nuevo mensaje eliminado. Aquí se proporciona la siguiente información:')
        .addFields([
            { name: 'Autor del mensaje:', value: `${message.author.username}`},
            { name: 'Mensaje:', value: `${message.content}`},
            { name: 'Fecha:', value: `${message.createdAt}`},
            { name: 'Del canal:', value: `${message.channel}`},
        ])
        .setFooter({
            text: 'MysthicArk Studios | Bot Oficial',
            iconURL: `${client.user.displayAvatarURL({format: "png"})}`
        });

    channel.send({
        embeds: [embed]
    });
}