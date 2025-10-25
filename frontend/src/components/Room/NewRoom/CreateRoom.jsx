import { useState } from "react";
import { roomsAPI } from "../../../services/api";

export const CreateRoom = () => {
  const [formData, setFormData] = useState({
    roomName: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await roomsAPI.create(formData);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="roomName"
        value={formData.roomName}
        onChange={handleChange}
        placeholder="Room Name"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Give your room a description"
      ></textarea>
      <button type="submit" className="cherry-btn">
        Create Room
      </button>
    </form>
  );
};
