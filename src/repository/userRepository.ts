import { AppDataSource } from "../database/data-source";
import { User } from "../domain/user";

export const userRepository = AppDataSource.getRepository(User)