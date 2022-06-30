class Product {
    id: number
    descricao: string
    preco: number
    constructor(id: number, descricao: string, preco: number) {
        this.id = id
        this.descricao = descricao
        this.preco = preco
    }
}

let prod1 = new Product(1, 'Feijao', 7.89)
let prod2 = new Product(2, 'Arroz', 5.89)

class ItemVenda {
    id: number
    produto: Product
    qtd: number
    constructor(id: number, produto: Product, qtd: number) {
        this.id = id
        this.produto = produto
        this.qtd = qtd
    }
}

let it1 = new ItemVenda(1, prod1, 10)
let it2 = new ItemVenda(2, prod2, 15)

console.log(it1, it2);
