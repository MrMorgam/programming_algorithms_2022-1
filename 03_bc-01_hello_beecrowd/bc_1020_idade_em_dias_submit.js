var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   //Entrada
   const age = Number(lines[0])

   //Processamento
   const year = Math.trunc(age / 365)
   const remainder = age % 365
   const month = Math.trunc(remainder / 30)
   const day = remainder % 30

   //Saída
   console.log(`${year} ano(s)`)
   console.log(`${month} mes(es)`)
   console.log(`${day} dia(s)`)  
}

main()