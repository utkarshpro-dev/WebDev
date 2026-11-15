const students = [
    { id : 1, name: "Rahul", marks: 85},
    { id : 2, name: "Aman", marks: 45},
    { id : 3, name: "Priya", marks: 90}
];

// map()
// map performs the operation on every element and will return a new array
const names = students.map(student => student.name);
console.log(names);

//filer()
// filter checks the condition and will only returns the matching element
const passedStudents = students.filter(
    student => student.marks >= 50
);
console.log(passedStudents);

//reduce()
// reduce combines multiple elements to generate a single accumulated result
const totalMarks = students.reduce(
    (total, student) => total + student.marks, 0
);
console.log(totalMarks);