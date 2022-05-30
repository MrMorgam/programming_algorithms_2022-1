import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let counter = 0
    let quantity = Number(input('Digite a quantidade: '))
    let quotient
    let line
    let x, y

    while(counter < quantity){
        line = input('Digite os valores de x e y: ').split(' ').map(Number)
        x = line[0]
        y = line[1]

        counter++

        if(y === 0){
            console.log('divisao impossivel')
            continue
        }

        quotient = (Math.round(x / y)*10) / 10
        console.log(`${quotient.toFixed(1)}`)
    }
}

main()