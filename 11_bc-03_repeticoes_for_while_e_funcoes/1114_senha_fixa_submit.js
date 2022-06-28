const input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
    let index = 0
    let password = Number(lines[index])
    index++

    while (password !== 2022) {
        console.log('Senha Invalida')
        password = Number(lines[index])
        index++
    }

    console.log('Acesso Permitido')
}

main()