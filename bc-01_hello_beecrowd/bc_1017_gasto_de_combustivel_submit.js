var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const time = Number(lines[0])
   const avgSpeed = Number(lines[1])

   const distance = time * avgSpeed
   const comsuption = distance / 12
   
   console.log(`${comsuption.toFixed(3)}`)
}

main()