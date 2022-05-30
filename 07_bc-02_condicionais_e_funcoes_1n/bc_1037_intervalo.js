import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const number = Number(input('Digite um número: '))

    const interval = calc_interval(number)

    if(interval === undefined){
        console.log('Fora de intervalo')
    }else{
        console.log(`Intervalo ${interval}`)
    }
}

function calc_interval(n){
    if(n >= 0 && n <= 25){
        return '[0,25]'
    }else if(n > 25 && n <= 50){
        return '(25,50]'
    }else if(n > 50 && n <= 75){
        return '(50,75]'
    }else if(n > 75 && n <= 100){
        return '(75,100]'
    }else{
        return undefined
    }
}

main()