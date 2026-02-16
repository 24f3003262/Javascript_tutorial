// setTimeout() = func that allows to schedule execution of a function after an amount of time (milliseconds). Times are approximate (varies based on workload of JS runtime env)
// setTimeout(callback,delay)


// setTimeout(function(){window.alert("Hello World"); console.log("Hello1");},3000);
// setTimeout(()=>window.alert("Hello World"),3000);

//clearTimeout(timeoutID)= cancels timeout before it occurs

// const timeoutID =setTimeout(()=>window.alert("Hello World"),3000);
// clearTimeout(timeoutID);

let timeoutID;

function startTimer(){
    timeoutID=setTimeout(()=>window.alert("Hello 3s"),3000);
    console.log("Started");
}

function stopTimer(){
    timeoutID=clearTimeout(timeoutID);
    console.log("Stopped");

}