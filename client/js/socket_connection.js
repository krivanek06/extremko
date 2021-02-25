const socket = io();

console.log('asdsa')

// establish websocker connection with server
socket.on('connect', () => {
    console.log('Connected to server...')
});

// receive data from server
socket.on('data', (data) => {
    console.log(data);
})
