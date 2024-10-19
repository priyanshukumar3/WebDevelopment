// let obj = {
//     a : 1,
//     b : "priyanshu"
// }

// console.log(obj)

// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps : true
// }

// rabbit.__proto__ = animal;

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Hi I am an animal...")
    }

    eats() {
        console.log("I am eating..")
    }

    jumps() {
        console.log("(I am jumping..")
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("I am constructor of lion..")
    }

    eats() {
        super.eats()
        console.log("I am eating roor..")
    }
}


let a = new Animal("Lion")
console.log(a)
let l = new Lion("Shera")
console.log(l)

// use instanceOf operator