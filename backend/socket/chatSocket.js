import Message from "../models/Message.js";
import User from "../models/User.js";
import mongoose from "mongoose";

export const handleSocket = (io) => {
  io.on("connection", (socket) => {

    console.log("User connected:", socket.id);

    // Join room
    socket.on("joinRoom", (room) => {
      socket.join(room);
      console.log("Joined room:", room);
    });

    // Send message
    socket.on("sendMessage", async (data) => {
      try {
        const { userId, room, message } = data;

        // ✅ Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
          console.log("Invalid userId ❌");
          return;
        }

        // Save message
        const newMessage = await Message.create({
          userId,
          room,
          message
        });

        // ✅ XP SYSTEM
        const user = await User.findById(userId);

        if (user) {
          user.xp += 10;

          if (user.xp >= user.level * 100) {
            user.level += 1;
          }

          await user.save();
        }

        // Emit to room
        io.to(room).emit("receiveMessage", {
          userId,
          message,
          room,
          createdAt: newMessage.createdAt
        });

      } catch (err) {
        console.error("Socket Error:", err.message);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};