import { get_number } from './input_utilities.js'

function main(){
    const wage = get_number('Digite o salário (em R$): ')
    
    const wageIncreased = calc_wage_increase(wage)
    const increaseValue = wageIncreased - wage
    const increasePercentage = (increaseValue / wage) * 100

    console.log(`\nSalário original: R$ ${wage.toFixed(2)}`)
    console.log(`Percentual do aumento: ${increasePercentage.toFixed(2)}%`)
    console.log(`Valor do aumento: R$ ${increaseValue.toFixed(2)}`)
    console.log(`Salário após aumento: R$ ${wageIncreased.toFixed(2)}\n`)
}

function calc_wage_increase(wage){

    if(wage <= 0){
        return 0
    }else if(wage <= 280){
        return wage + (wage * 0.20)
    }else if(wage <= 700){
        return wage + (wage * 0.15)
    }else if(wage <= 1500){
        return wage + (wage * 0.10)
    }else{
        return wage + (wage * 0.05)
    }
}

main()