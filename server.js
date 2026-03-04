const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// The "Connection" Event
io.on('connection', (socket) => {
    console.log('A user connected!');

    // Listen for a "chat message" from a user
    socket.on('chat message', (msg) => {
        // Send that message to EVERYONE connected
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});