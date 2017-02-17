const data = require('./data.js')
const {
    filter,
    take,
    map,
    uniq,
    compose
} = require('ramda')
// Return an array of the various weather conditions, the conditions cannot repeat.
// HINT: there'a a ramda function that returns a unique list.

// Expected Output:
// Unique and various weather conditions: [ 'Partly Cloudy',
//   'Clear',
//   'Mostly Cloudy',
//   'Overcast',
//   'Ice Pellets',
//   'Snow Showers',
//   'Snow',
//   'Chance of Rain' ]


var result = compose (

uniq,
map (weatherConditionTypes)
)(data.hourly_forecast)

function weatherConditionTypes(x) {
        return x.condition
    }

console.log("Unique and various weather conditions:", result)
