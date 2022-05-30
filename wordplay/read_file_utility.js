import {readFileSync} from 'fs'

export function load_lines_from_a_file(filename){
    const file = readFileSync(filename, {encoding:'utf-8'})

    const loaded_lines = file.split('\n')

    return loaded_lines
}
