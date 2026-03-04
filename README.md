# Live Chat Application

A real-time chat application built with Node.js, Express, and Socket.io. This application allows multiple users to connect and chat in real-time without page refreshes.

## Features

- **Real-time Communication**: Instant message delivery to all connected users
- **No Page Refresh**: Uses WebSocket technology through Socket.io for seamless updates
- **Simple Interface**: Clean and user-friendly UI
- **Broadcast Messaging**: All messages are broadcast to every connected client

## Technology Stack

- **Backend**: Node.js with Express.js framework
- **Real-time Communication**: Socket.io
- **Frontend**: Vanilla JavaScript with HTML5 and CSS3
- **Port**: Runs on localhost:3000

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository or download the project files
2. Navigate to the project directory:
   ```bash
   cd live-chat
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
   Or alternatively:
   ```bash
   node server.js
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Open the same URL in multiple browser tabs or windows to simulate multiple users

4. Type messages in the input field and click "Send" or press Enter to broadcast messages to all connected clients

## Project Structure

```
live-chat/
├── server.js          # Express server with Socket.io setup
├── index.html         # Frontend UI and client-side Socket.io code
├── package.json       # Project dependencies and scripts
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## How It Works

1. **Server Setup** (`server.js`):
   - Initializes an Express server on port 3000
   - Sets up Socket.io for WebSocket connections
   - Listens for 'chat message' events from clients
   - Broadcasts messages to all connected users

2. **Frontend** (`index.html`):
   - Loads Socket.io client library
   - Provides a simple form for message input
   - Displays all received messages in a list
   - Automatically scrolls to show new messages

## Event Flow

- **Connection**: When a user connects, a connection event is logged
- **Message Send**: User submits a form → client emits 'chat message' event to server
- **Broadcast**: Server receives the message and emits it to all connected users
- **Disconnect**: When a user closes the connection, a disconnect event is logged

## Dependencies

- **express** (^5.2.1): Web framework for Node.js
- **socket.io** (^4.8.3): Real-time bidirectional event-based communication library

## Future Enhancements

- User authentication and login system
- Private messaging between users
- Message history storage in a database
- User typing indicators
- Emoji support and message reactions
- Chat rooms/channels
- Message timestamps
- User list display

## License

ISC

## Author

Created as a real-time chat demo application.
