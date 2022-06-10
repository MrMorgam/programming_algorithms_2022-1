import { print, input } from '../io_utils.js'


function main (){
    //Entrada
    const speed_mps = Number(input("Digite a velocidade em m/s: ")) 

    //Processamento
    const speed_kmph = speed_mps * 3.6

    //Saída
    print(`A velocidade é: ${speed_kmph.toFixed(2)} km/h.`)
}

main()