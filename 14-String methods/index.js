
let userName="  SubyDuby  ";


let result=userName.startsWith(" ");
if(result){
    console.log("Your username can't start with blank space. Trimming....");
}
else{
    console.log("Username format okay");
}
let result2=userName.includes(" ");
if(result2){
    console.log("Your username can't include blank space");
}
else{
    console.log("Username format okay");
}


userName=userName.trim();
console.log(userName.charAt(0));
console.log(userName.indexOf('o'));
console.log(userName.lastIndexOf('o'));
console.log(userName.length);

userName=userName.toUpperCase();
console.log(userName);

userName=userName.toLowerCase();
userName=userName.repeat(4);
console.log(userName);



let phNum='123-4567-890';

phNum=phNum.replaceAll("-","/");

console.log(phNum);

phNum=phNum.padStart(15,"#"); //(a,b) a is the total number of characters the string should have. b is what to pad the start with to fulfill the number of characters.
console.log(phNum);


phNum=phNum.padEnd(20,"#");

console.log(phNum);