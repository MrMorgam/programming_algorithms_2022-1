var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const number = Number(lines[0])
   const hours = Number(lines[1])
   const wage = Number(lines[2])
   
   const salary = hours * wage

   console.log(`NUMBER = ${number}`)
   console.log(`SALARY = U$ ${salary.toFixed(2)}`)
}

main()