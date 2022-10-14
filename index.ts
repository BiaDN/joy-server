import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { DatabaseController } from './database/DatabaseController';
import api from './routes';
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Express + TypeScript Server');
});

app.use("/api/v2", api)

// app.use(notFound);


DatabaseController.connectDb()
app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});