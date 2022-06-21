function imc(peso, altura) {
    var indice = peso / (altura * altura)
    indice = indice.toFixed(1)
    console.log(indice)

    if (indice < 18.5) {
        console.log('abaixo do peso')
    }

    if (indice >= 18.5 & indice < 25)
        console.log('peso adequado')
}

imc(40, 1.69)