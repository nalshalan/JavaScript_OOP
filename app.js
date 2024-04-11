console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(hobby) {
        const index = this.hobbies.findLastIndex((activity) => {
            return (activity != hobby);
        });
        this.hobbies.splice(index, 1);
    }

    greeting() {
        console.log("Hello fella!")
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }

    greeting() {
        console.log(`Hello!  I am writing some code.`);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
const somePerson = new Person("Harry Styles", 2, "London", ["singing", "reading"]);
somePerson.addHobby("swimming");
somePerson.removeHobby("reading");
console.log(somePerson);

const coder = new Coder("Bill Gates", 5, "New York City", ["hiking", "reading"]);
console.log(coder);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        this.result = a / b;
        return this.result;
    }

    display() {
        console.log(this.result);
    }
}
const calc = new Calculator();
calc.add(7, 3);
calc.display();
calc.subtract(7, 3);
calc.display();
calc.multiply(7, 3);
calc.display();
calc.divide(7, 3);
calc.display();


