// parent class

// class Parent {
//     constructor(name){
//         this.name=name;
//     }

//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// class Student extends Parent{

// }

// var student1 = new Student("rohit");
// student1.greet();




class Parent {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Parent {
    constructor(name) {
        console.log("creating student class");
        // call the super class constructor and pass in the name parameter
        super(name);

    }
}

var student1 = new Student("praveen");
student1.greet();



// override
class People {
    constructor(name) {
        this.name = name;
        this.occupation = "unemployee";
    }

    greet() {
        console.log(this.name + " " + this.occupation);
    }
}

class Person extends People {
    constructor(name) {
        // call the super class constructor and pass in the name parameter
        super(name);
        // overriding on occupation property
        this.occupation = "Student";

    }
}

var student2 = new Person("nikita");
student2.greet();