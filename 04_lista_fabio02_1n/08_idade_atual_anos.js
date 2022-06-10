import {input} from '../io_utils.js'

function main(){
    // Input
    const [currentDay, currentMonth, currentYear] = input('Digite a data atual no formato dd/mm/aaaa: ').split("/").map(Number)
    const [birthDay, birthMonth, birthYear] = input('Digite a data de nascimento no formato dd/mm/aaaa: ').split("/").map(Number)

    // Processing
    const ageYears = calc_age_years (currentDay, currentMonth, currentYear, birthDay, birthMonth, birthYear)

    // Output
    console.log(`Idade: ${ageYears} ano(s)`)
}

function calc_age_years (current_day, current_month, current_year, birth_day, birth_month, birth_year){
    let age_day
    let age_month

    if(current_day < birth_day){ 
        age_day = (30 + current_day) - birth_day
        current_month = current_month - 1
    } else {
        age_day = current_day - birth_day
    }
    if(current_month < birth_month){
        age_month = (12 + current_month) - birth_month
        current_year = current_year - 1
    } else {
        age_month = current_month - birth_month
    }

    return current_year - birth_year
}

main()