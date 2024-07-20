
let name = "John";
let age = 23
let str = ` hello my name is ${name} and my age is ${age}`;
console.log(str);

 let pragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Perspiciatis esse unde, rem vero  ${name} nostrum quibusdam cupiditate tempore. 
  Natus fugiat fugit maxime culpa  ${age} tenetur suscipit quo voluptatibus nobis, 
  nihil alias praesentium.`

console.log(pragraph);

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

console.log(car, suv);

const books = {
    title: '1984',
    author: 'George Orwell',
    pages: 328
}

 const {title , author, pages} = books 


console.log(title)
console.log(author)
console.log(pages)


 let myArr = [ 3,5 ,7, 3,5 ,7]

let uniqueArr = [...myArr, 45, 23, 4, 11, 25];
console.log(uniqueArr);


function sum(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
const result = sum(1, 2, 3, 4, 5 , 5, 5, 3, 7, 8 );
  console.log(result); 

 function product( num1 , num2 = 1){
    
     return num1 * num2;
 }
 
 console.log(product(3));


const propertyName = 'dynamicProperty';
const methodName = 'dynamicMethod';

const myObject = {
  // Property shorthand
  name: 'John Doe',
  age: 30,

  [propertyName]: 'This is a dynamic property',

 
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },

  [methodName]() {
    console.log('This is a dynamically named method.');
  }
};

console.log(myObject);
myObject.greet();
myObject.dynamicMethod();


const keyName = 'dynamicKey';

const Object = {
  [keyName]: 'This is a value for the dynamic key'
};

console.log(Object);