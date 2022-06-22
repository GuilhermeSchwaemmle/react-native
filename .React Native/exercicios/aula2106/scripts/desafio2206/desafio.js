"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(id, nome, fone, email) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
    }
    salvar() {
        console.log(`salvou`);
    }
    validar() {
        console.log(`validou`);
    }
    imprimeDados() {
        console.log(`id: ${this.id}`);
        console.log(`nome: ${this.nome}`);
        console.log(`fone: ${this.fone}`);
        console.log(`email: ${this.email}`);
    }
}
exports.default = Pessoa;
