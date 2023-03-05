const fs = require("fs");
let slash = [];

module.exports = (client, discord) => {
  fs.readdirSync("./slashCommands/").forEach((dir) => {
    const commands = fs
      .readdirSync(`./slashCommands/`)
      .filter((file) => file.endsWith(".js"));

    for (const file of commands) {
      try {
        let scmd = require(`../slashCommands/${file}`);

        if (scmd.name) {
          client.slash.set(scmd.name, scmd);
          slash.push(scmd);
          console.log(`SlashCommands: ${scmd.name}`);
        } else {
          console.log(`Error: ${file}`);
        }
      } catch (error) {
        console.log(`Error en el archivo: ${file}`);
      }
    }
  });

  client.on("ready", async () => {
    await client.application.commands.set(slash);
  });
};