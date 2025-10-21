import { useEffect, useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";

const sampleMessages = [
  {
    id: 1,
    userId: 1,
    username: "Alice",
    content: "Hey everyone!",
    timestamp: new Date(),
    isOwn: false, // Is this message from current user?
  },
  {
    id: 2,
    userId: 2,
    username: "You",
    content: "Hi Alice! How's it going?",
    timestamp: new Date(),
    isOwn: true,
  },
  {
    id: 3,
    userId: 3,
    username: "Bonni",
    content: "Hi Marcy",
    timestamp: new Date(),
    isOwn: false,
  },
  {
    id: 4,
    userId: 4,
    username: "Marcy",
    content: "Hey, PBs, how's it going?",
    timestamp: new Date(),
    isOwn: false,
  },
  {
    id: 5,
    userId: 4,
    username: "Marcy",
    content: "Wanna watch a movie later?",
    timestamp: new Date(),
    isOwn: false,
  },
];

export const ChatWindow = ({ room }) => {
  const [messages, setMessages] = useState(sampleMessages);

  const handleSendMessage = (content) => {
    const newMessage = {
      id: messages.length + 1,
      userId: 2,
      username: "You",
      content: content,
      timestamp: new Date(),
      isOwn: true,
    };

    setMessages([...messages, newMessage]);
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
