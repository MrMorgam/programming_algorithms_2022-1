import prompt from "prompt-sync"
const input = prompt()

function main() {
    const numberOfEmployees = Number(input('Digite a quantidade de empregados: '))

    const idNumbers = new Array(numberOfEmployees)
    const hoursWorked = new Array(numberOfEmployees)
    const numberOfDependents = new Array(numberOfEmployees)

    let i = 0

    while (i < numberOfEmployees) {
        console.log(`\nEmpregado ${i+1}:`)
        idNumbers[i] = Number(input('Digite o código de identificação: '))
        hoursWorked[i] = Number(input('Digite a quantidade de horas trabalhadas: '))
        numberOfDependents[i] = Number(input('Digite número de dependentes: '))

        i++
    }

    const grossSalary = calcGrossSalary(hoursWorked, numberOfDependents)
    const socialSecurityContribution = calcSocialSecurityContribution(grossSalary)
    const incomeTax = calcIncomeTax(grossSalary)
    const netSalary = calcNetSalary(grossSalary, socialSecurityContribution, incomeTax)

    i = 0
    
    while (i < numberOfEmployees) {
        console.log(`\nEmpregado ${i+1} (${idNumbers[i]}):`)
        console.log(`Salário bruto: R$ ${grossSalary[i].toFixed(2)}`)
        console.log(`INSS: R$ ${socialSecurityContribution[i].toFixed(2)}`)
        console.log(`IR: R$ ${incomeTax[i].toFixed(2)}`)
        console.log(`Salário líquido: R$ ${netSalary[i].toFixed(2)}`)

        i++
    }


}

function calcGrossSalary(hoursWorked, numberOfDependents) {
    let i = 0
    const grossSalary = new Array(hoursWorked.length)

    while (i < hoursWorked.length) {
        grossSalary[i] = (hoursWorked[i] * 12) + (numberOfDependents * 40)
        i++
    }

    return grossSalary
}

function calcSocialSecurityContribution(grossSalary) {
    let i = 0
    const socialSecurityContribution = new Array(grossSalary.length)

    while (i < grossSalary.length) {
        socialSecurityContribution[i] = grossSalary[i] * 0.085
        i++
    }

    return socialSecurityContribution
}

function calcIncomeTax(grossSalary) {
    let i = 0
    const incomeTax = new Array(grossSalary.length)

    while (i < grossSalary.length) {
        incomeTax[i] = grossSalary[i] * 0.05
        i++
    }

    return incomeTax
}

function calcNetSalary(grossSalary, socialSecurityContribution, incomeTax) {
    let i = 0
    const netSalary = new Array(grossSalary.length)

    while (i < grossSalary.length) {
        netSalary[i] = grossSalary[i] - socialSecurityContribution[i] - incomeTax[i]
        i++
    }

    return netSalary
}

main()