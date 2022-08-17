import { DataSource } from "typeorm"
import { Profile } from "./entity/Profile"
import { User } from "./entity/User"
import { Usuario } from "./entity/Usuario"
import { Foto } from "./entity/Foto"
import { Categoria } from "./entity/Categoria"
import { Questoes } from "./entity/Questoes"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    // entities: ["src/entity/*.js"],
    entities: [User, Profile, Usuario, Foto, Categoria, Questoes],
    logging: false,
    synchronize: true,
})

export default dataSource