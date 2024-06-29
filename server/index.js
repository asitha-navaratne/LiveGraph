const http = require("http");
const { WebSocketServer } = require("ws");

const server = http.createServer();
const wsServer = new WebSocketServer({ server });

const PORT = 8000;

const broadcast = function (connection) {
  const value = Math.floor(Math.random() * 50);

  connection.send(value);
};

wsServer.on("connection", (connection) => {
  broadcast(connection);
  setInterval(broadcast, 3000, connection);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
