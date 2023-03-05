module.exports = {
  name: "test",
  description: "Tiempo de respuesta",
  async execute(client, message, args, discord) {
    message.channel.send("Que chucha quieres con este comando");
  },
};