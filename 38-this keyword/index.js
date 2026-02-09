// this = reference to the object  where THIS is used
// person.name=this.name

const person1={
    name: "Spongebob",
    favFood:"hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name} and my favorite food is ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

person1.sayHello();
person1.eat();

console.log(this);