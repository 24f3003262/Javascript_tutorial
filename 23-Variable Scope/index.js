// let x=1;
// let x=2; //error

let x=9; //Global scope

function2();

function function1(){
    let x=1; //Local
    console.log(x);
}

function function2(){
    let x=2;
    console.log(x);
}

function function3(){
    console.log(x);
}