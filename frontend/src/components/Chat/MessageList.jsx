import React from "react";

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
];

export const MessageList = () => {
  return <div>MessageList</div>;
};
