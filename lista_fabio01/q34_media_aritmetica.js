import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const number1 = Number(input("Digite o primeiro número: "))
   const number2 = Number(input("Digite o segundo número: "))
   const number3 = Number(input("Digite o terceiro número: "))

   //Processamento
   const mean = (number1 + number2 + number3) / 3

   //Saída
   print(`A média dos números ${number1}, ${number2} e ${number3} é: ${mean}.`)
    
}

main()