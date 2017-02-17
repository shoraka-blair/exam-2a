const data = require('./data.js')
const {
    filter,
    take,
    map,
    compose
} = require('ramda')

// Is there a chance of rain this weekend?  return either yes or no.

//Expected Output:
// Is there a chance of rain this weekend? Yes
const Array = data.hourly_forecast

var result = function (x){

x.condition === 'Chance of Rain' && x.FCTTIME.weekday_name==='Saturday'||x.FCTTIME.weekday_name==='Sunday'? return "yes":return "no"
(data.hourly_forecast)



console.log("Is there a chance of rain this weekend?", result)
