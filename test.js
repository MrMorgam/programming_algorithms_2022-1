import { displayMessage, loadFile } from "./utilities.js"

function main() {
    let names = loadFile('examples.txt').split('\n').map(Number)

    for (let i = 0; i < names.length; i++) {
        displayMessage(names[i])
    }
}

main()