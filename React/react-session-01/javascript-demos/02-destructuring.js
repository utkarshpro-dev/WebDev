// Object destructuring

const student = {
    fname: "Rahul",
    age: 20,
    course: "CSE"
};
console.log(student.fname);
console.log(student.age);
console.log(student.course);

const { fname, age, course } = student;
console.log(fname);
console.log(age);
console.log(course);


// Array destructuring

const subject = ["Java", "DBMS", "OS"];
const [first, second, third] = subject;

console.log(first);
console.log(second);
console.log(third);