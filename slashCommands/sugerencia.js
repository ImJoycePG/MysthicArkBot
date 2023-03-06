const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const config = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sugerencia')
        .setNameLocalizations({
            "en-US": "suggestion",
            "es-ES": "sugerencia"
        })
        .setDescription('Sistema de sugerencia')
        .setDescriptionLocalizations({
            "en-US": "suggestion system",
            "es-ES": "Sistema de sugerencia"
        })
        .addStringOption(option =>
            option.setName('texto')
            .setDescription('Coloca tu sugerencia')
            .setDescriptionLocalizations({
                "en-US": "Place your suggestion",
                "es-ES": "Coloca tu sugerencia"
            })
            .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('sistema')
            .setDescription('Existe: Discord, Bot, Moderación')
            .setDescriptionLocalizations({
                "en-US": "Exists: Discord, Bot, Moderation",
                "es-ES": "Existe: Discord, Bot, Moderación"
            })
            .addChoices(
                { name: 'Discord', value: 'Discord'},
                { name: 'Bot', value: 'Bot'},
                { name: 'Moderacion', value: 'Moderación'},
            )
            .setRequired(true)
        ),
	run: async (client, interaction) => {
        const text = interaction.options.getString('texto');
        const choiceOptions = interaction.options.getString('sistema');

        const embed = new EmbedBuilder()
        .setColor('Yellow')
        .setTitle('💡 Nueva Sugerencia')
        .setThumbnail('https://static.vecteezy.com/system/resources/previews/009/408/668/non_2x/light-bulb-transparent-free-png.png')
        .setDescription(`${text}`)
        .addFields({name: 'Sugerencia para:', value: `${choiceOptions}`, inline: false})
        .setTimestamp()
        .setFooter({ text: `Solicitado por ${interaction.user.username}`, iconURL: `${interaction.user.avatarURL({ format: 'png'})}`})
        
        const channel = interaction.client.channels.cache.get(config.channelSuggestion);
        if (channel) {
            channel.send({
                embeds: [embed]
            });
            interaction.reply({content: 'Sugerencia enviada', ephemeral: true});
        } else {
            interaction.reply({content: 'No se pudo enviar la sugerencia', ephemeral: true});
        };
    },
};