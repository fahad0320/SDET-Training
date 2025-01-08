// Define a constant variable in TypeScript
const lang: string = 'TypeScript';
const PI: number = 3.14;
console.log(`Language: ${lang}`);
console.log(`Value of PI: ${PI}`);


if (true) {
    const PI: number = 3.14;
    console.log(PI);
    // const PI: number = 3.14; Error: Cannot redeclare block-scoped variable 'PI'.
    // PI = 3.15; Error: Cannot assign to 'PI' because it is a constant.
}