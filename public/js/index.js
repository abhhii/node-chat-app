var socket = io();

socket.on('connect', function() {
    console.log('connected to sever');
    // socket.emit('createEmail', {
    //     to: 'tracer@memes.com',
    //     text: 'Bruuuhhhh!!!'
    // });

    socket.emit('createMessage', {
        from: 'Abhishek',
        text: 'A crazy mind in a desolate forest'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected to server');
});

// socket.on('newEmail', function(email) {
//     console.log('New email received ', email );
// });

socket.on('newMessage', function(message) {
    console.log('New Message received', message);
});

