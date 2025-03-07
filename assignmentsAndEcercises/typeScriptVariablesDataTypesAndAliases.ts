type Person = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
};
  
let users: Person[] = [
    { firstName: "John", lastName: "Doe", age: 30, email: "john.doe@example.com" },
    { firstName: "Jane", lastName: "Smith", age: 25, email: "jane.smith@example.com" }
];
  
console.log('');
  
users.forEach(user => {
    console.log(`${user.firstName} ${user.lastName}, Age: ${user.age}, Email: ${user.email}`);
});