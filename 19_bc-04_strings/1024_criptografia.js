import prompt from 'prompt-sync'
const input = prompt()

function main() {
    
    const message = input('Digite uma frase: ')

    const encryptedMessage = encrypt_message(message)
    
    console.log(encryptedMessage)

}

function encrypt_message(message) {
    
    const encryptedMessageStep1 = encrypt_step1(message)
    const encryptedMessageStep2 = encrypt_step2(encryptedMessageStep1)
    const encryptedMessageFinal = encrypt_step3(encryptedMessageStep2)

    return encryptedMessageFinal
    
}

function encrypt_step1(message) {

    let encrypted_message

    for (let character of message) {
        if (is_letter(character)) {
            
        }
    }

    return encrypted_message
}

function is_letter(character){

}

main()