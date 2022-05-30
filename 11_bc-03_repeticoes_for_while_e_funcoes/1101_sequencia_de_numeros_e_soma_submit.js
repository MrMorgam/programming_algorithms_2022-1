const input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    let index = 0
    let numbers = lines[index++].split(' ').map(Number)
    let m = numbers[0]
    let n = numbers[1]
    let smaller, greater
    let output
    let sum

    while(!(m <= 0 || n <= 0)){
        output = ''
        sum = 0

        if(m >= n){
            greater = m
            smaller = n
        }else{
            greater = n
            smaller = m
        }

        while(smaller <= greater){
            sum += smaller
            output += `${smaller} `
            smaller++
        }

        console.log(`${output}Sum=${sum}`)

        numbers = lines[index++].split(' ').map(Number)
        m = numbers[0]
        n = numbers[1]
    }
}

main()