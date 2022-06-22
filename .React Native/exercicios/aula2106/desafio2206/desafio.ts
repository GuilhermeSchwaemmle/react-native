class Pessoa {
    id: number
    nome: string
    fone: number
    email: string
    peso: number
    altura: number

    constructor(id: number, nome: string, fone: number,
        email: string, peso: number, altura: number) {

        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
        this.peso = peso
        this.altura = altura
    }

    salvar(): void {
        console.log(`salvou`);

    }

    imcPessoa(): number {
        return parseFloat((this.peso / (this.altura ** 2)).toFixed(1))
    }

    validar(): void {
        console.log(`validou`);

    }

    imprimeDados(): void {
        console.log(`id: ${this.id}`)
        console.log(`nome: ${this.nome}`)
        console.log(`fone: ${this.fone}`)
        console.log(`email: ${this.email}`)
        console.log(`peso: ${this.peso}`)
        console.log(`altura: ${this.altura}`)
    }
}

export default Pessoa