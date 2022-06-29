import prompt from 'prompt-sync'
const input = prompt()

function main() {
    const [startTimeHours, startTimeMinutes] = input('Digite o horário de início: ').split(':').map(Number)
    const [endTimeHours, endTimeMinutes] = input('Digite o horário final: ').split(':').map(Number)

    const timeMinutesStart = (startTimeHours * 60) + startTimeMinutes
    const timeMinutesEnd = (endTimeHours * 60) + endTimeMinutes
    
    const timeDifferenceMinutes = timeMinutesEnd - timeMinutesStart

    const durationHours = Math.trunc(timeDifferenceMinutes / 60)
    const durationMinutes = timeDifferenceMinutes % 60

    console.log(`Duração: ${durationHours}:${durationMinutes}`)
}


main()