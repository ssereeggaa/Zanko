export class Course {
    constructor(title) {
        this.title = title;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
        console.log(`Студент <span class="math-inline">\{student\.name\} доданий до курсу "</span>{this.title}".`);
    }

    viewStudents() {
        console.log(`Студенти курсу "${this.title}":`);
        this.students.forEach(student => console.log(`- ${student.getInfo()}`));
    }
}