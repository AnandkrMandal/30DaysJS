let weakNo = 8

switch(weakNo){

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


let gradeNo = 78;

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