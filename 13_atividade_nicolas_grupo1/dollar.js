import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const dollarQuote = Number(input('Digite a cotação do dólar (em R$): '))
    const dollarAmount = Number(input('Digite quantos dólares deseja comprar: '))
    
    const amountInDollar = dollarQuote * dollarAmount
    const taxes = amountInDollar * 0.011
    const amountToPay = dollarAmount * dollarQuote + taxes
    
    console.log(`\nValor a pagar: R$ ${amountToPay}`)
}


main()