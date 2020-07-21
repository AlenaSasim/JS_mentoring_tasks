/**
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = { //put you object here
    firstName: 'Alena', 
    lastName: 'Sasim',
    getFullName() {
        this.firstName;
        this.lastName;
        return (`${this.firstName} ${this.lastName}`);
    }
}

//console.log(person.getFullName());


/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student 
 */
const student = { //put you object here
    grade: '11',
    getGrade () {
        this.grade;
        return this.grade;
    }
}

Object.setPrototypeOf(student, person);
//console.log(student.getGrade());
//console.log(student.getFullName());

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student); //put you object here

//console.log(student2.getFullName());
//console.log(student2.getGrade());

module.exports = {
    person,
    student,
    student2
};
