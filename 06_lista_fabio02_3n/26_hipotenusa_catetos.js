import {input} from '../io_utils.js'

function main(){
    // Input
    const [side1, side2, side3] = input('Digite o comprimento dos três lados de um triângulo retângulo: ').split(' ').map(Number)

    // Processing
    const hypotenuse = calc_hypothenuse(side1, side2, side3)
    let cathetus1
    let cathetus2

    if(hypotenuse === side1){
        cathetus1 = side2
        cathetus2 = side3
    }else if(hypotenuse === side2){
        cathetus1 = side1
        cathetus2 = side3
    }else{
        cathetus1 = side1
        cathetus2 = side2
    }

    // Output
    console.log(`Hipotenusa: ${hypotenuse}`)
    console.log(`Catetos: ${cathetus1}, ${cathetus2}`)
}

function calc_hypothenuse(s1, s2, s3){
    return Math.max(s1, s2, s3)
}

main()