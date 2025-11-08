import { useEffect, useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { roomsAPI } from "../../services/api";
import socketService from "../../services/socket";

export const ChatWindow = ({ room, user }) => {
  const [messages, setMessages] = useState([]);

  // load initial chats and join room
  useEffect(() => {
    if (!room) return;

    const loadMessages = async () => {
      try {
        // Fetch initial messages from API
        const data = await roomsAPI.getMessages(room.id);
        setMessages(data);

        // Join socket room
        socketService.joinRoom(room.id);
      } catch (error) {
        console.log(error);
      }
    };

    loadMessages();

    // leave room when component unmounts or room changes
    return () => {
      if (room) {
        socketService.leaveRoom(room.id);
      }
    };
  }, [room]);

  useEffect(() => {
    const handleNewMessage = (message) => {
      // mark message as own if it's from current user
      const messageWithOwnership = {
        ...message,
        is_own: message.user_id == user.id,
      };

      setMessages((prev) => [...prev, messageWithOwnership]);
    };

    socketService.onMessageReceived(handleNewMessage);

    // cleanup listener
    return () => {
      socketService.offMessageReceived();
    };
  }, [user.id]);

  const handleSendMessage = (content) => {
    if (!room) return;

    // Send via socket
    socketService.sendMessage(room.id, content);
  };

  return (
    <div className="flex-col w-full p-4">
      <ChatHeader roomName={room?.name} roomIcon={room?.icon} />
      <div className="flex-col p-4">
        <MessageList messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
