import {input} from '../io_utils.js'

function main(){
    // Input
    const [side1, side2, side3] = input('Digite três medidas de comprimento: ').split(" ").map(Number)

    // Processing
    let formTriangle = verify_sides_form_triangle(side1, side2, side3)
    const triangleType = calc_triangle_type(side1, side2, side3)

    // Output
    if(formTriangle === true){
        console.log(`As medidas dos lados formam um triângulo do tipo: ${triangleType}`)
    }else{
        console.log('As medidas dos lados não formam um triângulo')
    }
    
}

function verify_sides_form_triangle(s1, s2, s3){
    if(s1 + s2 < s3 || s1 + s3 < s2 || s2 + s3 < s1){
        return false
    }else{
        return true
    }
}

function calc_triangle_type(s1, s2, s3){
    if(s1 + s2 < s3 || s1 + s3 < s2 || s2 + s3 < s1){
        return false
    }else{
        if(s1 === s2 && s2 === s3){
            return 'equilátero'
        }else if(s1 === s2 || s1 === s3 || s2 === s3){
            return 'isósceles'
        }else{
            return 'escaleno'
        }
    }
}

main()