abstract class sample {
    // define variables inside the abstract class,
    property1: string;
    constructor(property1: string) {
       this.property1 = property1;
    }
    // declare the abstract methods
    abstract demo(): void;
    
    // defining the non-abstract methods
    save(): void {
       console.log("The save method of the abstract class is executed.");
    }
 }
 // extend sample class and implement all abstract methods of sample to demo class
 class test extends sample {
    property2: number;
    constructor(property1: string, property2: number) {
       super(property1);
       this.property2 = property2;
    }
    demo(): void {
       // code for the demo method
       console.log("The value of the property 3 is " + this.property2);
    }
 }
 let test_obj = new test("test", 9999);
 test_obj.demo();
 test_obj.save();