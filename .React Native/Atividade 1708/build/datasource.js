"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Profile_1 = require("./entity/Profile");
var User_1 = require("./entity/User");
var Usuario_1 = require("./entity/Usuario");
var Foto_1 = require("./entity/Foto");
var Categoria_1 = require("./entity/Categoria");
var Questoes_1 = require("./entity/Questoes");
var dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    // entities: ["src/entity/*.js"],
    entities: [User_1.User, Profile_1.Profile, Usuario_1.Usuario, Foto_1.Foto, Categoria_1.Categoria, Questoes_1.Questoes],
    logging: false,
    synchronize: true,
});
exports.default = dataSource;
