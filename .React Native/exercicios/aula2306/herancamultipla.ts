interface IAnimal {
    raca: string
    especie: string
    barulho(x: string): void
}

class Bicho implements IAnimal{
    raca: string = ''
    especie: string = ''

    barulho(x: string): void {
        console.log(`Barulho de ${x}`)
    }
}

let bicho: Bicho
bicho = new Bicho
bicho.barulho('pocotó pocotó')