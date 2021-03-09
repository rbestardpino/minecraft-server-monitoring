module.exports = {
  name: "404CommandNotFound",
  description: "En serio necesita una descripción este comando?",
  execute(message, args) {
    message.reply(
      "Mira que rico 404 que te estoy tirando, escribí bien los comandos pa"
    );
    //TODO
    message.member.send(
      "Aca tenes una lista de comandos que podes usar en este bot https://youtu.be/dQw4w9WgXcQ"
    );
  },
};
