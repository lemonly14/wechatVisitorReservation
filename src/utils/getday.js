export function getDate (startDate, endDate) {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  // if (month < 10) {
  //   month = "0" + month
  // }
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  minute = minute < 10 ? '0' + minute : minute
  // console.log(day);
  // if (day < 10) {
  //   day = "0" + day
  // }
  startDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
  // console.log("this.startDate:   ", startDate)

  // console.log(parseInt(month))
  let endMonth = parseInt(month) + 7
  if (endMonth > 12) {
    year++
    endMonth -= 12
  }

  endDate = year + '-' + endMonth + '-' + day + ' ' + hour + ':' + minute
  let arr = []
  arr.push(startDate)
  arr.push(endDate)
  return arr
}
