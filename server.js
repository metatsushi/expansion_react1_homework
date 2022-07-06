const express = require("express");
const app =express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("ユーザーが接続しました");
    socket.on("chat message", (msg) => {
    console.log(`サーバーが受け取ったメッセージ：${msg}`);
    io.emit("chat message", msg);  
    console.log(`サーバーが返すメッセージ：${msg}`);    
    });
});

server.listen(PORT, () => {
    console.log("listening on 3000");
});
