class student {
    //אובייקט של סטודנט
    student;

    getFullName() {
        return `${this.student.firstName} ${this.student.lastName}`;
    }


    getAge() {
        const currentYear = new Date().getFullYear();
        const studentYear = new Date(this.student.birthday).getFullYear();
        return currentYear - studentYear;
    }
    getAverageTest() {
        const sum = this.student.grades.reduce((res, num) => res += num, 0);
        return sum / this.grades.length;
    }
    getTestAmount() {
        return this.student.grades.length;
    }


    constructor(firstName, lastName, phone, birthday, city, grades) {
        this.student = student;
    }

}
/* 
const student1 = new student({
    id: 9202,
    firstName: "יפה",
    lastName: "בהרב",
    phone: "051-5892982",
    email: "abc362@gmail.com",
    birthday: "2003-06-08",
    city: "ירוחם",
    grades: [
        85,
        93,
        41,
        74,
        86,
        61,
        85
    ]
}); */

(async function getstudents() {
    const res = await fetch("../students.json");
    const data = await res.json();
    const students = data.map(s => new student(s));

    const ul = document.createElement("ul");
    document.querySelector(".frame").

})()

// יצירת ציונים פיקטיביים לכל סטודנט
/* students.forEach(s => {
    s.grades = [];

    // טווח של 3 עד 8
    const max = Math.floor(Math.random() * 6) + 3;

    for (let i = 0; i < max; i++) {
        // טווח של 40 עד 100
        const g = Math.floor(Math.random() * 61) + 40;
        s.grades.push(g);
    }
}); */