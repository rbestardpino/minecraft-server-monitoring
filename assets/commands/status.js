const fs = require("fs");
const { MessageAttachment, MessageEmbed } = require("discord.js");
const util = require("minecraft-server-util");
const PRIVATE = require("../../private.json");

module.exports = {
  name: "status",
  description: "Gives you the full status of server",
  execute(message, args) {
    util
      .status(PRIVATE.test_server_ip)
      .then((response) => {
        fs.writeFileSync(
          "tmp/logo.png",
          response.favicon.split(";base64,").pop(),
          {
            encoding: "base64",
          }
        );
        const attachment = new MessageAttachment("tmp/logo.png", "logo.png");

        const playersNames = response.samplePlayers.map(
          (player) => player.name
        );

        let playersString = "";

        for (const playerName of playersNames) {
          playersString += ` - ${playerName}\n`;
        }

        const embed = new MessageEmbed()
          .setDescription(
            "Online: :white_check_mark: \n" +
              "Version: `" +
              response.version +
              "`\n\n" +
              "Message of the day: \n> " +
              response.description.descriptionText +
              `\n\nPlayers (${response.onlinePlayers}/${response.maxPlayers}):\n${playersString}`
          )
          .setColor(13832352)
          .setTimestamp(new Date().toLocaleString())
          .attachFiles(attachment)
          .setThumbnail("attachment://logo.png")
          .setImage("attachment://logo.png")
          .setTitle(response.host)
          .setFooter("Powered by rbestardpino.xyz");

        message.reply(" ", { embed });
      })
      .catch((error) => {
        console.error(error);
        const embed = new MessageEmbed()
          .setDescription("Online: :x: \n" + "Version: `unknown`\n\n")
          .setColor(13832352)
          .setTimestamp(new Date().toLocaleString())
          .setThumbnail("https://i.imgur.com/kB8k3RY.jpg")
          .setTitle(PRIVATE.server_ip)
          .setFooter("Powered by rbestardpino.xyz");

        message.reply(" ", { embed });
      });
  },
};
