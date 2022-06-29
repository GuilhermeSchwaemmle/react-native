"use strict";
class Computador {
    constructor() {
        this.memoria = 4;
    }
    display() {
        console.log(this.memoria);
    }
}
class Notebook extends Computador {
    getCapacidadeProcessamento() {
        return 500;
    }
}
class Tablet extends Computador {
    getCapacidadeProcessamento() {
        return 200;
    }
}
let cp1;
cp1 = new Notebook();
let cp2;
cp2 = new Tablet();
