import { get_text } from './input_utilities.js'

function main(){
    const letter = get_text('Digite uma letra: ')
    
    const vowellOrConsonant = verify_letter_is_vowell_or_consonant(letter)
    
    console.log(`\n${vowellOrConsonant}\n`)
}

function verify_letter_is_vowell_or_consonant(letter){
    if(letter.length !== 1){
        return 'Digite uma letra'
    }else if(letter === '1' || letter === '2' || letter === '3' || letter === '4' ||letter === '5' || letter === '6' ||letter === '7' || letter === '8' ||letter === '9' || letter === '0'){
        return 'Digite uma letra'
    }else if(letter.toUpperCase() === 'A' || letter.toUpperCase() === 'E' || letter.toUpperCase() === 'I' || letter.toUpperCase() === 'O' || letter.toUpperCase() === 'U'){
        return 'Vogal'
    }else{
        return 'Consoante'
    }
}

main()