class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price+ (this.price*salesTax);
    }
}

const salesTax=0.05;    

const product1=new Product("Shirt",25.99);
const product2=new Product("Pants",39.99);

product1.displayProduct();
product2.displayProduct(); 

const total=product1.calculateTotal(salesTax);
console.log(`Total for person 1 : ${total.toFixed(2)}`);

const total2=product2.calculateTotal(salesTax);
console.log(`Total for person 2 : ${total2.toFixed(2)}`);