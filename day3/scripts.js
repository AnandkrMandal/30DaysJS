

function checkNumber (){
    if(num > 0 ){
        console.log(num + ' is positive');
    }
    else if(num <0) {
        console.log(num + ' is negative ');
    }
    else{
        console.log(num + ' is zero ');
    }
}

let num = -5;
checkNumber(num);

function checkeligible(){
    if(age >= 18){
        console.log('Eligible to vote');
    }
    else{
        console.log('Not eligible to vote');
    }
}

let age = 13;
checkeligible(age);

function  checkweakend( weakNo ){

    switch( weakNo ){

        case 1:
            console.log('Monday')
            break;
        case 2:
            console.log('Tuesday')
            break;
        case 3:
            console.log('Wednesday')
            break;
        case 4:
            console.log('Thursday')
            break;
        case 5:
            console.log('Friday')
            break;
        case 6:
            console.log('saturday')
            break;
        case 7:
            console.log('sunday')
        default:
            console.log('Invalid Weak Number')
    
    }
}

let weakNo= 5;
checkweakend(weakNo);


function assigngrade( gradeNo ){
    switch(true){
        case gradeNo >= 90:
            console.log('A')
            break;
        case ( gradeNo >= 80  && gradeNo < 90):
            console.log('B')
            break;
        case ( gradeNo >= 70  && gradeNo < 80):
            console.log('C')
            break;
        case ( gradeNo >= 60   && gradeNo < 70):
            console.log('D')
            break;
        case ( gradeNo < 40 ):
            console.log('F')
            break;
        default:
            console.log('Invalid grade')
    }

}

let gradeNo = 85;
assigngrade(gradeNo);

function checkLeapYear(year){

   if((year % 4 == 0 && year % 100!= 0) || (year % 400 == 0)){
        console.log(year +' is a leap year ');
    }
    else{
        console.log(year +' is not a leap year ');
    }
}

let year = 2020;
checkLeapYear(year);