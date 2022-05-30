import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let numbers = input('Digite dois números: ').split(' ').map(Number)
    let m = numbers[0]
    let n = numbers[1]
    let smaller, greater
    let output
    let sum

    while(!(m <= 0 || n <= 0)){
        output = ''
        sum = 0

        if(m >= n){
            greater = m
            smaller = n
        }else{
            greater = n
            smaller = m
        }

        while(smaller <= greater){
            sum += smaller
            output += `${smaller} `
            smaller++
        }

        console.log(`${output}Sum=${sum}`)

        numbers = input('Digite dois números: ').split(' ').map(Number)
        m = numbers[0]
        n = numbers[1]
    }

    
}

main()