import { useEffect, useState } from "react";
import { RoomItem } from "./RoomItem";
import { roomsAPI } from "../../services/api";

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
