import {input} from '../io_utils.js'

function main(){
    // Input
    const [number1, number2, number3] = input("Digite 3 números: ").split(" ").map(Number)

    // Processing
    const [firstNumber, secondNumber, thirdNumber] = calc_number_order(number1, number2, number3)
    
    // Output
    console.log(`Ordem crescente dos números: ${firstNumber}, ${secondNumber}, ${thirdNumber}`)
}

function calc_number_order(num1, num2, num3){ 
    let greaterNum
    let middleNum
    let smallerNum

    if(num1 >= num2 && num2 >= num3) {
        greaterNum = num1
        middleNum = num2
        smallerNum = num3
    }else if(num1 >= num3 && num3 >= num2){
        greaterNum = num1
        middleNum = num3
        smallerNum = num2
    }else if(num2 >= num1 && num1 >= num3){
        greaterNum = num2
        middleNum = num1
        smallerNum = num3
    }else if(num2 >= num3 && num3 >= num1){
        greaterNum = num2
        middleNum = num3
        smallerNum = num1
    }else if(num3 >= num1 && num1 >= num2){
        greaterNum = num3
        middleNum = num1
        smallerNum = num2
    }else{
        greaterNum = num3
        middleNum = num2
        smallerNum = num1
    }
    
    return [greaterNum, middleNum, smallerNum]
}

main()
