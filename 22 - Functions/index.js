// function HappyBirthday(Name,age){
//     console.log(`Happy Birthday to you ${Name}. You are ${age} years old`);
// }

// HappyBirthday("Suby",20);

function add(x,y){
    // let result=x+y;
    return x+y;
}

// let answer=add(2,3);
console.log(add(2,3));


function isEven(number){
    // if(number%2===0){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return number % 2===0? true:false;
}

function isValidemail(email){
    return email.includes("@");
}



console.log(isEven(10));     

console.log(isValidemail("suby@"));
console.log(isValidemail("suby"));