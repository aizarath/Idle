import { useState } from "react";
import { RoomList } from "../Room/RoomList";
import { ChatWindow } from "../Chat/ChatWindow";
import { NewRoom } from "../Room/NewRoom/NewRoom";
import { PublicRoom } from "../Room/PublicRoom/PublicRoom";
import { Plus, Search, Snail } from "lucide-react";

export const ChatRoom = ({ user, onLogOut }) => {
  const [showNewRoomModal, setShowRoomModal] = useState(false);
  const [showPublicRoomsModal, setShowPublicRoomsModal] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);

  return (
    <>
      <div className="w-screen h-screen gap-0">
        <section className="bg-gray-950 flex flex-col shrink-0 w-64">
          <h1 className="font-cherry text-6xl p-4">IDLE</h1>
          <button className="item-btn" onClick={() => setShowRoomModal(true)}>
            <Plus className="small-icon" /> New Room
          </button>
          <button
            className="item-btn"
            onClick={() => setShowPublicRoomsModal(true)}
          >
            <Search className="small-icon" /> Public Rooms
          </button>
          <RoomList
            currentRoomId={currentRoom?.id}
            onRoomSelect={(room) => setCurrentRoom(room)}
          />
          <button className="fixed bottom-8 flex items-center item-btn">
            <Snail className="pfp" />
            <div className="text-left flex-col gap-0">
              <p>Marcy the Vampire Queen</p>
              <span>@{user.username}</span>
            </div>
          </button>
        </section>
        <section className="bg-gray-900 flex grow">
          <ChatWindow room={currentRoom} user={user} />
        </section>
      </div>
      {showNewRoomModal && <NewRoom onClose={() => setShowRoomModal(false)} />}
      {showPublicRoomsModal && (
        <PublicRoom onClose={() => setShowPublicRoomsModal(false)} />
      )}
    </>
  );
};
