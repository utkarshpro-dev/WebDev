const nums = [10, 20, 30];

const updatedNums = [...nums, 40];

console.log(updatedNums);

const student = {
    fname: "Rahul",
    course: "CSE"
};

const updatedStudent = {
    ...student,
    age: 20
};

console.log(updatedStudent);