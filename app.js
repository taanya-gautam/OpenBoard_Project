const express = require("express");
const socket = require("socket.io");

const app = express();  //initialized and server ready

app.use(express.static("frontend"));

let port = 4000;
let server = app.listen( () => {
    console.log("listening to port" + port);
})
let io = socket(server);

io.on("connection" , (socket) => {
    console.log("Made socket connection");
}) 