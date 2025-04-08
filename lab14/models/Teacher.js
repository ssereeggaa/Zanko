import { Person } from "./Person.js";

export class Teacher extends Person {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
        console.log(`Викладач <span class="math-inline">\{this\.name\} веде курс "</span>{course.title}".`);
    }

    viewCourses() {
        console.log(`Курси, які веде викладач ${this.name}:`);
        this.courses.forEach(course => console.log(`- ${course.title}`));
    }

    getInfo() {
        return `${super.getInfo()}, Викладач`;
    }
}