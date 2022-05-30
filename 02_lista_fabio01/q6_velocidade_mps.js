import { print, input } from '../io_utils.js'


function main (){
    //Entrada
    const speed_kmph = Number(input("Digite a velocidade em km/h: "))

    //Processamento
    const speed_mps = speed_kmph / 3.6

    //Saída
    print(`A velocidade em m/s é: ${speed_mps}.`)
}

main()