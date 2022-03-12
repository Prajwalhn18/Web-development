// This program demonstrates the concept of inheritance

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};

function Student(firstName, lastName, schoolName, grade) {
    Person.call(this, firstName, lastName);
    this.schoolName = schoolName;
    this.grade = grade;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student('Arjun', 'Pandava', 'XYZ', 20);
console.log(std.getFullName());
