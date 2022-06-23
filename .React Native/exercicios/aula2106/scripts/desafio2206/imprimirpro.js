"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const desafiopro_1 = __importDefault(require("./desafiopro"));
var pro1 = new desafiopro_1.default('Feijão', 5.49, 15, 5, 5);
pro1.getEstoque();
pro1.precoDesc();
pro1.precoAcre();
