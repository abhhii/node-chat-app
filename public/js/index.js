var socket = io();

socket.on('connect', function() {
    console.log('hurrrah!  Connected to sever');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('New Message received', message);
});

