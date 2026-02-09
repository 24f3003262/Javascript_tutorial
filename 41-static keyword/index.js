// static = keyword that defines properties or methods that belongs to a class itself rather than the objects created from that class(class owns anything static, not just objects)

class MathUtil{
    static PI=3.14159;

    static getDiameter(radius){
        return radius*2;
    }

    static getCircumference(radius){
        return 2* this.PI*radius;
    }

    static getArea(radius){
        return this.PI*radius*radius;
    }

}

const MathUtil1=new MathUtil();
console.log(MathUtil.PI);
console.log(MathUtil1.PI);


console.log(MathUtil.getDiameter(20));
console.log(MathUtil.getCircumference(20));
console.log(MathUtil.getArea(20));



class User{
    static userCount=0;

    constructor(username){
        this.username=username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello ${this.username}`);
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users`);
    }
}

const user1=new User("user1");
const user2=new User("user2");

console.log(User.userCount);
user1.sayHello();
user2.sayHello();
User.getUserCount();