"use strict";
class Pessoa {
    constructor() {
        this.nome = '';
        this.identificador = 0;
        this.idade = 0;
    }
    setIdentificador(id) {
        this.identificador = id;
    }
    setIdade(idade) {
        this.idade = idade;
    }
}
let pessoa;
pessoa = new Pessoa();
pessoa.nome = 'jose';
pessoa.setIdentificador(1000);
console.log(pessoa);
class Aluno extends Pessoa {
    constructor() {
        super(...arguments);
        this.media = 0;
    }
}
let aluno = new Aluno();
aluno.nome = 'jose';
aluno.media = 10;
aluno.setIdentificador(125);
aluno.setIdade(15);
console.log(aluno);
