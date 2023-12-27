// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.


function city_country(city:string,country:string):string{
    
    return (`"${city.charAt(0).toUpperCase()+city.substring(1).toLowerCase()}, ${country.charAt(0).toUpperCase()+country.substring(1).toLowerCase()}"`)
}

let combination1 = city_country('lahore','pakistan')
console.log(combination1)

let combination2 = city_country('new york','america')
console.log(combination2)

let combination3 = city_country('karachi','pakistan')
console.log(combination3)