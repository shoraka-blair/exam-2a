const data = require('./data.js')
const {
    filter,
    take,
    map,
    compose
} = require('ramda')

// When where there be a chance of rain this weekend?

// Return a simplified hourly forecast where the weekend calls for rain or a chance of rain.
// Each object in the returned array should include the following forecast infomation:
  //  day of the week (Ex: 'Friday')
  //  time and date
  //  temperature in fahrenheit
  //  weather condition (ex: 'Rain')

var result = compose (

filter(x=> x.condition === 'Chance Of Rain'),
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







console.log("When where there be a chance of rain this weekend?", result)
