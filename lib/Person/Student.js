var Person = require('./Person');

function Student(name, age, className) {
    Person.call(this, name, age);
    this.class = className;
}

Student.prototype.introduce = function () {
    return 'I am a Student. I am at Class '+ this.class +'.';
}

// class Student extends Person {
//     constructor(name, age, className) {
//         super(name, age);
//         this.class = className;
//     }
//     introduce() {
//         return 'I am a Student. I am at Class '+ this.class +'.';
//     }
// }

module.exports = Student;