// closure = a func defined inside another func. Inner scope has access to variables and scopes of the outer function
// Allow for private variables and state maintenance
// Very frequently used in JS Frameworks like : React, Vue, Angular

function outer(){
    let message="Hello";
    
    function inner(){
        console.log(message);
    }
    inner();

}

outer();


function createCounter(){
    let count=0;
    function increment(){
        
        count++;
        console.log(`Count increased to ${count}`);
    }
    function getCount(){
        return count;
    }
    //return {increment:increment,getcount:getcount}; //returning an object with property called increment associated with the value called increment 
    return {increment,getCount}; //shorthand version
}

const counter=createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();    

console.log(counter.getCount());


function createGame(){
    let score=0;

    function increaseScore(points){
        score+=points;
        console.log(`+${points} pts`)
    }

    function decreaseScore(points){
        score-=points;
        console.log(`-${points} pts`)
    }

    function getScore(){
        return score;
    }

    return {increaseScore,decreaseScore,getScore};
}



const game=createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`Score: ${game.getScore()}`);