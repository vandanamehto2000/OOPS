// object

// var object = {
//     name: "rinky",
//     lastName: "sharma",
//     fullName: function (){
//         return (this.name + this.lastName)
//     }
// }
// console.log(object.fullName())
// console.log(object["name"]);
// console.log(object.lastName)



// var person = new Object();
// person.name = "pinky",
// person.age = 12,
// person.lastName = "varma",
// person.fullName = function(){
//     return this.name + this.lastName
// }
// console.log(person.fullName());
// console.log(person.age);


// class
// Always add a method named constructor():
// The constructor method is called automatically when a new object is created.
// class Car {
//     constructor(name, year){
//         this.name =name;
//         this.year = year;
//     }
// } 
// const myCar = new Car("ritika", 2019);
// console.log(myCar.name + " " + myCar.year);


// // JavaScript Class Method
// class Rectangle {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }

    // getter
    // get area(){
    //     return this.calcArea();
    // }

    // method
//     calcArea(){
//         return this.width * this.height;
//     }
// }

// const square = new Rectangle(10, 10);
// console.log(square.calcArea())



// inheritance
// parent class

// class Person{
//     constructor(name){
//         this.name=name;
//     }

//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// class Student extends Person {

// }

// const student1 = new Student("praveen");
// student1.greet();


// class Person{
//     constructor(name){
//         this.name=name;
//     }

//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// class Student extends Person {
//     constructor(name){
//         console.log("creating student class");
//         // call the super class constructor and pass in the name parameter

//         super(name);
//     }

// }

// const student1 = new Student("praveen");
// student1.greet();


// override
// class Parent{
//     constructor(name){
//         this.name=name;
//         this.occupation="unemloyed";
//     }

//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// inheritance parent class
// class Student extends Parent {
//     constructor(name){
//         // call the super class constructor and pass in the name parameter

//         super(name)

//         // overriding on occupation property
//         this.occupation = 'student';


//     }
//     greet(){
//         console.log(`Hello ${this.name}`);
//         console.log('occupation:' + this.occupation);
//     }

// }

// const student1 = new Student("mohit");
// student1.greet();



// encapsulation
// class Student {
//     constructor(){
//         var name;
//         var marks;

//     }

//     getName(){
//         return this.name;
//     }

//     setName(name){
//         this.name=name;

//     }

//     getMarks(){
//         return this.marks;
//     }

//     setMarks(marks){
//         this.marks=marks
//     }
// }

// var student2 = new Student();
// student2.setName("rahul");
// student2.setMarks(30);

// console.log(student2.getName() + " " + student2.getMarks());


// class Student {
//     constructor(){
//         var name;
//         var marks;
//     }

//     getName(){
//         return this.name;
//     }

//     setName(name){
//         this.name =name;
//     }

//     getMarks(){
//         return this.marks;
//     }

//     setMarks(marks){
//         if(marks > 100){
//             console.log("Invalild marks")
//         }else{
//             this.marks=marks;
//         }
//     }
// }

// const student2  = new Student();
// student2.setName("parul");
// student2.setMarks(180);

// console.log(student2.getName() + " " + student2.getMarks());


// polymorphism
// class A{
//     display(){
//         console.log("A is invoked");
//     }
// }

// class B extends A{

// }
// var b = new B();
// b.display();


class A{
    display(){
        console.log("A is invoked");
    }
}

class B extends A {
    display(){
        console.log("B is invoked");
    }
}

// const p = new B();
// p.display();

var p = [new A(), new B()]
p.forEach(msg => {
    msg.display();
})