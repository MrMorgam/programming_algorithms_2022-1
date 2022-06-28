const input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
    let counter = 1
    let number
    let maxNumber = Number(lines[0])
    let maxNumberPosition = 1

    while (counter < 100) {
        counter++
        number = Number(lines[counter - 1])

        if (number > maxNumber){
            maxNumber = number
            maxNumberPosition = counter
        }
    }

    console.log(`${maxNumber}`)
    console.log(`${maxNumberPosition}`)
}

main()