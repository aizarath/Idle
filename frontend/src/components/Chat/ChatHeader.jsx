import React from "react";
import { Shell, StickyNote } from "lucide-react";

export const ChatHeader = ({ roomName, roomIcon }) => {
  return (
    <header className="border-b-1 pb-4 flex justify-between">
      <div>
        {roomIcon != null ? <img src={roomIcon} /> : <Shell className="pfp" />}
        <h4>{roomName}</h4>
      </div>
      <div>
        <button>
          <StickyNote />
        </button>
      </div>
    </header>
  );
};
