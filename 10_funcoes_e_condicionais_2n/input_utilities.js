import prompt from 'prompt-sync'
const input = prompt()

export function get_number(message){
    let number = Number(input(message))
    
    if(isNaN(number)){
        console.log('\nDigite um valor numérico!\n')
        number = get_number(message)
    }

    return number
}

export function get_text(message){
    let text = input(message)
    
    if(text.length === 0){
        console.log('\nTexto vazio!\n')
        text = get_text(message)
    }

    return text
}