import { get_text } from './input_utilities.js'

function main(){
    console.log("Responda 's' para 'sim' e 'n' para 'não'\n")
    let questions = get_text('Telefonou para a vítima? ')
    questions += get_text('Esteve no local do crime? ')
    questions += get_text('Mora perto da vítima? ')
    questions += get_text('Devia para a vítima? ')
    questions += get_text('Já trabalhou com a vítima? ')

    const suspectOrInnocent = verify_someone_is_crime_suspect(questions)

    console.log(`\n${suspectOrInnocent}\n`)
}

function verify_someone_is_crime_suspect(questions){
    let counter = 0
    for(let letter of questions){
        if(letter.toUpperCase() === 'S'){
            counter++
        }
    }

    if(counter === 0 || counter === 1){
        return 'Inocente'
    }else if(counter === 2){
        return 'Suspeito'
    }else if(counter === 3 || counter === 4){
        return 'Cúmplice'
    }else if(counter === 5){
        return 'Assassino!'
    }else{
        return undefined
    }
}

main()