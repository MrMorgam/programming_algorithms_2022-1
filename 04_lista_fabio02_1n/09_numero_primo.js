import {input} from '../io_utils.js'

function main(){
    // Input
    const number = Number(input('Digite um número inteiro de 0 a 100: '))

    // Processing
    let isPrime = verify_number_is_prime(number)

    if(isPrime === true){
        isPrime = 'é primo'
    }else{
        isPrime = 'não é primo'
    }
    
    // Output
    console.log(`O número ${number} ${isPrime}`)
}

function verify_number_is_prime (n){
    let div_by_2_remain = n % 2
    let div_by_3_remain = n % 3
    let div_by_5_remain = n % 5
    let div_by_7_remain = n % 7

    if(n === 0 || n === 1 ){
        return false
    }else if(n === 2 || n === 3|| n === 5 || n === 7){
        return true
    }else if(div_by_2_remain === 0 || div_by_3_remain === 0 || div_by_5_remain === 0 || div_by_7_remain === 0){
        return false
    }else{
        return true
    }
}
    
main()