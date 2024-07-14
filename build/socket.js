"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSocketIO = void 0;
const socket_io_1 = require("socket.io");
const setupSocketIO = (httpServer) => {
    const io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: true,
            methods: ["GET", "POST"],
            credentials: true,
        },
        // transports: ["websocket"],
    });
    io.on("connection", (socket) => {
        console.log("User Connected ", socket.id);
        socket.on("send-location", (data) => {
            io.emit("receive-location", { id: socket.id, ...data });
        });
        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
            io.emit("user-disconnected", socket.id);
        });
    });
    return io;
};
exports.setupSocketIO = setupSocketIO;
