import {input} from '../io_utils.js'

function main(){
    // Input
    const angle = Number(input('Digite o ângulo (em graus): '))

    // Procesing
    const quadrant = calc_quadrant_of_angle(angle)
    
    // Output
    if(angle < 0 || angle > 360){
        console.log('Ângulo inválido')
    }else{
        console.log(`O ângulo pertence ao(s) quadrante(s): ${quadrant}`)
    }
}

function calc_quadrant_of_angle(ang){
    if(ang === 0 || ang === 360){
        return '1 e 4'
    }else if(ang > 0 && ang < 90){
        return '1'
    }else if(ang === 90){
        return '1 e 2'
    }else if(ang > 90 && ang < 180){
        return '2'
    }else if(ang === 180){
        return '2 e 3'
    }else if(ang > 180 && ang < 270){
        return '3'
    }else if(ang === 270){
        return '3 e 4'
    }else{
        return '4'
    }
}

main()