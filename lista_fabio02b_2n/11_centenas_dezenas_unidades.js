import { get_number } from './input_utilities.js'

function main(){
    const number = get_number('Digite um número de 0 a 999: ')
    
    if(!verify_number_integer(number)){
        console.log('\nO número deve ser inteiro!\n')
    }else{
        if(!verify_number_in_range(number, 0, 999)){
            console.log('\nDigite um número dentro do intervalo de 0 a 999\n')
        }else{
            const numberInFull = write_3_digit_number_in_full(number)
            console.log('\n' + numberInFull + '\n')
        }
    }

}

function verify_number_in_range(number, min, max){
    return number >= min && number <= max
}

function verify_number_integer(number){
    return number - Math.trunc(number) === 0
}

function write_3_digit_number_in_full(number){
    const cent = Math.trunc(number / 100)
    const ten = Math.trunc((number - (cent * 100)) / 10)
    const unit = number - (cent*100) - (ten*10)

    let wordCent
    let wordTen
    let wordUnit

    if(cent !== 1){
        wordCent = 'centenas'
    }else{
        wordCent = 'centena'
    }

    if(ten !== 1){
        wordTen = 'dezenas'
    }else{
        wordTen = 'dezena'
    }

    if(unit !== 1){
        wordUnit = 'unidades'
    }else{
        wordUnit = 'unidade'
    }

    if(cent !== 0 && ten !== 0 && unit !== 0){
        return `${cent} ${wordCent}, ${ten} ${wordTen} e ${unit} ${wordUnit}.`
    }else if(cent !== 0 && ten !== 0 && unit === 0){
        return `${cent} ${wordCent} e ${ten} ${wordTen}.`
    }else if(cent !== 0 && ten === 0 && unit !== 0){
        return `${cent} ${wordCent} e ${unit} ${wordUnit}.`
    }else if(cent !== 0 && ten === 0 && unit === 0){
        return `${cent} ${wordCent}.`
    }else if(cent === 0 && ten !== 0 && unit !== 0){
        return `${ten} ${wordTen} e ${unit} ${wordUnit}.`
    }else if(cent === 0 && ten !== 0 && unit === 0){
        return `${ten} ${wordTen}.`
    }else{
        return `${unit} ${wordUnit}.`
    }
}

main()