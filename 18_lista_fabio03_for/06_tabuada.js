function main() {
    console.log('Tabuada dos números de 1 a 10\n')
    
    const multiplicationTable = multiplicationTable1ToN(10)

    console.log(multiplicationTable)

}

function multiplicationTable1ToN(limitNumber){
    let result = 0
    let multiplicationTable = ''
        
    for (let number2 = 1; number2 <= limitNumber; number2++) {

        for (let number1 = 1; number1 <= limitNumber; number1++) {
            result = number1 * number2
            
            // Theses if lines are for aestheritic purpose only 
            if (number1 === 1 && number2 < 10 && result < 10) {
                multiplicationTable += `| ${number1}x${number2} = ${result}   |`
            } else if (number1 === 1 && number2 < 10 && result >= 10) {
                multiplicationTable += `| ${number1}x${number2} = ${result}  |`
            } else if (number1 === 1 && number2 >= 10 && result >= 10) {
                multiplicationTable += `| ${number1}x${number2} = ${result} |`
            } else if (number1 < 10 && number2 < 10 && result < 10) {
                multiplicationTable += ` ${number1}x${number2} = ${result}   |`
            } else if (result >= 10 && number1 >= 10 & number2 < 10) {
                multiplicationTable += ` ${number1}x${number2} = ${result}   |`
            } else if (result >= 10 && number1 < 10 && number2 < 10) {
                multiplicationTable += ` ${number1}x${number2} = ${result}  |`
            } else {
                multiplicationTable += ` ${number1}x${number2} = ${result} |`
            }
        }
        
        multiplicationTable += `\n`
    }

    return multiplicationTable
}

main()