import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import indexRouter from "./routes/indexRouter.js";
dotenv.config()
import "./config/database.js"
import handleErrors from "./utils/handleErrors.js";

const server = express()
server.use(express.json())
server.use(cors())
server.use("/api", indexRouter)
server.get("/", (req, res) => {res.send("Hola Rochi")})

server.use(handleErrors)

server.listen( process.env.PORT, ()=> console.log(`Server is running in port ${process.env.PORT}`) )