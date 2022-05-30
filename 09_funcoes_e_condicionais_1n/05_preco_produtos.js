import { get_text } from './input_utilities.js'

function main(){
    const prices = get_text('Digite o preço de 3 produtos: ')
    const [price1, price2, price3] = prices.split(' ').map(Number)
    
    const chosenProduct = verify_chosen_product(price1, price2, price3)
    
    console.log(`\nProduto: ${chosenProduct}\n`)
}

function verify_chosen_product(price1, price2, price3){
    if(price1 <= price2 && price1 <= price3){
        return '1'
    }else if(price2 <= price1 && price2 <= price3){
        return '2'
    }else{
        return '3'
    }
}

main()