import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const numerator_fraction1 = Number(input("Digite o numerador da primeira fração: "))
   const denominator_fraction1 = Number(input("Digite o denominador da primeira fração: "))
   const numerator_fraction2 = Number(input("Digite o numerador da segunda fração: "))
   const denominator_fraction2 = Number(input("Digite o denominador da segunda fração: "))

   //Processamento
   const denominator_result = denominator_fraction1 * denominator_fraction2
   const numerator_result = ((denominator_result / denominator_fraction1) * numerator_fraction1) + ((denominator_result / denominator_fraction2) * numerator_fraction2)

   //Saída
   print(`A soma das frações ${numerator_fraction1}/${denominator_fraction1} e ${numerator_fraction2}/${denominator_fraction2} é: ${numerator_result}/${denominator_result}.`)
    
}

main()