
let num = 23

let result = (num % 2 == 0) ? "numner is even": "number is odd"

console.log(result)

//leap year

let year = 2030

let isLeapYear = (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0)? "year is leap year" : "year is not leap year " 

console.log(isLeapYear)