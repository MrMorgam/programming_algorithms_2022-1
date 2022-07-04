import { inputNumberWithMinValue, inputString } from './1_utils.js'


function main() {
    const consumidor = inputString('Digite o nome do consumidor: ')

    // (a)
    const valorBaseKWh = 0.89
    
    const bandeira = inputString('Digite a bandeira tarifária: ')

    let valorBandeiraCada100kWh = 0

    if (bandeira === 'verde') {
        valorBandeiraCada100kWh = 0
    } else if (bandeira === 'amarela') {
        valorBandeiraCada100kWh = 2.989
    } else if (bandeira === 'vermelha patamar 1') {
        valorBandeiraCada100kWh = 6.5
    } else if (bandeira === 'vermelha patamar 2') {
        valorBandeiraCada100kWh = 9.795
    }

    const consumoKWh = inputNumberWithMinValue('Digite o consumo do mês em KWh: ', 0)

    const valorConsumoBase = consumoKWh * valorBaseKWh

    const valorBandeira = Math.trunc(consumoKWh / 100) * valorBandeiraCada100kWh
    
    let valorKWh = valorBaseKWh + valorBandeira

    if (consumoKWh <= 30) { // (b)
        
        valorKWh = 0

    } else if (consumoKWh > 200) { // (c)
        
        valorKWh = valorBaseKWh + (valorBaseKWh * 0.3)
    
    }

    let valorFaturaSemImposto = valorKWh * consumoKWh

    // (d)
    let taxaIluminacao = 0

    if (valorFaturaSemImposto === 0) {
        taxaIluminacao = 0
    } else {
        taxaIluminacao = 0.03 * valorFaturaSemImposto
    }

    valorFaturaSemImposto += taxaIluminacao

    // (e)

    const icms = valorFaturaSemImposto * 0.25
    const pisCofins = valorFaturaSemImposto * 0.0375

    const valorFaturaComImposto = valorFaturaSemImposto  + icms + pisCofins

    
    mostrarExtrato(consumidor, consumoKWh, valorConsumoBase, valorBandeira, valorBandeiraCada100kWh, valorFaturaSemImposto, icms, pisCofins, taxaIluminacao, valorFaturaComImposto)

}


// (g)
function mostrarExtrato(consumidor, consumoKWh, valorConsumoBase, valorBandeira, valorBandeiraCada100kWh, valorFaturaSemImposto, icms, pisCofins, taxaIluminacao, valorFaturaComImposto) {
    let extrato = '\n********* TALÃO MENSAL XPTO *********'
    extrato += `\nConsumidor: ${consumidor}`
    extrato += `\nConsumo (kWh): ${consumoKWh}`
    extrato += `\nConsumo (R$): ${valorConsumoBase.toFixed(2)}`
    extrato += `\nBandeira tarifária: R$ ${valorBandeira.toFixed(2)} (valor por 100 kWh: R$ ${valorBandeiraCada100kWh.toFixed(2)})`
    extrato += `\nTotal sem impostos: R$ ${valorFaturaSemImposto.toFixed(2)}`
    extrato += `\nICMS: R$ ${icms.toFixed(2)}`
    extrato += `\nPIS/Confins: R$ ${pisCofins.toFixed(2)}`
    extrato += `\nIluminação pública: R$ ${taxaIluminacao.toFixed(2)}`
    extrato += '\n----------------------------------------'
    extrato += `\nTotal a pagar: R$ ${valorFaturaComImposto.toFixed(2)}`

    console.log(extrato)
}


main()