var nome = "Guilherme"

var n1 = 8
var n2 = 6
var n3 = 6

var media= (n1 + n2 + n3)/3
var situacao = "aprovado"
if(media < 7){
   situacao = "reprovado"
}

console.log(`${nome}, sua média é ${media.toFixed(2)}, sua situação é ${situacao}`)