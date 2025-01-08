class Student {
    static studentCount: number = 0; // Static variable to store the count of students

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
        Student.studentCount++; // Incrementing the count of students
    }

    // Method to display the student details
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Creating objects of Student class
let student1 = new Student('John', 20);
let student2 = new Student('Doe', 21);

// Accessing static variable
console.log("Total number of registered students is: " + Student.studentCount); // Output: 2