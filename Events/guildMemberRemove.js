
const config = require('../config.json');
const Discord = require('discord.js');

/**
 *
 * @param {Discord.Client} client
 * @param {Discord} Discord
 * @param {Discord.GuildMember} member
 */

module.exports = async (client, Discord, member) => {
    const leaveMember = new Discord.EmbedBuilder();
    leaveMember.setTitle(`**🌠 Vuelve pronto a MysthicArk Studio🌠**`)
    leaveMember.setColor('#634edb');
    leaveMember.setThumbnail(member.displayAvatarURL().replace("webp", "png"));
    leaveMember.setDescription(
        `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n 
        🎮 Espero hayas disfrutado tu estadía en el servidor de discord. \n \n 
        ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`);
    leaveMember.setImage('https://i.imgur.com/yDjjtKz.gif');

    const channel = client.channels.cache.get(config.channelGoodbye);
    if(!channel) return console.log("The channel does not exist.");

    channel.send({ embeds: [ leaveMember ]});
};