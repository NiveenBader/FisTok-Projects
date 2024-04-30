class student {

    firstName = '';
    lastName = '';
    phone = '';
    birthday = '';
    city = '';
    grades = [];



    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        const curentYear = new Date().getFullYear();
        const studentYear = new Date(this.birthday).getFullYear();

        return curentYear - studentYear;
    }
    getAverageTest() {
        const sum = this.grades.reduce((res, grades) => res += grades, 0);
        return sum / this.grades.length;
    }
    getTestAmount() {
        return this.grades.length;
    }
    /* setCity(city) {
        this.city = city;
    } */

    constructor(firstName, lastName, phone, birthday, city, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.birthday = birthday;
        this.city = city;
        this.grades = grades;

    }
}
const student1 = new student("Neveen", "Bader", "050-5933884", "1994-05-25", "Yad-Hashmona", [100, 98, 50, 52, 80]);