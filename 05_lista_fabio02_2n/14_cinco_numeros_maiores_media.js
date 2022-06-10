import {input} from '../io_utils.js'

function main(){
    // Input
    const [number1, number2, number3, number4, number5] = input('Digite cinco números inteiros diferentes: ').split(' ').map(Number)

    // Processing
    const arithmeticMean = calc_arithmetic_mean(number1, number2, number3, number4, number5)
    let numbersGreaterThanAvg = []

    if(number1 > arithmeticMean){
        numbersGreaterThanAvg.push(number1)
    }
    if(number2 > arithmeticMean){
        numbersGreaterThanAvg.push(number2)
    }
    if(number3 > arithmeticMean){
        numbersGreaterThanAvg.push(number3)
    }
    if(number4 > arithmeticMean){
        numbersGreaterThanAvg.push(number4)
    }
    if(number5 > arithmeticMean){
        numbersGreaterThanAvg.push(number5)
    }

    // Output
    console.log(`A média dos números é: ${arithmeticMean}`)
    console.log(`Os números que são maiores que a média são:`)
    numbersGreaterThanAvg.forEach(element => console.log(`${element}`))
}

function calc_arithmetic_mean (num1, num2, num3, num4, num5){
    return (num1 + num2 + num3 + num4 + num5) / 5
}



main()