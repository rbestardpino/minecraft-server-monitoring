const util = require("minecraft-server-util");
const PRIVATE = require("../../private.json");

module.exports = {
  name: "status",
  description: "Gives you the full status of server",
  execute(message, args) {
    util
      .status(PRIVATE.server_ip)
      .then((response) => {
        message.channel.send(JSON.stringify(response));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
