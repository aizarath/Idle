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
    ORDER BY r.id, r.created_at DESC`;

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user rooms" });
  }
};

// @desc create a new room
// @route POST /api/rooms
export const createRoom = async (req, res) => {
  try {
    const userId = req.user.id;
    const { roomName, description } = req.body;

    if (!roomName) {
      res.status(400).json({ error: "Room name required" });
    }

    const room = await sql.begin(async (tx) => {
      // Create room
      const [newRoom] =
        await tx`INSERT INTO rooms (name, description, master_id) values (${roomName.trim()}, ${description?.trim()}, ${userId}) RETURNING id, name, created_at`;

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
    res.status(500).json({ error: "Faile to create room" });
  }
};
