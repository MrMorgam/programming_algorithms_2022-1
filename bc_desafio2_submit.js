import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const [number1, number2, number3] = input().split(' ').map(Number)

    const [value1, value2, value3] = ascending_order(number1, number2, number3)

    console.log(`${value1}`)
    console.log(`${value2}`)
    console.log(`${value3}`)
    console.log(``)
    console.log(`${number1}`)
    console.log(`${number2}`)
    console.log(`${number3}`)
}

function ascending_order(n1, n2, n3){
    if(n1 >= n2 && n2 >= n3){
        return [n3, n2, n1]
    }else if(n1 >= n3 && n3 >= n2){
        return [n2, n3, n1]
    }else if(n2 >= n1 && n1 >= n3){
        return [n3, n1, n1]
    }else if(n2 >= n3 && n3 >= n1){
        return [n1, n3, n2]
    }else if(n3 >= n1 && n1 >= n2){
        return [n2, n1, n3]
    }else{
        return [n1, n2, n3]
    }
}

main()