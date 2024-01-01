
const arrayOne = ['Mariam', 'Anna', 'Alex'];
const arrayTwo = ['Said', 'Ismail', 'Aisha'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name) {
    console.log(name);
});

const name = "Mariam";
const nameToArray = [...name];

nameToArray.forEach(function(letter) {
    console.log(letter);
});

const addNumbers = function(n1, n2, n3) {
    return n1 + n2 + n3;
}

const numbers = [10, 20, 5];

const addition = addNumbers(...numbers);

console.log(addition);