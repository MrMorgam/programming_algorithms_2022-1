import {input} from '../io_utils.js'

function main(){
    // Input
    const [angle1, angle2, angle3] = input('Digite três ângulos positivos e diferentes de 0°: ').split(" ").map(Number)

    // Processing
    let formTriangle = verify_angles_form_triangle(angle1, angle2, angle3)
    const triangleType = calc_triangle_type(angle1, angle2, angle3)

    // Output
    if(angle1 <= 0 || angle1 > 360){
        console.log('Ângulo 1 inválido')
    }else if(angle2 <= 0 || angle2 > 360){
        console.log('Ângulo 2 inválido')
    }else if(angle3 <= 0 || angle3 > 360){
        console.log('Ângulo 3 inválido')
    }else{
        if(formTriangle === true){
            console.log(`Os ângulos formam um triângulo do tipo: ${triangleType}`)
        }else{
            console.log('Os ângulos não formam um triângulo')
        }
    }
}

function verify_angles_form_triangle (ang1, ang2, ang3){
    const sum_int_ang = ang1 + ang2 + ang3

    if(sum_int_ang === 180 && ang1 !== 0 && ang2 !== 0 && ang3 !== 0){
        return true
    }else{
        return false
    }
}

function calc_triangle_type (ang1, ang2, ang3){
    const sum_int_ang = ang1 + ang2 + ang3

    if(sum_int_ang === 180 && ang1 !== 0 && ang2 !== 0 && ang3 !== 0){
        if(ang1 < 90 && ang2 < 90 && ang3 < 90){
            return 'acutângulo'
        }else if(ang1 === 90 || ang2 === 90 || ang3 === 90){
            return 'retângulo'
        }else{
            return 'obtusângulo'
        }
    }else{
        return false
    }
}

main()