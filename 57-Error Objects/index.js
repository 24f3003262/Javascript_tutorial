// Error- Object created to represent a problem. Can occur due to user input or establishing a connection

// console.lag("hello"); //TypeError


// console.log(x); //Uncaught ref Error

//Errors can be generated due to a lot of things:-
//1.Network Issues
//2.Promise Rejection
//3.Security Errors


//We can handle errors using:-
//try {} = encloses code potentially causing error
//catch {} = catch and handle thrown errors from try
// finally {} = always executes. Mostly used for cleanup ex. Close files,close connections, release resources

try{
    console.lag("Hello");
}
catch(error){
    console.error(error);
}
finally{
    console.log("End of first try catch block");
}

try{
    const dividend=Number(window.prompt("Enter a dividend"));
    const divisor=Number(window.prompt("Enter a divisor"));
    if(divisor==0){
        throw new Error("You can't divide by 0 by the laws of Lord Red Lotus");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("A man must be cool! And dividend and divisors must be Numbers! - Reckless Savage");
    }
    const result=dividend/divisor;
    console.log(result);
}

catch(error){
     console.error(error);
}
console.log("End of program");

