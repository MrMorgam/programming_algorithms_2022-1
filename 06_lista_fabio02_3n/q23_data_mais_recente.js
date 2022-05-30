import {input} from '../io_utils.js'

function main(){
    // Input
    const [day1, month1, year1] = input('Digite uma data (no formato dd/mm/aaaa): ').split('/').map(Number)
    const [day2, month2, year2] = input('Digite outra data (no formato dd/mm/aaaa): ').split('/').map(Number)
    const [currentDay, currentMonth, currentYear] = input('Digite a data de hoje (no formato dd/mm/aaaa): ').split('/').map(Number)

    // Processing
    const diffDate1ToCurrentDate = calc_diff_between_dates_in_days(day1, month1, year1, currentDay, currentMonth, currentYear)
    const diffDate2ToCurrentDate = calc_diff_between_dates_in_days(day2, month2, year2, currentDay, currentMonth, currentYear)
    const closestDateInDays = Math.min(diffDate1ToCurrentDate, diffDate2ToCurrentDate)
    let closestDateDay
    let closestDateMonth
    let closestDateYear

    if(closestDateInDays === diffDate1ToCurrentDate){
        closestDateDay = day1
        closestDateMonth = month1
        closestDateYear = year1
    }else{
        closestDateDay = day2
        closestDateMonth = month2
        closestDateYear = year2
    }

    // Output
    console.log(`A data mais recente é: ${closestDateDay}/${closestDateMonth}/${closestDateYear}`)
}

function calc_diff_between_dates_in_days(d1, m1, y1, d2, m2, y2){
    const total_days_date1 = d1*(m1*30)*y1
    const total_days_date2 = d2*(m2*30)*y2

    return total_days_date2 - total_days_date1
}

main()