import { get_number } from './input_utilities.js'

function main(){
    const grade1 = get_number('Digite a primeira nota: ')
    const grade2 = get_number('Digite a segunda nota: ')

    const avgGrade = calc_average(grade1, grade2)
    const conceptGrade = calc_concept_grade(avgGrade)
    const passOrFail = verify_pass_or_fail_test(avgGrade) 
    
    if(avgGrade === undefined){
        console.log('Um dos valores para as notas é inválido!')
    }else{
    console.log(`\nNota 1: ${grade1.toFixed(1)}`)
    console.log(`Nota 2: ${grade2.toFixed(1)}`)
    console.log(`Média: ${avgGrade.toFixed(1)}`)
    console.log(`Conceito: ${conceptGrade}`)
    console.log(`${passOrFail}\n`)
    }
}

function calc_average(grade1, grade2){
    if(grade1 < 0 || grade1 > 10 || grade2 < 0 || grade2 > 10){
        return undefined
    }else{
        return (grade1 + grade2) / 2
    }
}

function calc_concept_grade(grade){
    if(grade < 4 && grade >= 0){
        return 'E'  
    }else if(grade < 6){
        return 'D'
    }else if(grade < 7.5){
        return 'C'
    }else if(grade < 9){
        return 'B'
    }else if(grade <= 10){
        return 'A'
    }else{
        return undefined    
    }
}

function verify_pass_or_fail_test(grade){
    if(grade >= 6 && grade <= 10){
        return 'Aprovado!'
    }else if(grade < 7.5 && grade >= 0){
        return 'Reprovado!'
    }else{
        return undefined
    }
}

main()