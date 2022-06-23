class Produto {
    descricao: string
    valoru: number
    qtd: number
    desconto: number
    acrescimo: number

    constructor(descricao: string, valoru: number, 
        qtd: number, desconto: number, acrescimo: number) {

        this.descricao = descricao
        this.valoru = valoru
        this.qtd = qtd
        this.desconto = desconto
        this.acrescimo = acrescimo
    }

    getEstoque(): void{
        console.log(`Produto: ${this.descricao}`);
        console.log(`Estoque: ${this.qtd}`);
        console.log(`Valor unitário: ${this.valoru}`);
        
    }

    precoDesc(): void{
        var desconto: number = this.valoru * (this.desconto / 100)
        desconto = this.valoru - desconto
        console.log(desconto.toFixed(2));
    }

    precoAcre(): void{
        var desconto: number = this.valoru * (this.desconto / 100)
        desconto = this.valoru + desconto
        console.log(desconto.toFixed(2));
    }

}

export default Produto