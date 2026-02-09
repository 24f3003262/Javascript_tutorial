//getter = special method that makes a property readable
//setter = special method that makes a property writable

//validate and modify a value when reading/writing a property


class Rectangle{

    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width (newWidth){
        if(newWidth>0){
            this._width=newWidth;
        }
        else{
            console.error("Width must be greater than 0");
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }
        else{
            console.error("Height must be greater than 0");
        }
    }

    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }

    get area(){
        return (this._width*this._height).toFixed(1);
    }

}

const rectangle=new Rectangle(3,4);

console.log(rectangle.width,rectangle.height);
console.log(rectangle.area);



class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName==="string" && newFirstName.length>0){
            this._firstName=newFirstName;
            }
        else{
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName==="string" && newLastName.length>0){
            this._lastName=newLastName;
            }
        else{
            console.error("Last name must be a non-empty string");
        }
        }
    set age(newAge){
        if(typeof newAge==="number" && newAge>0){
            this._age=newAge;
            }
        else{
            console.error("Age must be a positive number");
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }

    get fullName(){
        return `${this._firstName} ${this._lastName}`;
    }
}

const person=new Person(420,69,"pizza");
console.log(person.firstName);

const person2=new Person("S","B",41);

console.log(person2.fullName);