// let username;


// do{
//     username=window.prompt("Enter your name");
// }while(username=== "" || username === null)

// console.log(`Hello ${username}`);


// do{
//     username=window.prompt("Enter your name");
// }while(username==="" || username===null)

// console.log(`Hello ${username}`);

let loggedIn=false;
let username,password;

while(!loggedIn){
    username=window.prompt(`Enter your username`);
    password=window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn=true;
        console.log("Logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}