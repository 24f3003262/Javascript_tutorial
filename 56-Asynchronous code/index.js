// synchronous= executes line by line consecutively in a sequential manner code that waits for an operation to complete

// asynchronous= allows multiple operations to be performed concurrently without waiting. Doesn't block the execution flow and allows the program to continue(I/O operations,network requests,fetching data). Handled with :callbacks,promises,async/await

// //sync
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");


// //async
// setTimeout(()=>console.log("Task 4"),3000);
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");


//async using callbacks
function func1(callback){
    setTimeout(()=>{console.log("Task 1");
                    callback();
    },3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
}

func1(func2);