var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [grade1, grade2, grade3, grade4] = lines[0].split(' ').map(Number)
    
    const avgGrade = calc_average(grade1, grade2, grade3, grade4)

    if(avgGrade >= 7){
        console.log(`Media: ${avgGrade.toFixed(1)}`)
        console.log('Aluno aprovado.')
    }else if(avgGrade < 5){
        console.log(`Media: ${avgGrade.toFixed(1)}`)
        console.log('Aluno reprovado.')
    }else{
        console.log(`Media: ${avgGrade.toFixed(1)}`)
        console.log('Aluno em exame.')
        const finalExam = Number(lines[1])
        console.log(`Nota do exame: ${finalExam.toFixed(1)}`)
        const avgGradeFinal = (avgGrade + finalExam) / 2
        
        if(avgGradeFinal >= 5){
            console.log('Aluno aprovado.')
            console.log(`Media final: ${avgGradeFinal.toFixed(1)}`)
        }else{
            console.log('Aluno reprovado.')
            console.log(`Media final: ${avgGradeFinal.toFixed(1)}`)
        }
    }
}

function calc_average(n1, n2, n3, n4){
    return ((2 * n1) + (3 * n2) + (4 * n3) + n4) / 10
}

main()