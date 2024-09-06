let students = {
    firstName: "",
    id: null,
    grades: [],
}

function addGrade(students, grade) {
    students.grades.push(grade)
}

function updateStudentName(students, name) {
    students.firstName = name;
}

let student1 = {
    firstName: 'Gimli',
    id: 35,
    grades: [12, 3],
};

addGrade(student1, 12);
addGrade(student1, 7);
console.log(student1);

updateStudentName(student1, 'Legolas');
console.log(student1);