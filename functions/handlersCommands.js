const fs = require("fs");

module.exports = (client, discord) => {
  fs.readdirSync("./commands/").forEach((dir) => {
    const commands = fs
      .readdirSync(`./commands/`)
      .filter((file) => file.endsWith(".js"));

    for (const file of commands) {
      const cmd = require(`../commands/${file}`);
      if (cmd.name) {
        client.commands.set(cmd.name, cmd);
      } else {
        console.log(`Error: ${file}`);
      }
    }
  });
};