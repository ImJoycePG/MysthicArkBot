const fs = require("fs");
let slash = [];

module.exports = (client, discord) => {
  fs.readdirSync("./slashCommands/").forEach((file) => {
    if (file.endsWith(".js")) {
      try {
        let scmd = require(`../slashCommands/${file}`);

        if (scmd.data) {
          client.slash.set(scmd.data.name, scmd);
          slash.push(scmd.data);
          console.log(`Comando Cargado: ${file}`)
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