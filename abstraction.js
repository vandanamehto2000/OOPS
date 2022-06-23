class Car {
    constructor(color, cost) {
        this.color = color;
        this.cost = cost;
        this.priceIncreaseNextYear = 10000;
      

    }
    getCarDetails() {
        console.log("color of the car is " + this.color);
        console.log("cost of the car is " + this.cost);
    }

    getNextYearCarPrice() {
        console.log(this.cost+this.priceIncreaseNextYear);
    }
}

var myCar = new Car("Red", 20000);
myCar.getCarDetails();
myCar.getNextYearCarPrice();



// ..............................

// function Car(color, cost){
//     this.color=color;
//     this.cost=cost;

//     // this price is hidden from everyone
//     let priceIncreaseNextYear = 10000;

//     this.getCarDetails = function(){
//         console.log("color of the car is " + this.color);
//         console.log("cost of the car is " + this.cost);
//     }

//     this.getNextYearCarPrice = function(){
//         console.log(this.cost + priceIncreaseNextYear)
//     }

// }
// var myCar = new Car("Red", 20000);
// myCar.getCarDetails();
// myCar.getNextYearCarPrice();
