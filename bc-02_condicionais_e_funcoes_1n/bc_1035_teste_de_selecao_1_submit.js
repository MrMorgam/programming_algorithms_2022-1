var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [number1, number2, number3, number4] = lines[0].split(' ').map(Number)

    const acceptedValues = calc_accepted_values(number1, number2, number3, number4)

    if(acceptedValues){
        console.log('Valores aceitos')
    }else{
        console.log('Valores nao aceitos')
    }
}

function calc_accepted_values(a, b, c, d){
    if(b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0){
        return true
    }else{
        return false
    }
}

main()