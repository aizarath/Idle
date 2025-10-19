import React from "react";
import { X } from "lucide-react";

const NewRoom = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-80 z-40" />
      <div className="fixed p-12 min-w-sm max-w-xl bg-gray-800 flex-col justify-center items-center z-50">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <form>
          <input type="text" placeholder="Room Name" />
          <textarea placeholder="Give your room a description"></textarea>
          <button className="cherry-btn">Create Room</button>
        </form>

        <br />

        <form>
          <input type="url" placeholder="Room Name" />
          <button className="cherry-btn">Join Room</button>
        </form>
      </div>
    </>
  );
};

export default NewRoom;
