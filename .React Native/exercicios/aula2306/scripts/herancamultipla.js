"use strict";
class Bicho {
    constructor() {
        this.raca = '';
        this.especie = '';
    }
    barulho(x) {
        console.log(`Barulho de ${x}`);
    }
}
let bicho;
bicho = new Bicho;
bicho.barulho('pocotó pocotó');
