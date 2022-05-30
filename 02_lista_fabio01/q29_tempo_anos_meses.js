import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const start_time = Number(input("Digite o tempo em meses: "))

   //Processamento
   const time_year = Math.trunc(start_time / 12)
   const time_month = start_time % 12

   //Saída
   print(`O tempo total é: ${time_year} ano(s) e ${time_month} mês(es).`)
    
}

main()