import sql from "../config/database.js";

// @desc get the rooms a user belong to
// @route GET /api/rooms
export const getUserRooms = async (req, res) => {
  try {
    const userId = req.user.id;

    const result =
      await sql`SELECT r.id, r.name, r.description, r.created_at, COUNT(DISTINCT rm.room_id) as member_count
    FROM rooms r JOIN room_members rm ON r.id=rm.room_id
    WHERE rm.user_id = ${userId}
    GROUP BY r.id
    ORDER BY r.id DESC, r.created_at DESC`;

    res.status(200).json(result);
  } catch (error) {
    console.log("Error in get rooms");
    res.status(500).json({ error: "Failed to fetch user rooms" });
  }
};

// @desc create a new room
// @route POST /api/rooms
export const createRoom = async (req, res) => {
  try {
    const userId = req.user.id;
    const { roomName, description, roomType } = req.body;

    if (!roomName) {
      res.status(400).json({ error: "Room name required" });
    }

    const room = await sql.begin(async (tx) => {
      // Create room
      const [newRoom] =
        await tx`INSERT INTO rooms (name, description, room_type, master_id) values (${roomName.trim()}, ${description?.trim()}, ${roomType.trim()}, ${userId}) RETURNING id, name, created_at`;

      // Add creator/master as room member
      await tx`INSERT INTO room_members (room_id, user_id) values (${newRoom.id}, ${userId})`;

      return newRoom;
    });

    res.status(201).json({
      room: {
        id: room.id,
        name: room.name,
        created_at: room.created_at,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create room" });
  }
};

// @desc get room chats
// GET /api/rooms/:roomId/chat
export const getMessages = async (req, res) => {
  try {
    console.log("ROOM ID:", req.params.roomId);
    const roomId = req.params.roomId;
    const result =
      await sql`SELECT m.id, m.room_id, m.user_id, u.username, m.content, m.created_at FROM messages m JOIN users u ON m.user_id = u.id WHERE room_id = ${roomId}`;

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

// @desc get public rooms where user is not a part of
// GET api/rooms/public
export const getPublicRooms = async (req, res) => {
  console.log("IN public rooms");
  try {
    console.log("USER ID:", req.user.id, typeof req.user.id);
    const userId = req.user.id;
    console.log("---------- USER ID:", userId);
    const result = await sql`
      SELECT r.id, r.name, r.description, r.created_at, 
        COUNT(DISTINCT rm.room_id) AS member_count 
      FROM rooms r JOIN room_members rm ON r.id = rm.room_id 
      WHERE r.room_type = 'public'
      AND NOT EXISTS 
      (SELECT 1 
      FROM room_members rm 
      WHERE rm.room_id = r.id 
      AND rm.user_id = ${userId})
      GROUP BY r.id, r.name, r.description, r.created_at
      ORDER BY member_count DESC, created_at`;

    return res.status(200).json(result);
  } catch (error) {
    console.log("Error in get PUBLIC rooms");
    console.log(error);
  }
};
