function Person(firstName,lastName) { 
    this.firstName = firstName; 
    this.lastName = lastName;
}

function Student(favoriteCourse) {
    this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person("Ömer","DEmirkan");

var omer = new Student("Programming");

console.log(omer.firstName + " " + omer.lastName + " loves " + omer.favoriteCourse);