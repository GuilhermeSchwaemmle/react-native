"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(descricao, valoru, qtd, desconto, acrescimo) {
        this.descricao = descricao;
        this.valoru = valoru;
        this.qtd = qtd;
        this.desconto = desconto;
        this.acrescimo = acrescimo;
    }
    getEstoque() {
        console.log(`Produto: ${this.descricao}`);
        console.log(`Estoque: ${this.qtd}`);
        console.log(`Valor unitário: ${this.valoru}`);
    }
    precoDesc() {
        var desconto = this.valoru * (this.desconto / 100);
        desconto = this.valoru - desconto;
        console.log(desconto.toFixed(2));
    }
    precoAcre() {
        var acrescimo = this.valoru * (this.acrescimo / 100);
        acrescimo = this.valoru + acrescimo;
        console.log(acrescimo.toFixed(2));
    }
}
exports.default = Produto;
