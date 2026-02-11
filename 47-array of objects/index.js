const fruits=[{name:"apple",color:"red",calories:95},
              {name:"banana",color:"yellow",calories:105},
              {name:"orange",color:"orange",calories:62},
              {name:"kiwi",color:"brown",calories:95},
              {name:"pineapple",color:"yellow",calories:55},
];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[0].name);

fruits.push({name:"strawberry",color:"red",calories:32});



fruits.splice(1,2);
console.log(fruits);


// map

const fruitnames=fruits.map(fruit=>fruit.name);
const fruitcolours=fruits.map(fruit=>fruit.color);
console.log(fruitnames);
console.log(fruitcolours); 

// filter

console.log(fruits.filter(fruit=>fruit.color==="yellow"));

console.log(fruits.filter(fruit=>fruit.calories<=100));

// reduce()
const maxFruit=fruits.reduce((max,fruit)=>fruit.calories>max.calories?fruit:max);
console.log(maxFruit);  