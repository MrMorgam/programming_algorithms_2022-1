import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const coefficient_a = Number(input("Digite o coeficiente a: "))
   const coefficient_b = Number(input("Digite o coeficiente b: "))
   const coefficient_c = Number(input("Digite o coeficiente c: "))
   const coefficient_d = Number(input("Digite o coeficiente d: "))
   const coefficient_e = Number(input("Digite o coeficiente e: "))
   const coefficient_f = Number(input("Digite o coeficiente f: "))

   //Processamento
   const value_x = ((coefficient_c * coefficient_e) - (coefficient_b * coefficient_f)) / ((coefficient_a * coefficient_e) - (coefficient_b * coefficient_d)) 
   const value_y = ((coefficient_a * coefficient_f) - (coefficient_c * coefficient_d)) / ((coefficient_a * coefficient_e) - (coefficient_b * coefficient_d))

   //Saída
   print(`O valor de x é: ${value_x}.`)
   print(`O valor de y é: ${value_y}.`)

}

main()