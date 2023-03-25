const fs = require("fs");

module.exports = async (client, discord) => {
    fs.readdir('./events/', (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
          if (!file.endsWith('.js')) return;
          const event = require(`../events/${file}`);
          const eventName = file.split('.')[0];
          client.on(eventName, event.bind(null, client, discord));
        });
    });
}