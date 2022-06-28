"use strict";
class Bicho {
    constructor() {
        this.raca = '';
        this.especie = '';
        this.quantidadeMamas = 10;
    }
    getQtdLeite() {
        return 10;
    }
    barulho(x) {
        console.log(`Barulho de ${x}`);
    }
}
let bicho;
bicho = new Bicho;
bicho.barulho('pocotó pocotó');
