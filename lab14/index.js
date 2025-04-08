import { Person } from "./models/Person.js";
import { Course } from "./models/Course.js";
import { Teacher } from "./models/Teacher.js";
import { Student } from "./models/Student.js";

// Створення об'єктів
const course1 = new Course("Основи JavaScript");
const course2 = new Course("Розширений JavaScript");

const teacher1 = new Teacher("Петро Іванов");

const student1 = new Student("Анна Петренко");
const student2 = new Student("Іван Сидоренко");

// Додавання курсів викладачу
teacher1.addCourse(course1);
teacher1.addCourse(course2);

// Запис студентів на курси
student1.enrollCourse(course1);
student1.enrollCourse(course2);
course1.addStudent(student1);
course2.addStudent(student1);

student2.enrollCourse(course1);
course1.addStudent(student2);

// Виведення інформації
teacher1.viewCourses();
student1.viewCourses();
course1.viewStudents();
course2.viewStudents();

console.log(teacher1.getInfo());
console.log(student1.getInfo());