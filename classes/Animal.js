class Animal {
    constructor(name, age) {
        console.log(`${name} is an animal and was created.`);
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }

    logAge() {
        console.log(`${this.name} is ${this.age} year old`);
    }
}

const bobby = new Animal("bobby", 2);
bobby.eat();
bobby.sleep();
bobby.logAge();