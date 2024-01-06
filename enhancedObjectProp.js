
const pricePropName = "PRICE";

const calculator = (name, price) => {
    return {
        name,
        add(n1, n2) {
            return n1 + n2;
        },
        [pricePropName.toLowerCase()] : price
    }
}

const calc = calculator("casio", 99.9);

console.log(calc.name);
console.log(calc.add(10, 10));
console.log(calc.price);
