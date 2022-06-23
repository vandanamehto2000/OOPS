// Always add a method named constructor():
// The constructor method is called automatically when a new object is created.
// A JavaScript class is not an object. It is a template for JavaScript objects.

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

var myCar = new Car("pinky", 2022);
console.log(myCar.name + " " + myCar.year);



// class method
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calArea() {
        return this.height * this.width;
    }
}

var square = new Rectangle(10, 10);
console.log(square.calArea());

