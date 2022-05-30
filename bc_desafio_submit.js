import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const wage = Number(input())

    const incomeTax = calc_income_tax(wage)

    if(incomeTax === 0){    
        console.log('Isento')
    } else { 
        console.log(`R$ ${incomeTax.toFixed(2)}`)
    }
}

function calc_income_tax (salary){
    if(salary <= 2000){ 
        return 0
    } else if(salary <= 3000){
        return (salary - 2000) * 0.08
    } else if(salary <= 4500){
        return (1000 * 0.08) + ((salary - 3000) * 0.18)
    }else{  
        return (1000 * 0.08) + (1500 * 0.18) + ((salary - 4500) * 0.28)
    }
}

main()