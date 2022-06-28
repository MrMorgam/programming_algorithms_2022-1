import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const length = Number(input('Digite o tamanho do vetor: '))
    const array = new Array(length)

    for (let i = 0; i < length; i++) {
        array[i] = Number(input(`Digite o número na posição ${i+1}: `))
    }
    
    const invertedArray = verifyEqualElementsOfArray(array)

    console.log(`Elementos iguais dentro do vetor: (${invertedArray})`)
}


function verifyEqualElementsOfArray(array) {
    let a
    
    let j = 0

    for (let i = 0; i < array.length; i++) {
        
    }

    return invertedArray
}


main()