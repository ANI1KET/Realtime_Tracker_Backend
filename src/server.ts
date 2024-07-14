import express, { Express } from "express";
import { createServer } from "http";
import cors from "cors";

import { PORT } from "./env_variable";
import { setupSocketIO } from "./socket";

const app: Express = express();
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

const sockethttpServer = createServer(app);
setupSocketIO(sockethttpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sockethttpServer.listen(PORT, () => {
  console.log(`Server Running on Port : ${PORT}`);
});
