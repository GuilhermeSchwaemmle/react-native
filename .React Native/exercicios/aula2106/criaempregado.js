"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classeempregado_1 = require("./classeempregado");
var emp1 = new classeempregado_1.Empregado('jose', 7.89, 40);
console.log(emp1);
console.log(emp1.calculaSalario());
console.log(emp1.imprimeDados());
