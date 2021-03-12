// test-io-server.js

// Create the socket server
const PORT = 3000;
var socket = require('socket.io')(PORT);
socket.on('connection', function(client) {

    // Listen for test and disconnect events
    client.on('test', onTest);
    client.on('disconnect', onDisconnect);

    // Handle a test event from the client
    function onTest(data) {
        console.log('Received: "' + data + '" from client: ' + client.id);
        client.emit('test', "Ta seruuuus, " + client.id);
        console.log('Vitaaaaaj Ferku, či jak še volaš...' + client.id)
    }

    // Handle a disconnection from the client
    function onDisconnect() {
        console.log('KLIENT s takymto ideckom: ' + client.id + " še odpojil a ani neznam načo došol...");
        client.removeListener('test', onTest);
        client.removeListener('disconnect', onDisconnect);
    }
});

