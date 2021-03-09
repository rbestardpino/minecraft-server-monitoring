// const botsettings = require("../../botsettings");

// module.exports = {
//   name: "server",
//   description: "Allows you to modify the server you want to monitor",
//   usage: "`sm!server [ip] [port]*`.\n`port` is optional, default is `25565`",
//   execute(message, args) {
//     console.log(botsettings);
//     if (!args.length) message.channel.send("**Usage**: " + this.usage);
//     else if (args.length == 1) {
//       botsettings.ip = args[0];
//       message.channel.send(`Succesfully updated server ip to \`${args[0]}\``);
//     } else {
//       botsettings.ip = args[0];
//       botsettings.port = args[1];
//       message.channel.send(
//         `Succesfully updated server to \`${args[0]}:${args[1]}\``
//       );
//     }
//   },
// };
