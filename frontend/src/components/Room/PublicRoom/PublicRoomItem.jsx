import React from "react";

export const PublicRoomItem = ({ room }) => {
  console.log(room);
  return (
    <div className="justify-between p-2">
      <div>{room.name}</div>
      <button className="cherry-btn">Join</button>
    </div>
  );
};
