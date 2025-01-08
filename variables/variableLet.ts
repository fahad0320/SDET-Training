// Define a variable in TypeScript
let car_name: string = "Brezza";
let car_price: number = 1000000;
console.log(car_name);
console.log(car_price);



let bool: boolean = true;
if (bool) {
    let result: number = 10;
    console.log(result); // It can have accessed only in this block
}
// console.log(result); Can't access variable outside of the block.


let animal: string = "cat";
// let animal: string = "dog"; 
// Error: Cannot redeclare block-scoped variable 'animal'
console.log(animal); // Output: cat


let boolVar: boolean = false;
// If the boolean is true, the variable num will be 1, otherwise it will be 2
if (boolVar) {
    let num: number = 1;
    console.log(num);
} else {
    let num: number = 2;
    console.log(num);
}