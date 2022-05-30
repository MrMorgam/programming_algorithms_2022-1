import {input} from '../io_utils.js'

function main(){
    // Input
    const [day, month, year] = input("Escreva uma data no formato dd/mm/aaaa: ").split("/").map(Number)

    // Processing
    let isValidDate = verify_date_is_valid(day, month, year)

    if(isValidDate === true){
        isValidDate = 'é válida'
    }else{
        isValidDate = 'não é válida'
    }

    // Output
    console.log(`A data ${isValidDate}`)
}

function verify_date_is_valid(d, m, y){
    const year_div_by_4 = y % 4

    if(y === 0 || m === 0 || d === 0) {
        return false
    }else if(m > 12 || d > 31){
        return false
    }else if((m === 4 || m === 6 || m === 9 || m === 11) && d > 30){
        return false
    }else if(year_div_by_4 !== 0 && m == 2 && d > 28){
        return false
    }else if(year_div_by_4 === 0 && m == 2 && d > 29){
        return false
    }else{
        return true
    }
}

main()