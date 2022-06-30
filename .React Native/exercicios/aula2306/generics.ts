function dados<T>(p1: T, p2: T): T[] {
    let vetor: T[] = []
    vetor.push(p1)
    vetor.push(p2)
    return vetor
}

let numeros = dados<number>(10, 20)
numeros.push(50)

console.log(numeros);

let frutas = dados<string>('laranja', 'banana')
frutas.push('maçã')
console.log(frutas);

function base<X, U>(n1: X, n2: U){
    console.log(`${n1}, ${n2}`);
}

let boletim = base<string, number>('jose',7)
let func1 = base<string, boolean>('joao', true)
let func2 = base<string, boolean>('pedro', false)