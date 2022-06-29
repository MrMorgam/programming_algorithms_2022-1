import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const alcoholYield = Number(input('Digite o rendimento com álcool (km/L): '))
    const gasYield = Number(input('Digite o rendimento com gasolina (km/L): '))
    const distance = Number(input('Digite a distância a ser percorrida (km): '))
    const alcoholPrice = Number(input('Digite o preço do álcool (R$/L): '))
    const gasPrice = Number(input('Digite o preço da gasolina (R$/L): '))

   const tripCostsAlcohol = calcFuelExpenses(distance, alcoholYield, alcoholPrice)
   const tripCostsGas = calcFuelExpenses(distance, gasYield, gasPrice)

    console.log(`\nGasto com combustível usando álcool: R$ ${tripCostsAlcohol.toFixed(2)}`)
    console.log(`Gasto com combustível usando gasolina: R$ ${tripCostsGas.toFixed(2)}`)
}



function calcFuelExpenses(distance, fuelYield, fuelPrice) {
    return (fuelPrice / fuelYield) * distance
}


main()