var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const number = Number(lines[0])

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