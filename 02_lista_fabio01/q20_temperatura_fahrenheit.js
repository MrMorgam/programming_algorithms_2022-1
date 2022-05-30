import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const temperature_celsius = Number(input("Digite temperatura em °C: "))

   //Processamento
   const temperature_fahrenheit = ((9 * temperature_celsius) + 160) / 5

   //Saída
   print(`A temperatura na escala Fahrenheit é: ${temperature_fahrenheit}°F.`)
    
}

main()