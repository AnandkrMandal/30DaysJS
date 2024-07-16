// print 1 to 10 numbers using for loop

for( let i = 1; i <=10 ; i++){
    console.log(i);
}

// multiplication of  1  to 10

for(let i = 1; i <= 10 ; i++){
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j}  =  ${i * j}`);
    }
}

// multiplication of  5

for(let i = 5; i <= 5 ; i++){
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j}  =  ${i * j}`);
    }
}



 let n = 5;
 let right = "";

for (let i = 1 ; i <= n ; i++){
    for( let j = 1 ; j <= i ; j++){
        right += "*";
    }
    right += "\n";
}
console.log(right);



for (let num =1 ; num <= 10; num++){
    if(num == 5){
        continue
    }
    console.log(num);
}


for ( let k = 1 ; k <= 10; k++){

    if( k == 7){
        break
    }
    console.log(k);

}