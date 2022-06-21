var nome = "Guilherme Augusto"
const sobrenome = "Schwaemmle"

var anoAtual = 2022 //notação do camelo (camel case)
var anoNascimento = 2003

var mesNascimento = 7
var mesAtual = 4

var diaNascimento = 14
var diaAtual = 26

var idade = anoAtual - anoNascimento

if(mesAtual <= mesNascimento){
  idade--
}

if(mesAtual == mesNascimento){
    if(diaAtual < diaNascimento)
    idade--
}

console.log(`${nome} ${sobrenome}, ${idade} anos`)
