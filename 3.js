const data = require('./data.js')
const {
    filter,
    take,
    map,
    compose
} = require('ramda')

// What will the weather be like during my morning commute?
// Return an array of objects containing:
  // day of the week
  // date and time
  // weather condition
//  for the weekday morning rush hour (Monday through Friday / 7 am and 8 am)

var result = compose (


map (cleanHourlyObservation),
filter(x=> x.FCTTIME.weekday_name === 'Monday' || x.FCTTIME.weekday_name === 'Tuesday'||x.FCTTIME.weekday_name === 'Wednesday' || x.FCTTIME.weekday_name === 'Thursday'|| x.FCTTIME.weekday_name === 'Friday'),
filter(x=> x.FCTTIME.hour === '7'||x.FCTTIME.hour === '8')
)(data.hourly_forecast)


function cleanHourlyObservation(x) {
        return {
            weekday: x.FCTTIME.weekday_name,
            timeAndDate: x.FCTTIME.pretty,
            condition: x.condition
        }
    }









console.log("What will the weather be like during my morning commute?", result)
