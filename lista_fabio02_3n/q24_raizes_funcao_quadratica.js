import {input} from '../io_utils.js'

function main(){
    // Input
    const [coefA, coefB, coefC] = input('Digite os coeficientes (A, B, c) da equação quadrática: ').split(' ').map(Number)

    // Processing
    const root1 = calc_root_quadratic_eq(coefA, coefB, coefC, 1)
    const root2 = calc_root_quadratic_eq(coefA, coefB, coefC, 2)
    
    // Output
    if(coefA === 0){
        console.log('O valor do coefiente A é inválido (A = 0)')
    }else{
        console.log(`As raízes da equação quadrática são: (${root1}, ${root2})`)
    }
}

function calc_root_quadratic_eq(a, b, c, root_1_2){
    const delta = (b ** 2) - (4 * a * c)

    if(root_1_2 === 1){
        return ((-b) - Math.sqrt(delta)) / (2 * a) 
    }else if(root_1_2 === 2){
        return ((-b) + Math.sqrt(delta)) / (2 * a)
    }else{
        return 'opção de raíze inválida'
    }
}

main()