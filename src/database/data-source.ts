import { DataSource } from "typeorm";
import { User } from "../domain/user";

const DB_HOST = process.env.DB_HOST
const DB_PORT = Number(process.env.DB_PORT)
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_DATABASE = process.env.DB_DATABASE


export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})