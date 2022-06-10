import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numberOfDwellers = Number(input('Digite a quantidade de habitantes pesquisados: '))

    const salary = new Array(numberOfDwellers)
    const numberOfChildren = new Array(numberOfDwellers)

    let i = 0

    while (i < numberOfDwellers) {
        console.log(`\nHabitante ${i+1}:`)
        salary[i] = Number(input('Digite o salário: '))
        numberOfChildren[i] = Number(input('Digite a quantidade de filhos: '))

        i++
    }

    const averageWage = calcAverageWage(salary)
    const averageNumberOfChildren = calcAverageNumberOfChildren(numberOfChildren)
    const peopleThatEarn1000OrLessPercentage = numberOfPeopleThatEarn1000OrLessPercentage(salary)

    console.log(`Salário médio: R$ ${averageWage.toFixed(2)}`)
    console.log(`Número médio de filhos: ${averageNumberOfChildren}`)
    console.log(`Porcentagem de pessoas que ganham menos que R$ 1000: ${peopleThatEarn1000OrLessPercentage.toFixed(2)} %`)
}

function calcAverageWage(salary) {
    let i = 0
    let sumOfSalaries = 0

    while (i < salary.length) {
        sumOfSalaries += salary[i]
        i++
    }

    return sumOfSalaries / salary.length
}

function calcAverageNumberOfChildren(numberOfChildren) {
    let i = 0
    let sumOfChildren = 0

    while (i < numberOfChildren.length) {
        sumOfChildren += numberOfChildren[i]
        i++
    }

    return sumOfChildren / numberOfChildren.length
}

function numberOfPeopleThatEarn1000OrLessPercentage(salary) {
    let i = 0
    let peopleThatEarn1000OrLess = 0

    while (i < salary.length) {
        if (salary[i] <= 1000){
            peopleThatEarn1000OrLess++
        }
        
        i++
    }

    return (peopleThatEarn1000OrLess / salary.length) * 100
}

main()