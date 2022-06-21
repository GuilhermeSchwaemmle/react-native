"use strict";
var Epessoa;
(function (Epessoa) {
    Epessoa[Epessoa["FISICA"] = 2] = "FISICA";
    Epessoa[Epessoa["JURIDICA"] = 3] = "JURIDICA";
})(Epessoa || (Epessoa = {}));
var cliente;
cliente = Epessoa.FISICA;
console.log(cliente);
var senac;
senac = Epessoa.JURIDICA;
console.log(senac);
