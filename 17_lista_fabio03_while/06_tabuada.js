function main() {
    console.log('Tabuada dos números de 1 a 10\n')
    
    const multiplicationTable = multiplicationTable(10)

    console.log(multiplicationTable)

}

function multiplicationTable(limitNumber){
    let number1 = 1
    let number2 = 1
    let result = 0
    let multiplicationTable = `| ${number1}x${number2} = ${result}   |`
    number1++
        
    while(number2 <= limitNumber) {

        while (number1 <= limitNumber) {
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

            number1++
        }
        
        multiplicationTable += `\n`
        number2++
        number1 = 1
    }

    return multiplicationTable
}

main()