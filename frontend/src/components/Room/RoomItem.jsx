import React from "react";
import { Shell } from "lucide-react";

export const RoomItem = ({ room, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${isActive === true ? "bg-lime-900" : ""} item-btn`}
    >
      {room.icon ? (
        room.icon
      ) : (
        <Shell className="pfp rotate-130 scale-x-[-1]" />
      )}{" "}
      {room.name}
    </button>
  );
};
