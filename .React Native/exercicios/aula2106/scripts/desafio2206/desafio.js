"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(id, nome, fone, email, peso, altura) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
        this.peso = peso;
        this.altura = altura;
    }
    salvar() {
        console.log(`salvou`);
    }
    imcPessoa() {
        return parseFloat((this.peso / (this.altura ** 2)).toFixed(1));
    }
    validar() {
        console.log(`validou`);
    }
    imprimeDados() {
        console.log(`id: ${this.id}`);
        console.log(`nome: ${this.nome}`);
        console.log(`fone: ${this.fone}`);
        console.log(`email: ${this.email}`);
        console.log(`peso: ${this.peso}`);
        console.log(`altura: ${this.altura}`);
    }
}
exports.default = Pessoa;
