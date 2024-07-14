function calculate ( num1, num2 , operater) {

    let value1 =  num1;
    let value2 = num2;
    let result = 0;

    switch(operater){

        case 1:
            result = value1 + value2;
            break
        case 2:
            result = value1 - value2;
            break
        case 3:
            result = value1 * value2;
            break
        case 4:
            result = value1 / value2;
        case 5:
            result = value1 % value2
        default:
            console.log('invalid operator');
            return;
    }

    console.log('result:' + result);

}

calculate( 44 , 54 , 1)


function  comparison( val1 , val2 ,  operater ) {
    let num1 = val1;
    let num2 = val2;
    let result = 0;

    switch (operater) {
        case 1:
             result = num1 < num2
            break;
        
        case 2:
            result = num1 > num2
            break;
        case 3:
            result = num1 == num2
            break;
        case 4:
            result = num1 >= num2
            break;
        case 5:
            result = num1 <= num2
            break;
        case 6:
            result = num1 === num2
            break;
        case 7:
            result = num1 != num2
            break;
        case 8:
            result = num1 !== num2
            break;
        default:
            console.log('Invalid operator');
            break;
    }
    console.log('Result:' + result);
}

comparison( 67, 54 , 1)


// logical operators

 function isuservalid( user ){
    let User = user;
    let response = ''
    if( user.age > 18 && user.country === 'india'){
        response = 'user is valid and eligible for voting'
    }
    else{
        response ='user is not valid and eligible for voting'
    }
    console.log(response);

 }

let user = {
    username: 'anand',
    email : 'anand@gmail.com',
    age: 23,
    country :'india'

 }

 isuservalid(user)

 function isuserunique(user){

    let User = user
    let response =''
    if(user.username == true || user.email == true){
        response = 'user is unique'
    }
    else{
        response = 'user is not unique'
    }
    console.log(response)

 }

 user.username = true;
 user.email = false;
 
 isuserunique(user)

 function iseven(number) {
     
    let num = number > 0 ? "even" : 'odd'
    console.log(number + ' is ' + num  + ' number ')
 }

 iseven(-19)