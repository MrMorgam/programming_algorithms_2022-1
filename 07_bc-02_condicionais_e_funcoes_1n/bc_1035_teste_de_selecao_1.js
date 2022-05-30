import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [number1, number2, number3, number4] = input('Digite quatro números inteiros: ').split(' ').map(Number)

    const acceptedValues = calc_accepted_values(number1, number2, number3, number4)

    if(acceptedValues){
        console.log('Valores aceitos!')
    }else{
        console.log('Valores não aceitos!')
    }
}

function calc_accepted_values(a, b, c, d){
    if(b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0){
        return true
    }else{
        return false
    }
}

main()