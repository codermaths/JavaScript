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



class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    logBreed() {
        console.log(`${this.breed}`);
    }

    logAgeFromAnimal() {
        super.logAge();
    }
}




const mike = new Dog("mike", 3, "bulldog");
mike.eat();
mike.sleep();
mike.logAgeFromAnimal();
mike.logBreed();