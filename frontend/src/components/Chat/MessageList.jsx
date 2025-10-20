import { useEffect, useState } from "react";
import { MessageItem } from "./MessageItem";

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

export const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(sampleMessages);
  }, []);

  return (
    <div className="flex-col">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} isOwn={message.isOwn} />
      ))}
    </div>
  );
};
