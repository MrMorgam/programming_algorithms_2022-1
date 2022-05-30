import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const number1 = Number(input("Digite o primeiro número: "))
   const number2 = Number(input("Digite o segundo número: "))

   //Processamento
   const quotient = Math.trunc(number1 / number2)
   const remainder = number1 % number2

   //Saída
   print(`O quociente da divisão entre ${number1} e ${number2} é: ${quotient}.`)
   print(`O resto da divisão entre ${number1} e ${number2} é: ${remainder}.`)
    
}

main()