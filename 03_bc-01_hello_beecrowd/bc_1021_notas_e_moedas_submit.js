var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main (){
   const value = Number(lines[0])
   
   const bill100 = Math.trunc(value / 100)
   const remainder1 = value % 100
   const bill50 = Math.trunc(remainder1 / 50)
   const remainder2 = remainder1 % 50
   const bill20 = Math.trunc(remainder2 / 20)
   const remainder3 = remainder2 % 20
   const bill10 = Math.trunc(remainder3 / 10)
   const remainder4 = remainder3 % 10
   const bill5 = Math.trunc(remainder4 / 5)
   const remainder5 = remainder4 % 5 
   const bill2 = Math.trunc(remainder5 / 2)
   const coin100 = Math.trunc(remainder5 % 2)
   
   const valueDecimal = Math.trunc((value - Math.trunc(value)) * 100)
   const coin50 = Math.trunc(valueDecimal / 50)
   const remainder6 = valueDecimal % 50
   const coin25 = Math.trunc(remainder6 / 25)
   const remainder7 = remainder6 % 25
   const coin10 = Math.trunc(remainder7 / 10)
   const remainder8 = remainder7 % 10
   const coin5 = Math.trunc(remainder8 / 5)
   const coin1 = Math.trunc(remainder8 % 5)

   console.log(`NOTAS:`)
   console.log(`${bill100} nota(s) de R$ 100.00`)
   console.log(`${bill50} nota(s) de R$ 50.00`)
   console.log(`${bill20} nota(s) de R$ 20.00`)
   console.log(`${bill10} nota(s) de R$ 10.00`)
   console.log(`${bill5} nota(s) de R$ 5.00`)
   console.log(`${bill2} nota(s) de R$ 2.00`)

   console.log(`MOEDAS:`)
   console.log(`${coin100} moeda(s) de R$ 1.00`)
   console.log(`${coin50} moeda(s) de R$ 0.50`)
   console.log(`${coin25} moeda(s) de R$ 0.25`)
   console.log(`${coin10} moeda(s) de R$ 0.10`)
   console.log(`${coin5} moeda(s) de R$ 0.05`)
   console.log(`${coin1} moeda(s) de R$ 0.01`)
}

main()