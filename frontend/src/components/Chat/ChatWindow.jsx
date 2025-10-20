import React from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";

export const ChatWindow = ({ room }) => {
  return (
    <div className="flex-col w-full p-4">
      <ChatHeader roomName={room?.name} roomIcon={room?.icon} />
      <div className="flex-col p-4">
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
};
