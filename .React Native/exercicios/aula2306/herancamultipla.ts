interface IAnimal {
    raca: string
    especie: string
    barulho(x: string): void
}

interface IMamifero {
    quantidadeMamas: number
    getQtdLeite(): number
}

class Bicho implements IAnimal, IMamifero {
    raca: string = ''
    especie: string = ''
    quantidadeMamas: number = 10

    getQtdLeite(): number {
        return 10
    }

    barulho(x: string): void {
        console.log(`Barulho de ${x}`)
    }
}

let bicho: Bicho
bicho = new Bicho
bicho.barulho('pocotó pocotó')