/**
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
//put your code here

class Person {
    constructor (name, surname) {
        this.firstName=name;
        this.lastName=surname;
        this.likes =0;
    }
    get getFullName() {
        return (`${this.firstName} ${this.lastName}`);
    }
}


/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade
 */
//put your code here

class Student extends Person {
    constructor (name, surname, grade) {
        super(name, surname);
        this.grade=grade;
    }
    get getGrade() {
        return this.grade; 
    }
}

const person = new Person ('Alena', 'Sasim');
console.log(person);
console.log(person.getFullName);

const student = new Student ('Ilia', 'Ivanow','07');
console.log(student);
console.log(student.getFullName);
console.log(student.getGrade);

module.exports = {
     person,
     student
 };
