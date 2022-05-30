import { get_number } from './input_utilities.js'

function main(){
    const wagePerHour = get_number('Digite o valor recebido por hora (em R$): ')
    const workedHours = get_number('Digite o valor de horas trabalhadas no mês: ')
    
    const wagePerMonth = wagePerHour * workedHours
    const incomeTax = calc_income_tax(wagePerMonth)
    const socialSecurityContribution = calc_social_security_contribution(wagePerMonth)
    const severanceIndemnityFund = calc_severance_indemity_fund(wagePerMonth)
    const totalDiscounts = incomeTax + socialSecurityContribution
    const liquidSalary = wagePerMonth - totalDiscounts

    console.log(`\nSalário bruto: R$ ${wagePerMonth.toFixed(2)}`)
    console.log(`Imposto de renda: R$ ${incomeTax.toFixed(2)}`)
    console.log(`Contribuição previdenciária: R$ ${socialSecurityContribution.toFixed(2)}`)
    console.log(`Fundo de garatantia: R$ ${severanceIndemnityFund.toFixed(2)}`)
    console.log(`Total de descontos: R$ ${totalDiscounts.toFixed(2)}`)
    console.log(`Salário líquido: R$ ${liquidSalary.toFixed(2)}\n`)

}

function calc_income_tax(wage){
    if(wage <= 900){
        return 0
    }else if(wage <= 1500){
        return wage * 0.05
    }else if(wage <= 2500){
        return wage * 0.10
    }else{
        return wage * 0.20
    }
}

function calc_social_security_contribution(wage){
    return wage * 0.10
}

function calc_severance_indemity_fund(wage){
    return wage * 0.11
}

main()