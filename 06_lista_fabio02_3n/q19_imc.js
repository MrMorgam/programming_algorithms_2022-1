import {input} from '../io_utils.js'

function main(){
    // Input
    const height = Number(input('Digite a altura (em metros): '))
    const weight = Number(input('Digite o peso (em kg): '))
    
    // Processing
    const bmi = calc_body_mass_index(height, weight)

    //Output
    if(bmi < 25){
        console.log('Peso normal')
    }else if(bmi > 25 && bmi < 30){
        console.log('Acima do peso')
    }else if(bmi > 30){
        console.log('Obeso!')
    }
}

function calc_body_mass_index(h, w){
    return w/(h**2)
}

main()