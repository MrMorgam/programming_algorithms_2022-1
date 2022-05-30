import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [coordX, coordY] = input('Digite as coordenadas X e Y de um ponto no plano cartesiano: ').split(' ').map(Number)

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