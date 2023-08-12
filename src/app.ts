import express, { Express} from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config';
import todoRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000

app.use(cors());
app.use(todoRoutes);

const uri: string = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.DB_HOST}:27017/${process.env.MONGO_DB}?authSource=admin`;

console.log(`uri: ${uri}`);

mongoose
    .connect(uri)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(error => {
        throw error
    });