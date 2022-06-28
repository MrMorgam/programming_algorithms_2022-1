const input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
    let counter = 0
    let quantity = Number(lines[counter++])
    let quotient
    let line
    let x, y

    while (counter < quantity) {
        line = lines[counter++].split(' ').map(Number)
        x = line[0]
        y = line[1]

        if (y === 0) {
            console.log('divisao impossivel')
            continue
        }

        quotient = x / y
        console.log(`${quotient.toFixed(1)}`)
    }
}

main()