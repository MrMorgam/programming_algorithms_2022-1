var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [coordX, coordY] = lines[0].split(' ').map(Number)

    const quadrant = calc_quadrant_of_a_point(coordX, coordY)

    console.log(`${quadrant}`)
}

function calc_quadrant_of_a_point(x, y){
    if(x === 0 && y === 0){
        return 'Origem'
    }else if(y === 0){
        return 'Eixo X'
    }else if(x === 0){
        return 'Eixo Y'
    }else if(x > 0 && y > 0){
        return 'Q1'
    }else if(x < 0 && y > 0){
        return 'Q2' 
    }else if(x < 0 && y < 0){
        return 'Q3'
    }else{
        return 'Q4'
    }
}

main()