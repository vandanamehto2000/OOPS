// defined object

var object = {
    name: "rinky",
    age: 12,
    lastName: "sharma",
    fullName: function () {
        return this.name + " " + this.lastName;
    }
}
console.log(object.name);
console.log(object["age"])
console.log(object.fullName());



var person = new Object();
person.name = "vicky",
person.age = 43,
person.lastName = "varma",
person.occupation = "driver"
person.fullName = function () {
    return this.name + " " + this.lastName + " " + this.age;
}

console.log(person.fullName());
console.log(person.age);

