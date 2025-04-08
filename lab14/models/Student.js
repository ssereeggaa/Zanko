import { Person } from "./Person.js";

export class Student extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    enrollCourse(course) {
        this.courses.push(course);
        console.log(`Студент <span class="math-inline">\{this\.name\} записався на курс "</span>{course.title}".`);
    }

    viewCourses() {
        console.log(`Курси, на які записаний студент ${this.name}:`);
        this.courses.forEach(course => console.log(`- ${course.title}`));
    }

    getInfo() {
        return `${super.getInfo()}, Студент`;
    }
}