var p1 = {
    descricao: 'Feijão',
    preco: 7.89,
    qtde: 10,
    subtotal: function(){
        return this.preco * this.qtde
    }
}

var p2 = {
    descricao: 'Arroz',
    preco: 15.89,
    qtde: 5,
    subtotal: function(){
        return this.preco * this.qtde
    }
}
var carrinho = []
carrinho.push(p1)
carrinho.push(p2)
/**Finalizar o carrinnho */
let i = 0;
let total = 0;
while(i < carrinho.length){
   total += carrinho[i].subtotal()
   i++
}
console.log(total.toFixed(2))
