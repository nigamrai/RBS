import cors from 'cors';
import express from "express";
import { FRONTEND_URL } from './config';
import errorMiddleware from "./middlewares/error.middleware";
import userRouter from "./routes/user.route";
const app = express();

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:[FRONTEND_URL]
}))
app.use("/api/v1/user", userRouter);

app.use(errorMiddleware);
export default app;
