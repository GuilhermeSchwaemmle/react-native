class Pessoa {
    id: number
    nome: string
    fone: number
    email: string

    constructor(id: number, nome: string, fone: number, email: string) {
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
    }

    salvar(): void{
        console.log(`salvou`);
        
    }

    validar(): void{
        console.log(`validou`);
        
    }

    imprimeDados(): void {
        console.log(`id: ${this.id}`)
        console.log(`nome: ${this.nome}`)
        console.log(`fone: ${this.fone}`)
        console.log(`email: ${this.email}`)
    }
}

export default Pessoa