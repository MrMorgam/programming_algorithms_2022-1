const input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

function main() {
    const linesQuantity = Number(lines[0])

    let i = 0
    let num1 = 1
    let num2 = 2
    let num3 = 3
    console.log(`${num1} ${num2} ${num3} PUM`)
    i++

    while (i < linesQuantity) {
        num1 += 4
        num2 += 4
        num3 += 4
        
        console.log(`${num1} ${num2} ${num3} PUM`)

        i++
    }
}

main ()