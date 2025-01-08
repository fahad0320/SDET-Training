class Person {
    public name: string = "";
    public greet(): void {
       console.log(`Hello, my name is ${this.name}!`);
    }
 } 
 const person = new Person(); 
 person.name = "John"; 
 person.greet();