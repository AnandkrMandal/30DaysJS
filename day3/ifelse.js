//  task1 #program to check no is positive or negetive

let num = 89;

if(num > 0 ){
    console.log(num + ' is positive');
}
else if(num <0) {
    console.log(num + ' is negative ');
}
else{
    console.log(num + ' is zero ');
}


//task2 program to check person is elligible to vote or not

let age = 19;

if(age >= 18){

    console.log('person is elligible to vote')
}
else {
    console.log('person is not eligible to vote')
}

// task3 program to to find largest of three numbers

let num1 = 78;
let num2 = 79;
let num3 = 76;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1 +' is largest numbers ');
    }

} else if ( num2 > num3){
    if(num2 > num1){
        console.log(num2 + ' is largest numbers')
    }
}else {
    console.log( num3 +' is largest numbers')
}

