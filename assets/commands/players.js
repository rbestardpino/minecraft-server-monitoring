const util = require("minecraft-server-util");
const PRIVATE = require("../../private.json");

module.exports = {
  name: "players",
  description: "Gives you the list of connected players",
  execute(message, args) {
    util
      .status(PRIVATE.server_ip)
      .then((response) => {
        message.channel.send(JSON.stringify(response.samplePlayers));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
