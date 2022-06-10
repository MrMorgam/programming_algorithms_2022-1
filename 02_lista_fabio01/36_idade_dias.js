import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const age_year = Number(input("Digite a quantidade de anos: "))
   const age_month = Number(input("Digite a quantidade de meses: "))
   const age_day = Number(input("Digite a quantidade de dias: "))

   //Processamento
   const final_age = (age_year * 365) + (age_month * 30) + age_day 

   //Saída
   print(`A idade em dias é: ${final_age} dia(s).`)

}

main()