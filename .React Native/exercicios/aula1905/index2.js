// funçoes nomeadas com parametros
function ola(nome) {
    console.log(`Olá ${nome}`)
}

ola('José')
ola('Fernanda')

function soma(n1, n2) {
    var resultado = n1 + n2
    console.log(resultado)
}
soma(10, 20)

// funcoes anonimas com parametro

var z = function(nome) {
    console.log(`Olá ${nome}`)
}

z('Maria')