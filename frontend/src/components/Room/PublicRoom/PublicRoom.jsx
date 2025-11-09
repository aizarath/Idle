import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { PublicRoomItem } from "./PublicRoomItem";
import { roomsAPI } from "../../../services/api";

export const PublicRoom = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState("");
  const [publicRooms, setPublicRooms] = useState([]);

  useEffect(() => {
    console.log("pub room useeffect");
    const fetchPublicRooms = async () => {
      try {
        console.log("accessing pub rooms");
        const data = await roomsAPI.getPublicRooms();
        setPublicRooms(data);
        console.log("Public rooms:", data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPublicRooms();
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-80 z-40" />
      <div className="fixed gap-3 p-12 min-w-sm max-w-xl bg-gray-800 flex-col justify-center items-center z-50">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>
        <div className="gap-2 w-full">
          <Search />
          <input
            type="text"
            name="search-value"
            value={searchValue}
            onChange={handleChange}
            placeholder="Search for rooms"
            className="w-full"
          />
        </div>
        <div className="flex-col w-full">
          {publicRooms.length === 0 ? (
            <></>
          ) : (
            publicRooms.map((room) => (
              <PublicRoomItem key={room.id} room={room} />
            ))
          )}
        </div>
      </div>
    </>
  );
};
