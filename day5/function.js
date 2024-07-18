
function isnumerisoddoreven (num){

    if(num % 2 == 0) {

        console.log( num + " number is even"); 
    }

    else {
        console.log( num + ' number is odd');
    }

}

isnumerisoddoreven(17);


function squrenumber (num) {

    let result =   num * num;
    console.log(result);

}

squrenumber(10);


function  maxmumber(num1 ,num2) {

    if( num1 > num2){
        console.log( num1  + ' Number is Greater');
    }

    else{
        console.log( num2 + ' Number is Greater')
    }
}

maxmumber(20,70);

function concatstring( str1 , str2) {
     console.log( str1 + ' ' + str2);

}

concatstring('Hello', 'World');