import {input} from '../io_utils.js'

function main(){
    //Input
    const [grade1, grade2] = input('Digite duas notas de um(a) aluno(a): ').split(' ').map(Number)
    
    // Processing
    const avgGrade = calc_arithmetic_mean(grade1, grade2)
    let pass_or_fail  
    
    if(avgGrade >= 7){
       pass_or_fail = 'aprovado(a)'
    }else{
        const finalExam = Number(input('Digite a nota do exame final: '))
        const finalAvg = calc_arithmetic_mean(avgGrade, finalExam) 

        if(finalAvg >= 5){
            pass_or_fail = 'aprovado(a)'
        }else{
            pass_or_fail = 'reprovado(a)'
        }
    }
    
    // Output
    console.log(`O(a) aluno(a) está: ${pass_or_fail}`)
}

function calc_arithmetic_mean(num1, num2){
    return (num1 + num2) / 2
}

main()