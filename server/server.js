const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    
    // socket.emit('newEmail', {
    //     from: 'tracer@example.com',
    //     text: 'Wassssssuppp, Bruhhhhh!!!!',
    //     createdAt: 254
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // })

    socket.emit('newMessage', {
        from: 'Abhishek',
        text: 'Flying like an asteroid in kupiter belt',
        createdAt: 556
    });

    socket.on('createMessage', (message) => {
        console.log('create new Message', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});



server.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});

module.exports = {app};