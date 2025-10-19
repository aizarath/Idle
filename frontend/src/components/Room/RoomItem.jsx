import React from "react";
import { Shell } from "lucide-react";

export const RoomItem = ({ room, isActive, onClick }) => {
  console.log(room.name + " is " + (isActive === true ? "active" : "inactive"));

  return (
    <button
      onClick={onClick}
      className={`${
        isActive === true ? "bg-lime-900" : ""
      } flex gap-2 item-btn`}
    >
      {room.icon ? (
        room.icon
      ) : (
        <Shell className="w-10 h-10 rotate-130 scale-x-[-1]" />
      )}{" "}
      {room.name}
    </button>
  );
};
