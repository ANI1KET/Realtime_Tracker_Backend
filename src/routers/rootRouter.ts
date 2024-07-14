import { Router } from "express";
import authRoutes from "./auth";

const rootRoute: Router = Router();

rootRoute.use("/auth", authRoutes);

export default rootRoute;
