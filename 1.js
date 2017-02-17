const data = require('./data.js')
const {
    filter,
    take,
    map,
    compose
} = require('ramda')

// Return the first 25 simple hourly forecast observations.
// Each object in the returned array should include the following forecast infomation:
  //  day of the week (Ex: 'Friday')
  //  time and date
  //  temperature in fahrenheit
  //  weather condition (ex: 'Rain')

var result = compose (

take (100),
map (cleanHourlyObservation)
)(data.hourly_forecast)


function cleanHourlyObservation(x) {
        return {
            weekday: x.FCTTIME.weekday_name,
            timeAndDate: x.FCTTIME.pretty,
            temperature: x.temp.english,
            condition: x.condition
        }
    }





console.log("1) First 25 simplified hourly forecast observations: ", result)
