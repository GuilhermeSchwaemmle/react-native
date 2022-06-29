"use strict";
class Produto {
    constructor() {
        this.descricao = '';
        this.preco = 0;
    }
}
class ProdutoFinal extends Produto {
    consultar(id) {
        return `Consultando por ${id}`;
    }
    salvar() {
        throw new Error("Method not implemented.");
    }
    update(id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
let p1 = new ProdutoFinal();
p1.descricao = 'Feijao';
p1.preco = 10;
console.log(p1.consultar());
let p2 = new ProdutoFinal();
console.log(p2.consultar(10));
