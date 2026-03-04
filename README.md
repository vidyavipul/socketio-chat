<div align="center">

# ⚡ Live Chat Application

**A lightweight, real-time chat app with live user lists and typing indicators**

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2-blue?logo=express)](https://expressjs.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.8-red?logo=socket.io)](https://socket.io/)
[![License](https://img.shields.io/badge/License-ISC-yellow)](LICENSE)

</div>

---

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/vidyavipul/socketio-chat
cd live-chat

# Install dependencies
npm install

# Start the server
npm start

# Open http://localhost:3000 in your browser
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 💬 **Real-time Messaging** | Instant message delivery to all connected users via WebSockets |
| 👥 **User Nicknames** | Set your display name when joining the chat |
| 📋 **Live User List** | See active users in a sidebar with real-time updates |
| ✍️ **Typing Indicators** | Know when someone is composing a message |
| 🔔 **Join/Leave Notifications** | Get notified when users connect or disconnect |
| 🎨 **Modern UI** | Clean, responsive interface with modern styling |
| ⚙️ **WebSocket Powered** | No page refresh needed - true real-time updates |

---

## 🛠️ Technology Stack

<div align="center">

| Layer | Technology |
|-------|-----------|
| **Backend** | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white) |
| **Real-time** | ![Socket.io](https://img.shields.io/badge/-Socket.io-010101?logo=socket.io&logoColor=white) |
| **Frontend** | ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) ![HTML5](https://img.shields.io/badge/-HTML5-E34C26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) |

</div>

---

## 📦 Prerequisites

- **Node.js** v14 or higher
- **npm** or **yarn**
- A modern web browser

## 📥 Installation

### Step 1: Clone the repository
```bash
git clone <repository-url>
cd live-chat
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Run the server
```bash
npm start
```

The application will be available at **http://localhost:3000**

---

## 🎯 Usage

1. **Start the development server:**
   ```bash
   npm start
   # or
   node server.js
   ```

2. **Open your browser:**
   Navigate to `http://localhost:3000`

3. **Enter your username:**
   You'll be prompted to enter a nickname when joining

4. **Start chatting:**
   - Open multiple tabs/windows to simulate multiple users
   - Type messages and press Enter or click Send
   - Watch the active user list update in real-time
   - See typing indicators as others compose messages

---

## 📂 Project Structure

```
live-chat/
├── 📄 server.js           Express server with Socket.io
├── 📄 index.html          Client UI with Socket.io integration
├── 📄 package.json        Project dependencies
├── 📄 .gitignore          Git ignore rules
└── 📄 README.md           This file
```

---

## ⚙️ Architecture

### 🖥️ Backend (`server.js`)
- Initializes Express server on port **3000**
- Manages WebSocket connections via Socket.io
- Maintains active user registry
- Handles events: `user join`, `chat message`, `typing`, `disconnect`
- Broadcasts real-time updates to all clients

### 🌐 Frontend (`index.html`)
- Loads Socket.io client library
- Prompts users for nicknames
- Displays messages with sender information
- Renders live user sidebar
- Shows real-time typing indicators
- Auto-scrolls to latest messages
- Sanitizes input for security

---

## 🔄 Event Flow

```
User Connect → Prompt Username → Server Stores User
                                     ↓
                            Broadcast User List
                                     ↓
User Types Message → Emit 'typing' → Broadcast to Others
                                     ↓
User Sends Message → Emit 'chat message' → Broadcast to All
                                     ↓
User Disconnects → Remove from List → Notify Others
```

### Socket Events:
- **Connect**: New user joins
- **user join**: User submits username
- **chat message**: User sends a message
- **typing**: User is composing (true/false)
- **update users**: Server sends active user list
- **disconnect**: User leaves

---

## 📚 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **express** | ^5.2.1 | Web framework for Node.js |
| **socket.io** | ^4.8.3 | Real-time WebSocket communication |

---

## 🚧 Roadmap & Future Enhancements

- [ ] 🔐 User authentication & persistent login
- [ ] 💬 Private messaging between users
- [ ] 💾 Message history with database storage
- [ ] 🏠 Chat rooms/channels
- [ ] ⏰ Message timestamps
- [ ] 👤 User profiles with avatars
- [ ] 😊 Emoji support & reactions
- [ ] ✏️ Edit and delete messages
- [ ] 🔍 Message search functionality
- [ ] 🌙 Dark/Light theme toggle
- [ ] 🛡️ Admin moderation tools
- [ ] 📝 Rich text formatting

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch (`git checkout -b feature/amazing-feature`)
- Commit your changes (`git commit -m 'Add amazing feature'`)
- Push to the branch (`git push origin feature/amazing-feature`)
- Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC** License - see the LICENSE file for details.

---

## 👨‍💻 Author

Created as a demonstration of real-time web communication with Socket.io and modern web technologies.

---

<div align="center">

Made with ❤️ | [Report Bug](../../issues) | [Request Feature](../../issues)

</div>
