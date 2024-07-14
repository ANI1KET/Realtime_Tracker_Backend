import { Server as SocketIOServer, Socket } from "socket.io";
import { Server as SockethttpServer } from "http";

export const setupSocketIO = (httpServer: SockethttpServer) => {
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: true,
      methods: ["GET", "POST"],
      credentials: true,
    },
    // transports: ["websocket"],
  });

  io.on("connection", (socket: Socket) => {
    console.log("User Connected ", socket.id);

    socket.on(
      "send-location",
      (data: { latitude: number; longitude: number }) => {
        io.emit("receive-location", { id: socket.id, ...data });
      }
    );

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      io.emit("user-disconnected", socket.id);
    });
  });

  return io;
};
