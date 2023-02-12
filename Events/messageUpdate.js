const config = new require('../config.json');

module.exports = async (client, Discord, oldMessage, newMessage) => {
    const channel = client.channels.cache.get(config.channelLogsMessage);
    if(!channel) return console.log("The channel does not exist.");
    if (oldMessage.content !== newMessage.content) {
    const embed = new Discord.EmbedBuilder()
        .setColor('#ff5e00')
        .setTitle('Mensaje Actualizado')
        .setThumbnail('https://img2.freepng.es/20180804/ik/kisspng-portable-network-graphics-computer-software-comput-update-icon-mod%C3%BCler-ak%C4%B1ll%C4%B1-ev-sistemleri-5b6552e68f1c55.4054463315333670145862.jpg')
        .setDescription('El bot ha detectado un mensaje que fue actualizado. Aquí se proporciona la siguiente información:')
        .addFields([
            { name: 'Autor del mensaje:', value: `${oldMessage.author.username}`},
            { name: 'Mensaje Antiguo:', value: `${oldMessage.content}`},
            { name: 'Mensaje Editado:', value: `${newMessage.content}`},
            { name: 'Fecha:', value: `${oldMessage.createdAt}`},
            { name: 'Del canal:', value: `${oldMessage.channel}`},
        ])
        .setFooter({
            text: 'MysthicArk Studios | Bot Oficial',
            iconURL: `${client.user.displayAvatarURL({format: "png"})}`
        });

    channel.send({
        embeds: [embed]
    });

    }
}