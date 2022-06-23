class Student {
    constructor() {
        var name;
        var marks;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }

    setMarks(marks) {
        this.marks = marks;
    }
}

var student2 = new Student();
student2.setName("neelu");
student2.setMarks(30);
console.log(student2.getName() + " " + student2.getMarks());



// apply a condition on setPrice
class Car {
    constructor() {
        var name;
        var price;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        if (price < 30000) {
            console.log("Invalid price");
        } else {
            this.price = price;
        }
    }
}

var myCar = new Car();
myCar.setName("Bloodshot");
myCar.setPrice(230000);
console.log(myCar.getName() + " " + myCar.getPrice());