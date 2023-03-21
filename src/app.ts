import "dotenv/config"
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo"
const PORT = process.env.PORT || 3002
const app = express();
//Siempre express.json arriba de las rutas
app.use(express.json());
app.use(cors());
app.use(router)
app.use(express.urlencoded({ extended: true }))
db().then(()=> console.log('Conection is ready'))
app.listen(PORT,()=>console.log(`listening on port ${PORT}`));