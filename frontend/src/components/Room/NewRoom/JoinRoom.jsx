import React from "react";

export const JoinRoom = () => {
  return (
    <form>
      <input type="url" placeholder="Room Name" />
      <button type="submit" className="cherry-btn">
        Join Room
      </button>
    </form>
  );
};
