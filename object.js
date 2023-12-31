var person = {
    myName: "Usman Muhammad",
    age: 22,
    hasCar: false,
    address: {
        postCode: "E323",
        country: "Nigeria"
    }
}

console.log(JSON.stringify(person));
console.log("____________________________");

console.log(person.myName);
console.log(person.age);
console.log(person.hasCar);

console.log("____________________________");
console.log(Object.values(person));

console.log("____________________________");
console.log(person.address.postCode);
console.log(person.address.country);

console.log("____________________________");
console.log(JSON.stringify(person.address));