import { load_lines_from_a_file } from './read_file_utility.js'
import { get_number, get_text, enter_to_continue } from './input_utilities.js'

function main(){
    const wordList = load_lines_from_a_file('words.txt')
    const wordCount = wordList.length
    console.log(`${wordCount} palavras carregadas!\n\n`)

    show_menu()
    let option = get_number('> ')

    while(option != 0){
        if(option === 1){
            words_with_more_than_x_letters(wordList, 20)
        }else if(option === 2){
            words_without_some_letter(wordList, 'e')
        }else if(option === 3){
            console.log('')
            const avoidedLetters = get_text('Letras evitadas: ')
            words_without_avoided_letters(wordList, avoidedLetters)
        }else if(option === 4){
            console.log('')
            const availableLetters = get_text('Letras disponíveis: ')
            word_with_only_available_letters(wordList, availableLetters)
        }else if(option === 5){
            console.log('')
            const mandatoryLetters = get_text('Letras obrigatórias: ')
            words_with_mandatory_letters(wordList, mandatoryLetters)
        }else if(option === 6){
            words_that_follow_alphabetical_order(wordList)
        }else{
            console.log('\nOpção inválida!\n')
        }

        enter_to_continue()
        show_menu()
        option = get_number('> ')
    }

    console.log('\nFim!')
}

function show_menu(){
    let menu = "********* WORDPLAY *********\n\n"
    menu += "Escolha uma das opções:\n\n"
    menu += "1 - Palavras com mais de 20 letras\n"
    menu += "2 - Palavras sem a letra 'E'\n"
    menu += "3 - Palavras sem determinadas letras\n"
    menu += "4 - Palavras que usam apenas determinadas letras\n"
    menu += "5 - Palavras que usam determinadas letras pelo menos uma vez\n"
    menu += "6 - Palavras cujas letras seguem a ordem alfabética\n"
    menu += "\n0 - Sair\n"

    console.log(menu)
}

function show_percentage(part, whole){
    return (part / whole) * 100
}

function words_with_more_than_x_letters(wordList, letterCount){ // Task 1
    let counter = 0

    for(let word of wordList){
        const wordLength = word.length

        if(wordLength > letterCount){
            console.log(word)
            counter++
        }
    }

    const total = wordList.length
    const percentual = show_percentage(counter, total)

    console.log(`\nPalavras com mais de 20 letras: ${counter} (${percentual.toFixed(3)}%)\n`)
}

function words_without_some_letter(wordList, letter){ // Task 2
    let counter = 0

    for(let word of wordList){
        if(!(word_has_letter(word, letter))){
            console.log(word)
            counter++
        }
    }

    const total = wordList.length
    const percentual = show_percentage(counter, total)

    console.log(`\nPalavras sem a letra 'E': ${counter} (${percentual.toFixed(3)}%)\n`)
}

function words_without_avoided_letters(wordList, avoidedLetters){ // Task 3
    let counter = 0
    
    for (let word of wordList){
        if (word_has_not_letter(word, avoidedLetters)){
            console.log(word)
            counter++
        }
    }

    const total = wordList.length
    const percentual = show_percentage(counter, total)

    console.log(`\nPalavras sem as letras "${avoidedLetters}": ${counter} (${percentual.toFixed(3)}%)\n`)
}

function word_with_only_available_letters(wordList, availableLetters){ // Task 4 (unfinished)
    let counter = 0
    
    for(let word of wordList){
        if(word_has_only_determined_letters(word, availableLetters)){
            console.log(word)
            counter++
        }
    }

    const total = wordList.length
    const percentual = show_percentage(counter, total)

    console.log(`\nPalavras que usam apenas as letras "${availableLetters}": ${counter} (${percentual.toFixed(3)}%)\n`)
}

function words_with_mandatory_letters(wordList, mandatoryLetters){ // Task 5
    let counter = 0

    for (let word of wordList){
        if (word_has_determined_letters(word, mandatoryLetters)){
            console.log(word)
            counter++
        }
    }

    const total = wordList.length
    const percentual = show_percentage(counter, total)

    console.log(`\nPalavras com as letras "${mandatoryLetters}": ${counter} (${percentual.toFixed(3)})%\n`)
}

function words_that_follow_alphabetical_order(wordList){ // Task 6 (unfinished)
    let counter = 0

    for(let word of wordList){
        if(words_is_in_alphabetical_order(word)){
            console.log(word)
            counter++
        }
    }

    const total = wordList.length
    const percentual = show_percentage(counter, total)

    console.log(`\nPalavras cujas letras seguem a ordem alfabética: ${counter} (${percentual.toFixed(3)}%)\n`)
}

function word_has_letter(word, letter){
    for(let character of word){
        if(character === letter){
            return true
        }
    }

    return false
}

function word_has_not_letter(word, avoidedLetters){
    for(let letter of word){
        if(word_has_letter(avoidedLetters, letter)){
            return false
        }
    }

    return true
}

function word_has_determined_letters(word, mandatoryLetters){
    for(let character of mandatoryLetters){
        if(!(word_has_letter(word, character))){
            return false
        }
    }

    return true
}

function word_has_only_determined_letters(word, availableLetters){ // Unfinished
    let verification = 0

    for(let charcacters of word){
        for(let letter of availableLetters){
            if(letter === charcacters){
                verification++
            }
        }

        if(verification === 0){
            return false 
        }
        
        verification = 0
    }

    return true
}

function words_is_in_alphabetical_order(word){ // Unfinished
    for(let i in word){
        if(word[i] < word[i-1]){
            return false
        }
    }

    return true
}

main()