import React from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./MessageList";

export const ChatWindow = ({ room }) => {
  return (
    <div className="flex-col w-full p-4">
      <ChatHeader roomName={room?.name} roomIcon={room?.icon} />
      <MessageList />
    </div>
  );
};
