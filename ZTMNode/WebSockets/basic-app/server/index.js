import WebSocket, { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: "8080" });

server.on("connection", (socket) => {
  console.log(`socket item ${socket}`);
  socket.on("message", (message) => {
    socket.send(`Roger that! ${message}`);
  });
});
