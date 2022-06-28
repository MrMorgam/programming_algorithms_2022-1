import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const length = Number(input('Digite o tamanho do vetor: '))
    const array = new Array(length)

    for (let i = 0; i < length; i++) {
        array[i] = Number(input(`Digite o número na posição ${i+1}: `))
    }
    
    const invertedArray = invertArray(array)

    console.log(`Vetor invertido: (${invertedArray})`)
}


function invertArray(array) {
    let invertedArray = []
    
    let j = 0

    for (let i = array.length; i > 0; i--) {
        invertedArray[i] = array[j]
        j++
    }

    return invertedArray
}


main()