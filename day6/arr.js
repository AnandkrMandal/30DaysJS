
//array declerations

let myArr = [1,2,3,4,5]

console.log(myArr);

// accessing elements in an array
let numbers = [34, 56, 56, 98, 25, 86]

console.log(numbers[0])

//array methods
 numbers.push(100) // adds element to end of array
 console.log(numbers)

 numbers.pop() // removes last element from array
 console.log(numbers)

 numbers.unshift(200) // adds element to start of array
 console.log(numbers)

 numbers.shift() // removes first element from array
 console.log(numbers)

 let removedElement = numbers.splice(2, 1, 400) // removes elements from array at specified index and inserts new elements
 console.log(numbers)
 console.log(removedElement)

 numbers.sort((a, b) => a - b) // sorts array in ascending order
 console.log(numbers)

 numbers.reverse() // reverses the order of elements in array
 console.log(numbers)

 let indexOfNumber = numbers.indexOf(400) // returns index of first occurrence of specified element
 console.log(numbers)

 //arr method 

 let Arrfilter = numbers.filter(num => num > 50) // creates a new array with elements that pass the test implemented by provided function
 console.log(Arrfilter);

let Arrmap = numbers.map( num => num < 50) // creates a new array with elements that pass the
console.log(Arrmap);

let Arrreduce = numbers.reduce((accumulator, currentValue = 0) => accumulator + currentValue)
console.log(Arrreduce);

//arr method for and foreach methods

for ( let i = 0 ; i <= numbers.length ; i++){
    console.log(numbers[i]);  //prints elements in array using for loop
}

numbers.forEach(num => console.log(num))

//two dimensional arrays

let my2DArray = [[1,2,3],[4,5,6],[7,8,9]]

console.log(my2DArray) 

//accessing elements in a 2D array

console.log(my2DArray[2][1])

