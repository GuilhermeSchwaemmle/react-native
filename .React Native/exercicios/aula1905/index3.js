// funcao anonima
var x = function() {
    console.log('função anonima')
}
x()

// arrow function
var y = () => {
    console.log('função flecha')
}
y()


var somar = (n1, n2) => {
    var resultado = n1 + n2
    console.log(resultado)
}
somar(10, 20)