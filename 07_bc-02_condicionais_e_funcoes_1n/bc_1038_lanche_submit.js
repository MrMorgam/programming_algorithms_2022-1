var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [productCode, productQuantity] = lines[0].split(' ').map(Number)

    const totalToBePaid = calc_total_to_be_paid(productCode, productQuantity)

    console.log(`Total: R$ ${totalToBePaid.toFixed(2)}`)
}

function calc_total_to_be_paid(code, quantity){
    if(code === 1){
        return 4 * quantity
    }else if(code === 2){
        return 4.5 * quantity
    }else if(code === 3){
        return 5 * quantity
    }else if(code === 4){
        return 2 * quantity
    }else if(code === 5){
        return 1.5 * quantity
    }else{
        return undefined
    }
}

main()