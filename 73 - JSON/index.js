//JSON = (JavaScript Object Notation) data-interchange format
// Used for exchanging data between a server and a web application

// JSON files {key:value} OR [{},{},{}]

//JSON.stringify() = converts a JS object to a JSON string.
//JSON.parse() = converts a JSON string to a JS object.


// const names=["Spongebob","Patrick","Squidward","Sandy"];
// const person={
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies":["Jellyfishing","karate","cooking"]
// };
// const people=[{
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true
// },
// {
//     "name":"Patrick",
//     "age":34,
//     "isEmployed":false
// },
// {
//     "name":"Squidward",
//     "age":50,
//     "isEmployed":true
// },
// {
//     "name":"Sandy",
//     "age":27,
//     "isEmployed":false
// }   
// ];
// const jsonString=JSON.stringify(people);

// // console.log(person);
// // console.log(jsonString);

// const jsonNames=`["Spongebob","Patrick","Squidward","Sandy"]`;
// const jsonPerson=`{
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies":["Jellyfishing","karate","cooking"]
// }`;
// const jsonPeople=`[{"name":"Spongebob","age":30,"isEmployed":true},
//     {"name":"Patrick","age":34,"isEmployed":false},
//     {"name":"Squidward","age":50,"isEmployed":true},
//     {"name":"Sandy","age":27,"isEmployed":false}   
// ]`;



// const parsedData=JSON.parse(jsonNames);
// // console.log(parsedData);



fetch("people.json") //returns promise
.then(response=>response.json())
.then(values=>values.forEach(value=>console.log(value.isEmployed)))
.catch(error=>console.error(error));