"use strict";
class Bicho {
    constructor() {
        this.raca = 'Piatã';
        this.especie = 'Suína';
        this.quantidadeMamas = 10;
    }
    getQtdLeite() {
        return 10;
    }
    barulho(x) {
        console.log(`Barulho de ${x}`);
    }
    display() {
        console.log(`Raça: ${this.raca}`);
        console.log(`Espécie: ${this.especie}`);
        console.log(`N° de mamas: ${this.quantidadeMamas}`);
    }
}
let bicho;
bicho = new Bicho;
bicho.barulho('pocotó pocotó');
bicho.display();
