const data = require('./data.js')
const {
    filter,
    take,
    map,
    compose
} = require('ramda')

// When will it snow?
// Return an array of objects containing:
  // day of the week
  // date and time
  // weather condition

var result = compose (


map (cleanHourlyObservation),
filter(x=> x.condition === 'Snow')
)(data.hourly_forecast)


function cleanHourlyObservation(x) {
        return {
            weekday: x.FCTTIME.weekday_name,
            timeAndDate: x.FCTTIME.pretty,
            condition: x.condition
        }
    }

console.log("When will it snow?", result)
