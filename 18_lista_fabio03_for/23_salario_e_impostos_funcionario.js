import prompt from "prompt-sync"
const input = prompt()

function main() {
    const numberOfEmployees = Number(input('Digite a quantidade de empregados: '))

    const idNumbers = new Array(numberOfEmployees)
    const hoursWorked = new Array(numberOfEmployees)
    const numberOfDependents = new Array(numberOfEmployees)

    for (let i = 0; i < numberOfEmployees; i++) {
        console.log(`\nEmpregado ${i+1}:`)
        idNumbers[i] = Number(input('Digite o código de identificação: '))
        hoursWorked[i] = Number(input('Digite a quantidade de horas trabalhadas: '))
        numberOfDependents[i] = Number(input('Digite número de dependentes: '))
    }

    const grossSalary = calcGrossSalary(hoursWorked, numberOfDependents)
    const socialSecurityContribution = calcTaxes(grossSalary, 8.5)
    const incomeTax = calcTaxes(grossSalary, 5)
    const netSalary = calcNetSalary(grossSalary, socialSecurityContribution, incomeTax)
    
    for (let i = 0; i < numberOfEmployees; i++) {
        console.log(`\nEmpregado ${i+1} (${idNumbers[i]}):`)
        console.log(`Salário bruto: R$ ${grossSalary[i].toFixed(2)}`)
        console.log(`INSS: R$ ${socialSecurityContribution[i].toFixed(2)}`)
        console.log(`IR: R$ ${incomeTax[i].toFixed(2)}`)
        console.log(`Salário líquido: R$ ${netSalary[i].toFixed(2)}`)
    }

}

function calcGrossSalary(hoursWorked, numberOfDependents) {
    const grossSalary = new Array(hoursWorked.length)

    for (let i = 0; i < hoursWorked.length; i++) {
        grossSalary[i] = (hoursWorked[i] * 12) + (numberOfDependents[i] * 40)
    }

    return grossSalary
}


function calcTaxes(grossSalary, taxPercentage) {
    const incomeTax = new Array(grossSalary.length)

    for (let i = 0; i < grossSalary.length; i++) {
        incomeTax[i] = grossSalary[i] * (0.01 * taxPercentage)
    }

    return incomeTax
}

function calcNetSalary(grossSalary, socialSecurityContribution, incomeTax) {
    const netSalary = new Array(grossSalary.length)

    for (let i = 0; i < grossSalary.length; i++) {
        netSalary[i] = grossSalary[i] - socialSecurityContribution[i] - incomeTax[i]
    }

    return netSalary
}

main()