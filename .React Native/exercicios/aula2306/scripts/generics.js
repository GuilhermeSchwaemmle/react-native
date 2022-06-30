"use strict";
function dados(p1, p2) {
    let vetor = [];
    vetor.push(p1);
    vetor.push(p2);
    return vetor;
}
let numeros = dados(10, 20);
numeros.push(50);
console.log(numeros);
let frutas = dados('laranja', 'banana');
frutas.push('maçã');
console.log(frutas);
