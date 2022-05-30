import {input} from '../io_utils.js'

function main(){
    // Input
    const [classHoursProf1, amountPerHourProf1] = input('Digite a quantidade de horas aulas e o valor recebido por hora aula: ').split(' ').map(Number)
    const [classHoursProf2, amountPerHourProf2] = input('Digite a quantidade de horas aulas e o valor recebido por hora aula: ').split(' ').map(Number)
    
    // Processing
    let greaterSalary = calc_higher_salary(classHoursProf1, amountPerHourProf1, classHoursProf2, amountPerHourProf2)

    // Output
    if(greaterSalary === 0){
        console.log(`Os salários são iguais`)
    }else if(greaterSalary === 1){
        console.log(`O maior salário é o do professor 1`)
    }else{
        console.log(`O maior salário é o do professor 2`)
    }
}

function calc_higher_salary(worked_hours1, amount_per_hour1, worked_hours2, amount_per_hour2){
    const salary1 = worked_hours1 * amount_per_hour1
    const salary2 = worked_hours2 * amount_per_hour2
    const greater_salary = Math.max(salary1, salary2)

    if(salary1 === salary2){
        return 0
    }else if(greater_salary === salary1){
        return 1
    }else{
        return 2
    }
}

main()