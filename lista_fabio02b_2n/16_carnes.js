import { get_number } from './input_utilities.js'

function main(){
    let meatType = get_number('Digite um tipo de carne (1- Filé, 2- Acatra ou 3- Picanha): ')

    if(meatType !== 1 && meatType !== 2 & meatType !== 3){
        console.log('Tipo de carne inválido!')
    }else{
        const meatWeight = get_number('Digite a quantidade de carne em kg: ')
        let paymentMethod = get_number('Digite a forma de pagamento (1- dinheiro ou 2- cartão): ')

        if(paymentMethod !== 1 && paymentMethod !== 2){
            console.log('Forma de pagamento inválido!')
        }else{
            const totalPrice = calc_meat_price(meatType, meatWeight, paymentMethod)
            meatType = verify_meat_type(meatType)
            paymentMethod = verify_payment_method(paymentMethod)

            console.log(`\nTipo de carne: ${meatType}`)
            console.log(`Quantidade de carne: ${meatWeight} kg`)
            console.log(`Tipo de pagamento: ${paymentMethod}`)
            console.log(`Total a pagar: R$ ${totalPrice.toFixed(2)}\n`)
        }
        
    }
    
}

function verify_meat_type(meatType){
    if(meatType === 1){
        return 'filé'
    }else if(meatType === 2){
        return 'alcatra'
    }else if(meatType === 3){
        return 'picanha'
    }else{
        return undefined
    }
}

function verify_payment_method(paymentMethod){
    if(paymentMethod === 1){
        return 'dinheiro'
    }else if(paymentMethod === 2){
        return 'cartão'
    }else{
        return undefined
    }
}

function calc_meat_price(meatType, meatWeight, paymentMethod){
    let price = 0

    if(meatType === 1){
        if(meatWeight < 5){
            price = 4.9 * meatWeight
        }else{
            price = 5.8 * meatWeight
        }
    }else if(meatType === 2){
        if(meatWeight < 5){
            price = 5.9 * meatWeight
        }else{
            price = 6.8 * meatWeight
        }
    }else if(meatType === 3){
        if(meatWeight < 5){
            price = 6.9 * meatWeight
        }else{
            price = 7.8 * meatWeight
        }
    }else{
        price = undefined
    }

    if(paymentMethod === 2){
        price = price - (price * 0.05)
    }

    return price
}

main()