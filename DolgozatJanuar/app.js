import express, { json } from "express";
import { initializeDB } from "./database.js";
import booksRouter from "./routes/books.js";
import {readFile} from "fs/promises";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';


const app = express();
const swaggerDocument = JSON.parse(await readFile(new URL("./swagger-output.json", import.meta.url)));

app.use(cors());
app.use(express.json());
app.use("/books", booksRouter);
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup( swaggerDocument))
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

const startServer = async () => {
    await initializeDB();
    app.listen(3000, () => console.log("A szerver fut a http://localhost/3000"));
};

startServer();