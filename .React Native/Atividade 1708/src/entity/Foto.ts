import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Usuario } from "./Usuario"

@Entity()
export class Foto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @ManyToOne(() => Usuario, (user) => user.fotos)
    @JoinColumn({name:'user_id'})
    user: Usuario
}