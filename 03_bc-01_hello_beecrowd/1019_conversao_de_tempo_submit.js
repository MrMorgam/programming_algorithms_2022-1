var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const time = Number(lines[0])
   
   const hour = Math.trunc(time / 3600)
   const remainder = time % 3600
   const minute = Math.trunc(remainder / 60)
   const second = remainder % 60

   console.log(`Tempo total: ${hour}:${minute}:${second}`)
}

main()