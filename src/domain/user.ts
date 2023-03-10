import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    user: string
    @Column()
    pass: string
    @Column()
    name: string
    @Column()
    surname: string
    @Column()
    email: string
}