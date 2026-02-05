// Function that is called as argument to another function
//Used to handle asynchronous operations:-
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases





// hello();
// goodBye();
// hello(goodBye);
// hello(leave);
// function hello(callback){
//     console.log("Hello");
//     callback();
// }

// function leave(){
//     console.log("Leave!");
// }

// function goodBye(){
//     console.log("GoodBye");
// }

function sum(Callback,x,y){
    let result=x+y;
    Callback(result);
}

function displayConsole(result){
    console.log(result);
}

sum(displayConsole,3,5);

function displayPage(result){
    document.getElementById("myH1").textContent=result;
}
sum(displayPage,5,10);