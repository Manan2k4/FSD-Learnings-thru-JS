'use strict'
class Student{
    constructor(fname, lname) {
        this.fn = fname;
        this.ln = lname;
    }
    stu() {
        console.log('First name of student is: ', this.fn);
        console.log('Last name of student is: ', this.ln);
        console.log('Full name: ', this.fn, ' ',this.ln);
    }
}