// Date(year,month,day,hour,minute,second,ms)

const date= new Date();
console.log(date);

const date1= new Date(2024,0,1,2,3,4,5);
console.log(date1);

const date2= new Date("2025-02-23T12:00:00Z");
console.log(date2);

const date3= new Date(0);
console.log(date3);

const date4=new Date(190000000000000);
console.log(date4);

const year=date.getFullYear();
const month=date.getMonth();
const day=date.getDate();
const hour=date.getHours();
const minute=date.getMinutes();
const dayofweek=date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(dayofweek);



date.setFullYear(2023);
date.setMonth(11);
date.setDate(31);

console.log(date);


if(date2>date1){
    console.log("Happy New Year!");
}