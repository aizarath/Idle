import { useState } from "react";
import { RoomList } from "../Room/RoomList";
import { ChatWindow } from "../Chat/ChatWindow";
import NewRoom from "../Room/NewRoom";

export const ChatRoom = () => {
  const [showNewRoomModal, setShowRoomModal] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);

  return (
    <>
      <div className="w-screen h-screen gap-0">
        <section className="bg-gray-950 flex flex-col gap-4 shrink-0 w-64">
          <h1 className="font-cherry text-6xl p-4">IDLE</h1>
          <button className="item-btn" onClick={() => setShowRoomModal(true)}>
            + New Room
          </button>
          <RoomList
            currentRoomId={currentRoom?.id}
            onRoomSelect={(room) => setCurrentRoom(room)}
          />
        </section>
        <section className="bg-gray-900 flex grow">
          <ChatWindow room={currentRoom} />
        </section>
      </div>
      {showNewRoomModal && <NewRoom onClose={() => setShowRoomModal(false)} />}
    </>
  );
};
