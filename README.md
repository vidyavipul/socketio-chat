# Live Chat Application

A real-time chat application built with Node.js, Express, and Socket.io. This application allows multiple users to connect and chat in real-time without page refreshes.

## Features

- **Real-time Communication**: Instant message delivery to all connected users
- **No Page Refresh**: Uses WebSocket technology through Socket.io for seamless updates
- **User Nicknames**: Each user can set their own display name when joining
- **Active User List**: See all connected users in a dedicated sidebar with real-time updates
- **Typing Indicators**: Know when someone is typing a message (updates in real-time)
- **User Join/Leave Notifications**: Get notified when users connect or disconnect
- **Simple Interface**: Clean and user-friendly UI with improved design
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
   - Maintains an active user map with socket IDs and usernames
   - Handles 'user join', 'chat message', 'typing', and 'disconnect' events
   - Broadcasts user list updates to all clients

2. **Frontend** (`index.html`):
   - Loads Socket.io client library
   - Prompts user for a nickname on page load
   - Displays messages with usernames in the chat area
   - Shows active users in a dedicated sidebar
   - Displays typing indicators when users are composing messages
   - Automatically scrolls to show new messages and notifications
   - Provides visual feedback for user join/leave events

## Event Flow

- **Connection**: When a user connects, they are prompted for a username
- **User Join**: User submits their username → server stores user info and broadcasts to all clients
- **User List Update**: Server sends the updated user list to all connected clients
- **Message Send**: User submits a form → client emits 'chat message' event to server with username and message
- **Broadcast**: Server receives the message and emits it to all connected users with username context
- **Typing Indicator**: As user types → 'typing' event sent to server → server broadcasts to other clients
- **User Left**: When a user disconnects → server removes from active users list and notifies others
- **Disconnect**: When a user closes the connection, a disconnect event is logged and others are notified

## Dependencies

- **express** (^5.2.1): Web framework for Node.js
- **socket.io** (^4.8.3): Real-time bidirectional event-based communication library

## Future Enhancements

- User authentication and login system (persistent usernames)
- Private messaging between users
- Message history storage in a database
- Chat rooms/channels for topic-based conversations
- Message timestamps with formatting
- User profile pictures/avatars
- Emoji support and message reactions
- Edit and delete messages functionality
- Search message history
- Dark/Light theme toggle
- Admin moderation tools
- Message rich formatting (bold, italic, links)

## License

ISC

## Author

Created as a real-time chat demo application.
