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
var result = compose (

if (x.condition === 'Chance of Rain' && x.FCTTIME.weekday_name==='Saturday'||x.FCTTIME.weekday_name==='Sunday')
return "yes"
else return "no"
)(data.hourly_forecast)

function weatherConditionTypes(x) {
        return x.condition
    }


console.log("Is there a chance of rain this weekend?", result)
