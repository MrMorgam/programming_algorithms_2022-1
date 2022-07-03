export function createArray(length = 0) {
    return new Array(length)
}


export function mapArray(array, operation) {
    for (let i = 0; i < array.length; i++) {
        array[i] = operation(array[i])
    }

    return array
}


export function filterArray(array, condition) {
    let newArray = createArray()

    let j = 0
    
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            newArray[j] = array[i]
            j++
        }
    }

    return newArray
}


export function addElementArray(array, element, position) {
    const newArray = createArray(array.length + 1)

    let j = 0
    
    for (let i = 0; i < newArray.length; i++) {
        if ((i + 1) === position) {
            newArray[i] = element
        } else if ((i + 1) > position) {
            newArray[i] = array[j]
            j++
        } else {
            newArray[i] = array[j]
            j++
        }
    }

    return newArray
}


export function removeElementArray(array, position) {
    const newArray = createArray(array.length - 1)

    let j = 0
    
    for (let i = 0; i < newArray.length; i++) {
        if ((i + 1) >= position) {
            newArray[i] = array[i + 1]
        } else {
            newArray[i] = array[i]
        }
    }

    return newArray
}


export function displayArray(array) {
    return console.log(array)
}