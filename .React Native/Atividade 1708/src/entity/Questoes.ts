import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, JoinColumn } from "typeorm"
import { Categoria } from "./Categoria"

@Entity()
export class Questoes {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @ManyToMany(() => Categoria)
    @JoinTable({
        name: 'categoria_questao',
        joinColumn: {
            name: "questao_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "categoria_id",
            referencedColumnName: "id"
        }
    })
    categorias: Categoria[]
}