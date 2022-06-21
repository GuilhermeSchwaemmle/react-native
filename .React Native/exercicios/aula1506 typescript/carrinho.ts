
interface produto {
    idProduto: number
    marca: string
    quantidade: number
    categoria: string
    descricao: string
    preco: number
    obsevacoes?: string
}

let p1: produto = {
    idProduto: 0,
    quantidade: 2,
    marca: "Asus",
    categoria: "Placa de vídeo",
    descricao: "RTX 3090",
    preco: 12500.00,
    obsevacoes: "Embalar muito bem"
}

let p2: produto = {
    idProduto: 1,
    quantidade: 1,
    marca: "AMD",
    categoria: "Processador",
    descricao: "Ryzen 7 5800x",
    preco: 3890.00
}
interface carrinho {
    produtos: produto[]
    valorTotal?: number
}

let shop: carrinho = { produtos: [p1, p2]}

let p3: produto = {
    idProduto: 2,
    quantidade: 1,
    marca: "ASUS",
    categoria: "Placa mãe",
    descricao: "X570 M",
    preco: 2990.90
}

shop.produtos.push(p3)

function valorTotal(carrinho: carrinho): number {
    let produtos = carrinho.produtos
    let total: number = 0
    total = produtos.reduce((acumulador, produto) => {
        return acumulador += produto.quantidade * produto.preco
    }, 0)
    // console.log(this);
    
    return total
}

console.log(shop);
console.log(`O valor todal é: R$${valorTotal(shop).toFixed(2)}`);

