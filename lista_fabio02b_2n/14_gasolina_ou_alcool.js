import { get_number, get_text } from './input_utilities.js'

function main(){
    const fuelVolume = get_number('Digite a quantidade de combustível (em L): ')
    const fuelType = get_text("Digite o tipo de combustível ('A' para álcool ou 'G' para gasolina): ")

    const fuelPrice = calc_fuel_price(fuelVolume, fuelType)

    if(fuelType.toUpperCase() !== 'A' && fuelType.toUpperCase() !== 'G'){
        console.log('Tipo de combustível inválido!')
    }else{
        console.log(`\nTotal a pagar: R$ ${fuelPrice.toFixed(2)}\n`)
    }
}

function calc_fuel_price(fuelVolume, fuelType){
    if(fuelType.toUpperCase() === 'A'){
        if(fuelVolume >= 20){
            return (1.9 - (1.9 * 0.03)) * fuelVolume
        }else{
            return (1.9 - (1.9 * 0.05)) * fuelVolume
        }
    }else if(fuelType.toUpperCase() === 'G'){
        if(fuelVolume >= 20){
            return (2.5 - (2.5 * 0.04)) * fuelVolume
        }else{
            return (2.5 - (2.5 * 0.06)) * fuelVolume
        }
    }else{
        return undefined
    }
}

main()