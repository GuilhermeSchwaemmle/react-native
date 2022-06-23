class Pessoa {
    nome: string = ''
    protected identificador: number = 0
    private idade: number = 0

    setIdentificador(id: number): void {
        this.identificador = id
    }
    setIdade(idade: number): void {
        this.idade = idade
    }
}
let pessoa: Pessoa
pessoa = new Pessoa()
pessoa.nome = 'jose'
pessoa.setIdentificador(1000)
console.log(pessoa);

class Aluno extends Pessoa {
    media: number = 0
}

let aluno = new Aluno()
aluno.nome = 'jose'
aluno.media = 10
aluno.setIdentificador(125)
aluno.setIdade(15)

console.log(aluno);
