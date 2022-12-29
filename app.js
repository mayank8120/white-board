const express = require('express');


const socket = require('socket.io');


const app = express();



app.use(express.static("public"));


let port = process.env.PORT || 5000;
let server = app.listen(port, () => {
    console.log('listening to port 5000');
});


let io = socket(server);

io.on('connection', (socket) => {
    console.log("Socket Connection Made");


    socket.on("beginPath", (data) => {
        io.sockets.emit("beginPath", data);
    })


    socket.on("drawStroke", (data) => {
        io.sockets.emit("drawStroke", data);
    })


    socket.on("redoUndo", (data) => {
        io.sockets.emit("redoUndo", data);
    })


});