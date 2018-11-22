var socket = io();

socket.on('connect', function() {
    console.log('connected to sever');

    // socket.emit('createMessage', {
    //     from: 'Abhishek',
    //     text: 'A crazy mind in a desolate forest'
    // });
});

socket.on('disconnect', function() {
    console.log('Disconnected to server');
});

socket.on('newMessage', function(message) {
    console.log('New Message received', message);
});

