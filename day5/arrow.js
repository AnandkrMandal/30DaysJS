
let sum = (num1 , num2) => {
    return result =  num1 + num2;
} 

console.log(sum(3, 5)); 

let checkspecial = (str) => {
    const specialCharactersPattern = /[!@#$%^&*(),.?":{}|<>]/g;
    return specialCharactersPattern.test(str);
}

const stringWithSpecialCharacters = "Hello, World!";
console.log(checkspecial(stringWithSpecialCharacters));



let product = (val1 = 10, val2 = 45) => {

    return product = val1 * val2;
}

console.log(product(34,43));



let greeting = (name , age = 19) =>{
    return `Hello ${name}! You are ${age} years old.`;

}
console.log(greeting('Anand' ,78));


let Sum = ( x, y ) => {
  let sum = 0;
 return result = calculate(x , y)
}

function  calculate(a , b) { 
    return a + b;
 }

console.log(sum( 697, 475))



let highfunction = ( i , j) =>{
    let productvalue = funone( i, j );
    return productvalue;

}
function funone( i, j ) {
    let k = i * j;
    return funtwo(k)
}

function funtwo( k ) {
   return  k * k;
}

console.log(highfunction( 7, 9 ));
