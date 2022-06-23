class A {
    display() {
        console.log("A is invoked");
    }
}

class B extends A {

}

var b = new B();
b.display();



// another example

class Animal {
    speak() {
        console.log("Animals have different sound");
    }
}

class Cat extends Animal {
    speak() {
        console.log("cat says meow meow");
    }
}

class Dog extends Animal {
    speak() {
        console.log("dog says woof woof");
    }
}

// var cat = new Cat();
// cat.speak();
// var dog = new Dog();
// dog.speak();

var x = [new Cat(), new Dog()];
x.forEach(item => {
    item.speak();
})



