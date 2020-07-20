/**
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = { //put you object here
    firstName: 'Alena', 
    lastName: 'Sasim',
    getFullName(name, surname) {
        this.firstName = name;
        this.lastName = surname;
        return (`${this.firstName} ${this.lastName}`);
    }
}

//console.log(person.getFullName('lena', 'sasim'));


/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student 
 */
const student = { //put you object here
    grade: '',
    getGrade (n) {
        this.grade = n;
        return this.grade;
    }
}

Object.setPrototypeOf(student, person);
//console.log(student.getGrade(11));
//console.log(student.getFullName('yuriy', 'ivanov'));

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student); //put you object here

//console.log(student2.getFullName('alex', 'sidorov'));
//console.log(student2.getGrade(5));

module.exports = {
    person,
    student,
    student2
};
