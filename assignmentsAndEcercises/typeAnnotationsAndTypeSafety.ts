let username: string = "userName";
let userAge: number = 30;
let isLoggedIn: boolean = true;

function greetUser(name: string): string {
    return `Hello, ${name}!`;
  }
  
  console.log(greetUser("Fahad")); // Output: Hello, Fahad!
  //console.log(greetUser(42)); // Error: Argument of type 'number' is not assignable

function calculateSum(a: number, b: number){
    return a + b;
}

console.log('The sum is: ', calculateSum(30, 40));
// console.log(calculateSum(30, 40));

function multiply(x: number, y: number) {
  return x * y; // TypeScript infers the return type as 'number'
}

let result = multiply(5, 4); // TypeScript infers the type of 'result' as 'number'
console.log(result); // Output: 20

// result = "twenty"; // Error: Type 'string' is not assignable to type 'number'.
console.log('The result is: ', result);