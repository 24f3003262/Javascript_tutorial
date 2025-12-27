/* ternary operator - shortcut to if-else statements. Helps to assign a variable based on a condition 

    condition ? codeIfTrue : codeIfFalse;

*/

// let age=21;
// let message = age>=18 ? `You are an adult`: "You are not an adult";

// let time=16;

// let greeting=time<12 ? "Good morning!" : "Good afternoon!";

// let isStudent=true;

// let message=isStudent ? "You are a student":"You are not a student";

let purchaseAmount=125;
let discount=purchaseAmount>100 ? 10:2; 
document.getElementById("myText").textContent=`${purchaseAmount-purchaseAmount*(discount/100)}`;