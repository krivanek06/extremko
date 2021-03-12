    function init()
    {
        output = document.getElementById("output");
        testSocket();
    }

    function testSocket()
    {
        var socket = io.connect('http://localhost:3000/');
        socket.on('test', onMessage );
        socket.on('connect', onConnect );
        socket.on('disconnect', onDisconnect );
        socket.on('connect_error', onError );
        socket.on('reconnect_error', onError );

        function onConnect(evt)
        {
            console.log("KLIENT: I'm in mothafucka!");
            writeToScreen("CONNECTED");
            doSend("Serus SERVER, pripojil šem še, dufam že nevadzi...");
            console.log("KLIENT: Pocujes ma puta? Volam še "+ this.id);
        }

        function onDisconnect(evt)
        {
            console.log("KLIENT: Ta ja idzem het!");
            writeToScreen("DISCONNECTED");
        }

        function onMessage(data)
        {
            writeToScreen('<span style="color: blue;">RESPONSE: ' + data+'</span>');
            console.log("SERVER: " + data + " ta jak še maš?");
            socket.close();
        }

        function onError(message)
        {
            writeToScreen('<span style="color: red;">ERROR:</span> ' + message);
        }

        function doSend(message)
        {
            writeToScreen("SENT: " + message);
            socket.emit('test', message);
        }

        function writeToScreen(message)
        {
            var pre = document.createElement("p");
            pre.style.wordWrap = "break-word";
            pre.innerHTML = message;
            output.appendChild(pre);
        }
    }

    window.addEventListener("load", init, false);
