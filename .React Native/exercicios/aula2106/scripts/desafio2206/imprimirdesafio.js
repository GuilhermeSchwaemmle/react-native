"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const desafio_1 = __importDefault(require("./desafio"));
var p1 = new desafio_1.default(1, "jose", 996994643, "jose@gmail.com");
console.log(p1);
p1.salvar();
p1.validar();
p1.imprimeDados();
