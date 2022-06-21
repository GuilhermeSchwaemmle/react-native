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

var carrinho = []
carrinho.push(p1)
carrinho.push(p2)

//finalizar o carrinho
let i = 0;
let total = 0;
while (i < carrinho.length) {
    total += carrinho[i].subtotal()
    i++
}

console.log(total);