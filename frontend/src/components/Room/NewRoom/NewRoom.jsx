import { CreateRoom } from "./CreateRoom";
import { JoinRoom } from "./JoinRoom";
import { X } from "lucide-react";

export const NewRoom = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-80 z-40" />
      <div className="fixed p-12 min-w-sm max-w-xl bg-gray-800 flex-col justify-center items-center z-50">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>
        <CreateRoom />
        <br />
        <JoinRoom />
      </div>
    </>
  );
};
