// Async = makes a function return a promise
//await = makes an async func wait for a promise
//Allows to write async code in a synchronous manner
// Async doesnt have resolve or reject parameters
// Everything after Await is placed in an event queue 

//DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3.TAKE OUT THE TRASH

function walkDog(){


    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dogwalked = true;
            if(dogwalked){
                resolve("You walk the dog");
            }
            else{
                reject("You did not walk the dog");
            }
        },1500);        
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const kitchenclean=false;
            if(kitchenclean){
                resolve("You clean the kitchen");
            }
            else{
                reject("You did not clean the kitchen");
            }
        },2000);
    });

}


function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashtaken=true;
            if(trashtaken){
                resolve("You take out the trash");
            }
            else{
                reject("You did not take out the trash");
            }

        },500);
    })
}

//Callback hell method
// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("all done");
//         });
//     });
// });


// walkDog().then(value=>{console.log(value); return cleanKitchen()})
//          .then(value=>{console.log(value); return takeOutTrash()})
//          .then(value=>{console.log(value); console.log("all done");})
//          .catch(error=>console.error(error));
        
// NO NEED OF METHOD CHAINING WITH ASYNC/AWAIT


async function doChores(){
    try{
    const walkDogResult=await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult=await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult=await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("all done");
    }
    catch(error){
        console.error(error);
    }

}

doChores();