import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const numberOfDwellers = Number(input('Digite a quantidade de habitantes pesquisados: '))

    const salary = new Array(numberOfDwellers)
    const numberOfChildren = new Array(numberOfDwellers)

    for (let i = 0; i < numberOfDwellers; i++) {
        console.log(`\nHabitante ${i+1}:`)
        salary[i] = Number(input('Digite o salário: '))
        numberOfChildren[i] = Number(input('Digite a quantidade de filhos: '))
    }

    const averageWage = calcAverageWage(salary)
    const averageNumberOfChildren = calcAverageNumberOfChildren(numberOfChildren)
    const peopleThatEarn1000OrLessPercentage = numberOfPeopleThatEarn1000OrLessPercentage(salary)

    console.log(`\nSalário médio: R$ ${averageWage.toFixed(2)}`)
    console.log(`Número médio de filhos: ${averageNumberOfChildren}`)
    console.log(`Porcentagem de pessoas que ganham menos que R$ 1000: ${peopleThatEarn1000OrLessPercentage.toFixed(2)} %`)
}

function calcAverageWage(salary) {
    let sumOfSalaries = 0

    for (let i = 0; i < salary.length; i++) {
        sumOfSalaries += salary[i]
    }

    return sumOfSalaries / salary.length
}

function calcAverageNumberOfChildren(numberOfChildren) {
    let sumOfChildren = 0

    for (let i = 0; i < numberOfChildren.length; i++) {
        sumOfChildren += numberOfChildren[i]
    }

    return sumOfChildren / numberOfChildren.length
}

function numberOfPeopleThatEarn1000OrLessPercentage(salary) {
    let peopleThatEarn1000OrLess = 0

    for (let i = 0; i < salary.length; i++) {
        if (salary[i] <= 1000){
            peopleThatEarn1000OrLess++
        }
    }

    return (peopleThatEarn1000OrLess / salary.length) * 100
}

main()