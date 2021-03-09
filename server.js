module.exports = class Server {
  constructor({ id = 0, ip = "ip", port = 25565 }) {
    this.id = id;
    this.monitoredServer = {
      ip: ip,
      port: port,
    };
  }
};
