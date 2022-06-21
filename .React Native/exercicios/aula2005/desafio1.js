// produtos/itens
var p1 = {
    descricao: "arroz",
    preco: 5.99,
    quantidade: 1,
    subtotal: function() {
        return (this.preco * this.quantidade)
    }
}

var p2 = {
    descricao: "feijão",
    preco: 8.49,
    quantidade: 1,
    subtotal: function() {
        return (this.preco * this.quantidade)
    }
}

var p3 = {
    descricao: "café",
    preco: 25.49,
    quantidade: 2,
    subtotal: function() {
        return (this.preco * this.quantidade)
    }
}

var p4 = {
    descricao: "farinha de trigo",
    preco: 7.99,
    quantidade: 1,
    subtotal: function() {
        return (this.preco * this.quantidade)
    }
}

var p5 = {
    descricao: "macarrão",
    preco: 3.99,
    quantidade: 4,
    subtotal: function() {
        return (this.preco * this.quantidade)
    }
}

//array
var carrinho = [p1, p2, p3, p4, p5]

function total(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i].subtotal()
    }
    return soma
}

console.log(carrinho)
console.log(total(carrinho).toFixed(2))