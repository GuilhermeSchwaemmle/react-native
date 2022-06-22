import Pessoa from "./desafio";

var p1 = new Pessoa(1, "jose", 996994643, "jose@gmail.com", 60, 1.67)
// console.log(p1)
p1.salvar()
p1.validar()
p1.imprimeDados()
console.log(`IMC: ${p1.imcPessoa()}`);