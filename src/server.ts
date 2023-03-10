import 'reflect-metadata'
import 'dotenv/config'
import express, { json } from 'express';
import router from './router';
import { AppDataSource } from './database/data-source';
import cors from 'cors';

const port = Number(process.env.SERVER_PORT)
const app = express();

app.use(json())
app.use(cors())
app.use("/auth", router);


AppDataSource.initialize()
    .then(()=>{
        app.listen(port, () =>{
            console.log(`Server running on port ${port}`)
        })
    })
    .catch((error) => console.log(error))
