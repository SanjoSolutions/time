import moment from 'moment'

export function dateInNDays(date, n) {
  return moment(date).add(n, 'days').toDate()
}

export function dateIn30Days(date) {
  return dateInNDays(date, 30)
}

console.log(dateIn30Days(new Date()))
