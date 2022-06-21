function somaNum(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma
}

let numeros = [1, 2, 3, 4, 5]

console.log(somaNum(numeros));