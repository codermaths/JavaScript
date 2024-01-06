
const names = ['Usman', 'Sani', 'Abu', 'Lami'];

const [Usman, s, ...restOfNames] = names;
console.log(`${Usman}, ${s}`);
console.log(restOfNames);