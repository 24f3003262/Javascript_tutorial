const myText=document.getElementById("myText");
const mySubmit=document.getElementById("myBtn");
const resultElement=document.getElementById("resultElement");


mySubmit.onclick=function(){
    age=myText.value;
    age=Number(age);
    let hasLicense=true;
    if(age>=16){
        resultElement.textContent=`You are ${age} years old. Old enough to drive`;
        if(hasLicense){
            resultElement.textContent=resultElement.textContent+`\nYou have license`;
        } 
        else if(age>18){
            resultElement.textContent=resultElement.textContent+`\nYou dont have license but you can get one`;
        }
        else{
            resultElement.textContent=resultElement.textContent+`\nYou do not have license`;
        }
    }

    else if(age<=0){
        resultElement.textContent=`Age must be postiive`;
    }
    else{
        resultElement.textContent=`You are ${age} years old. NOT Old enough to drive`;
    }
}
