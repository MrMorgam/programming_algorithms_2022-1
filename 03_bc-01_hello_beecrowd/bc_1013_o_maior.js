import { print, input } from '../io_utils.js'


function main (){
   const line1 = input('Digite 3 números: ')
   
   const values1 = line1.split(' ')
   const a = Number(values1[0])
   const b = Number(values1[1])
   const c = Number(values1[2])


   const biggestAB = (a + b + Math.abs(a - b)) / 2
   const biggest = (biggestAB + c + Math.abs(biggestAB - c)) / 2

   print(`${biggest} eh o maior`)
}

main()