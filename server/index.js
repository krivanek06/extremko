const http = require("http");
const path = require("path");
const express = require("express");
const socketIo = require("socket.io");
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const socket = socketIo(server);



// serve html document from client folder on default root
app.use('/', express.static(path.join(__dirname, "../", "client"))); //  "public" off of current is root



// websocker connection established
socket.on("connection", async () => {
  console.log("Client connected...");

  // emit random data
  socket.emit("data", { data: "random" });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
