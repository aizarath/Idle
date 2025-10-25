import { useEffect, useState } from "react";
import { RoomItem } from "./RoomItem";
import { roomsAPI } from "../../services/api";

const sampleRooms = [
  {
    id: 1,
    name: "Arts & Crafts",
    memberCount: 12,
    unreadCount: 3,
  },
  {
    id: 2,
    name: "Tech Talk",
    memberCount: 8,
    unreadCount: 0,
  },
  {
    id: 3,
    name: "Physics Class",
    memberCount: 15,
    unreadCount: 7,
  },
];

export const RoomList = ({ currentRoomId, onRoomSelect }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await roomsAPI.getUserRooms();
        setRooms(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="flex-col">
      {rooms.length === 0 ? (
        <></>
      ) : (
        rooms.map((room) => (
          <RoomItem
            key={room.id}
            room={room}
            isActive={currentRoomId === room.id}
            onClick={() => onRoomSelect(room)}
          />
        ))
      )}
    </div>
  );
};
