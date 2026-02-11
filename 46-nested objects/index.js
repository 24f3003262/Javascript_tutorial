//nexted obj = obj inside obj. Allow to represent more complex data structures. Child object is enclosed by parent object

// const person={
//     fullName:"John Doe",
//     age: 30,
//     isStudent:true,
//     hobbies: ["karate","cooking","dancing"],
//     address:{
//         street:"124 Coast st.",
//         city:"Winchester",
//         country:"Nevada"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[0]);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.country);
// console.log(person.address);

// for (const property in person.address){
//     console.log(person.address[property]);
// }

class Person{
    constructor(fullName,age,...address){
        this.fullName=fullName;
        this.age=age;
        this.address=new Address(...address);

    }
}


class Address{
    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}


const person1=new Person("John Doe",30,"124 Coast st.","Winchester","Nevada");
const person2 = new Person("Janie Danie",31,"Royal street","Wisconsin","USA");

console.log(person1);
console.log(person2);
console.log(person1.address);
console.log(person2.address);