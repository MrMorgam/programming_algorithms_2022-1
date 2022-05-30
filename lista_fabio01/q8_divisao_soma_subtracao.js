import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const number1 = Number(input("Digite o primeiro número: "))
   const number2 = Number(input("Digite o segundo número: "))

   //Processamento
   const sum = number1 + number2
   const difference = number1 - number2
   const division = sum / difference

   //Saída
   print(`A divisão da soma pela subtração de ${number1} e ${number2} é: ${division}.`)
    
}

main()