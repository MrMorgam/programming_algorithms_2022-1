import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let counter = 1
    let number
    let maxNumber = Number(input(`Valor ${counter}: `))
    let maxNumberPosition = 1

    while(counter < 10){
        counter++
        number = Number(input(`Valor ${counter}: `))

        if(number > maxNumber){
            maxNumber = number
            maxNumberPosition = counter
        }
    }

    console.log(`Maior número: ${maxNumber}`)
    console.log(`Posição do maior número: ${maxNumberPosition}`)
}

main()