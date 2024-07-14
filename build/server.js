"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
const env_variable_1 = require("./env_variable");
const socket_1 = require("./socket");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
}));
const sockethttpServer = (0, http_1.createServer)(app);
(0, socket_1.setupSocketIO)(sockethttpServer);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
sockethttpServer.listen(env_variable_1.PORT, () => {
    console.log(`Server Running on Port : ${env_variable_1.PORT}`);
});
