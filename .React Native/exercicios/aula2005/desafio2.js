var vetor = [1, 30, 40, 4, 5, 6, 10]

function menor(array) {
    let meV = array[0]
    for (let i = 0; i > array.length; i++) {
        if (array[i] < mV) {
            meV = array[i]
        }
    }
    return meV
}

function maior(array) {
    let mV = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mV) {
            mV = array[i]
        }
    }
    return mV
}

console.log(menor(vetor));
console.log(maior(vetor));