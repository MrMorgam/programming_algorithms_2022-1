import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [coeffA, coeffB, coeffC] = input('Digite os coeficientes A, B e C de uma equação quadrática: ').split(' ').map(Number)

    const root1 = calc_quadratic_formula(coeffA, coeffB, coeffC, 1)
    const root2 = calc_quadratic_formula(coeffA, coeffB, coeffC, 2)

    if(root1 === undefined || root2 === undefined){
        console.log('Impossível calcular')
    }else{
        console.log(`R1 = ${root1.toFixed(5)}`)
        console.log(`R2 = ${root2.toFixed(5)}`)
    }
}

function calc_quadratic_formula(a, b, c, rootOption){
    const delta = (b ** 2) - (4 * a * c)

    if(rootOption === 1 && delta >= 0 && a != 0){
        return (-b + Math.sqrt(delta)) / (2 * a)
    }else if(rootOption === 2 && delta >= 0 && a != 0){
        return (-b - Math.sqrt(delta)) / (2 * a)
    }else{
        return undefined
    }
}

main()