import env from "dotenv";
env.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { connectDB } from "./config/ConnectDB.js";
import authRoutes from "./routes/authRoutes.js";

await connectDB();

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());



app.use("/api/v1/auth", authRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`)
});