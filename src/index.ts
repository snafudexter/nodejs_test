import express from "express";
import bodyParser from "body-parser";
import { Server } from "socket.io";

import router from "./router";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(router);

const server = app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user has connected!");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected!");
  });
});
