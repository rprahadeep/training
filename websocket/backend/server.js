const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

let clients = [];

wss.on("connection", (ws) => {

  console.log("Client connected");
  clients.push(ws);

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
  
  ws.on("close", () => {
      console.log("Client disconnected");
      clients = clients.filter((client) => client !== ws);
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
