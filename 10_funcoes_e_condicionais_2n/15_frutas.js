import { get_number } from './input_utilities.js'

function main(){
    const strawberryWeight = get_number('Digite a quantidade de morangos em kg: ')
    const appleWeight = get_number('Digite a quantidade de maçãs em kg: ')

    const totalPrice = calc_groceries_price(strawberryWeight, appleWeight)

    console.log(`\nTotal a pagar: R$ ${totalPrice.toFixed(2)}\n`)
}

function calc_groceries_price(strawberryWeight, appleWeight){
    let strawberryPrice
    let applePrice
    
    if(strawberryWeight < 5){
        strawberryPrice = 2.5 * strawberryWeight
    }else{
        strawberryPrice = 2.2 * strawberryWeight
    }

    if(appleWeight < 5){
        applePrice = 1.8 * appleWeight
    }else{
        applePrice = 1.5 * appleWeight
    }

    let totalPrice = strawberryPrice + applePrice
    const totalWeight = strawberryWeight + appleWeight

    if(totalPrice > 25 || totalWeight > 8){
        totalPrice = totalPrice - (totalPrice * 0.1)
    }

    return totalPrice
}


main()