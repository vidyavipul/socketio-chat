const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Store active users
const activeUsers = new Map();

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Helper function to get list of active users
function getActiveUsers() {
    return Array.from(activeUsers.values());
}

// The "Connection" Event
io.on('connection', (socket) => {
    console.log('A user connected!', socket.id);

    // Listen for user joining with a username
    socket.on('user join', (username) => {
        activeUsers.set(socket.id, { id: socket.id, username });
        console.log(`${username} joined the chat`);
        
        // Notify all clients of the updated user list
        io.emit('update users', getActiveUsers());
        // Notify all users about the new user
        io.emit('user joined', `${username} joined the chat`);
    });

    // Listen for a "chat message" from a user
    socket.on('chat message', (data) => {
        const user = activeUsers.get(socket.id);
        if (user) {
            // Broadcast message with username
            io.emit('chat message', { username: user.username, message: data });
        }
    });

    // Listen for typing events
    socket.on('typing', (typing) => {
        const user = activeUsers.get(socket.id);
        if (user) {
            socket.broadcast.emit('user typing', { username: user.username, isTyping: typing });
        }
    });

    socket.on('disconnect', () => {
        const user = activeUsers.get(socket.id);
        if (user) {
            console.log(`${user.username} disconnected`);
            activeUsers.delete(socket.id);
            // Notify remaining clients
            io.emit('update users', getActiveUsers());
            io.emit('user left', `${user.username} left the chat`);
        }
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});