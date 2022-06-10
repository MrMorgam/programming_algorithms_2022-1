import {input} from '../io_utils.js'

function main(){
    // Input
    const [coordX1, coordY1] = input('Digite as coordenasdas x e y do primeiro canto do triângulo: ').split(' ').map(Number)
    const [coordX2, coordY2] = input('Digite as coordenasdas x e y do segundo canto do triângulo: ').split(' ').map(Number)

    // Processing
    let rectangleArea = calc_rect_area_by_corners(coordX1, coordY1, coordX2, coordY2)
    rectangleArea = Math.abs(rectangleArea)

    // Output
    console.log(`A área do retângulo formado é: ${rectangleArea}`)
}

function calc_rect_area_by_corners(x1, y1, x2, y2){
    let length
    let width

    if(x2 >= x1){
        width = x2 - x1
    }else{
        width = x1 - x2
    }

    if(y2 >= y1){
        length = y2 - y1
    }else{
        length = y1 - y2
    }
    
    return length * width
}

main()