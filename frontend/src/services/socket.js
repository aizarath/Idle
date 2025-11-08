import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_API_URL;

class SocketService {
  socket = null;

  connect(token) {
    if (this.socket?.connected) {
      console.log("Socket connected");
      return this.socket;
    }

    this.socket = io(SOCKET_URL, {
      auth: { token },
    });

    this.socket.on("connect", () => {
      console.log("Connecte to server");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    this.socket.on("error", (error) => {
      console.error("Socket error:", error);
    });

    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  // Room methods
  joinRoom(roomId) {
    this.socket.emit("room:join", roomId);
  }

  leaveRoom(roomId) {
    this.socket.emit("room:leave", roomId);
  }

  // Message methods
  sendMessage(roomId, content) {
    this.socket.emit("message:send", { roomId, content });
  }

  onMessageReceived(callback) {
    this.socket.on("message:received", callback);
  }

  offMessageReceived() {
    this.socket.off("message:received");
  }

  // User events
  onUserJoined(callback) {
    this.socket.on("user:joined", callback);
  }

  onUserLeft(callback) {
    this.socket.on("user:left", callback);
  }

  onOnlineUsers(callback) {
    this.socket.on("users:online", callback);
  }

  // Typing indicators
  startTyping(roomId) {
    this.socket.emit("typing:start", roomId);
  }

  stopTyping(roomId) {
    this.socket.emit("typing:stop", roomId);
  }

  onUserTyping(callback) {
    this.socket.on("user:typing", callback);
  }

  onUserStoppedTyping(callback) {
    this.socket.on("user:stopped-typing", callback);
  }
}

export default new SocketService();
