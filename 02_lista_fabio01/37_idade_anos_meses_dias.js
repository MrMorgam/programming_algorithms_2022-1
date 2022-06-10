import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const start_age = Number(input("Digite a idade em dias: "))

   //Processamento
   const age_year = Math.trunc(start_age / 365)
   const remainder = start_age % 365
   const age_month = Math.trunc(remainder / 30)
   const age_day = remainder % 30

   //Saída
   print(`A idade é: ${age_year} ano(s), ${age_month} mês(ses) e ${age_day} dia(s).`)
    
}

main()