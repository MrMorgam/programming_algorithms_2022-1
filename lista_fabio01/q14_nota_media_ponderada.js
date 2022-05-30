import { print, input } from '../io_utils.js'


function main (){
    //Entrada
    const grade1 = Number(input("Digite a primeira nota: "))
    const weight1 = Number(input("Digite o peso da primeira nota: "))
    const grade2 = Number(input("Digite a segunda nota: "))
    const weight2 = Number(input("Digite o peso da segunda nota: "))
    const grade3 = Number(input("Digite a terceira nota: "))
    const weight3 = Number(input("Digite o peso da terceira nota: "))

    //Processamento
    const weighted_mean = ((grade1 * weight1) + (grade2 * weight2) + (grade3 * weight3)) / (weight1 + weight2 + weight3)

    //Saída
    print(`A média ponderada das três notas é: ${weighted_mean}.`)


}

main()