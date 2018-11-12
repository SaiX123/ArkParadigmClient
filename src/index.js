var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

socket.on('connect', (socket) => {
    console.log('Connected!');
});

socket.on('UPDATE', (data) => {
	console.log(data);
});

socket.emit('msg', 'SAi', 'HELLO');