module.exports = {
    name: "ping",
    description: "Test SlashCommand",
    run: async (client, interaction) => {
      interaction.reply("!PONG 😄");
    }
};