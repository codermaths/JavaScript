
var person = [
    {names: "Usman Muhammad", age: 22},
    {names: "Sani Adam", age: 30}
];

for(var i = 0; i < person.length; i++) {
    console.log(Object.keys(person[i]));
    console.log("____________________");

    console.log(Object.values(person[i]));
    console.log("____________________");

    console.log(JSON.stringify(person[i]));
    console.log("____________________");

    console.log(person[i].names);
    console.log(person[i].age);
}