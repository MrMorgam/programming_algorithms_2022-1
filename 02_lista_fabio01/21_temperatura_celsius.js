import { print, input } from '../io_utils.js'


function main (){
   //Entrada
   const temperature_fahrenheit = Number(input("Digite a temperatura em °F: "))

   //Processamento
   const temperature_celsius = ((5 * temperature_fahrenheit) - 160) / 9

   //Saída
   print(`A temperatura na escala Celsius é: ${temperature_celsius}°C.`)
    
}

main()