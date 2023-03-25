
const config = require('../config.json');
const Discord = require('discord.js');

/**
 *
 * @param {Discord.Client} client
 * @param {Discord} Discord
 * @param {Discord.GuildMember} member
 */

module.exports = async (client, Discord, member) => {
    const joinMember = new Discord.EmbedBuilder();
    joinMember.setTitle(`**🌠 Bienvenid@ a MysthicArk Studio🌠**`)
    joinMember.setColor('#634edb');
    joinMember.setThumbnail(member.displayAvatarURL().replace("webp", "png"));
    joinMember.setDescription(
        `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n 
        🎮 Espero disfrutes tu estadía en el servidor al igual aquí en nuestro discord. \n \n 
        🎯 Te invito a pasar por <#931027995706138645> para que sepas que es lo que está permitido. \n \n 
        📪 Visita <#931027974877241404> para estar enterado de todo. \n \n 
        📑 Ingresa a <#1021619212281712680>  para dialogar con todos. \n \n 
        💻 ¿Necesitas ayuda? Ve a <#931028781974585354> y abre un ticket segun tu necesidad. \n \n 
        ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
    joinMember.setImage('https://i.imgur.com/yDjjtKz.gif');

    const channel = client.channels.cache.get(config.channelWelcome);
    if(!channel) return console.log("The channel does not exist.");
    var role = member.guild.roles.cache.find(role => role.id === config.memberRoleJoin);
    member.roles.add(role);

    channel.send({ embeds: [ joinMember ]});
};