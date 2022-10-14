import { Router } from "express";
import gameRouter from "./routes/game"


const api = Router();

api.use('/game',gameRouter)


export default api;