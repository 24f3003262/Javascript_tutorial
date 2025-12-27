// .checked = property that determines whether a checkbox/radio element is checked or not

const myCheckBox=document.getElementById("myCheckbox");
const visaBtn=document.getElementById("visaBtn");
const masterCardBtn=document.getElementById("masterCardBtn");
const paypalBtn=document.getElementById("paypalBtn");
const mySubmit=document.getElementById("mySubmit");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");


mySubmit.onclick=function(){
    if(myCheckBox.checked){
        subResult.textContent=`You are subscribed`;
    }
    else{
        subResult.textContent=`You are not subscribed`;
    }
    if(visaBtn.checked){
        paymentResult.textContent=`You are paying with Visa`;
    }

    else if(masterCardBtn.checked){
        paymentResult.textContent=`You are paying with MasterCard`;
    }

    else if(paypalBtn.checked){
        paymentResult.textContent=`You are paying with PayPal`;
    }
    else{
        paymentResult.textContent=`You are not paying`;
    }
}