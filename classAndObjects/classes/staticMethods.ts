class Square {
    // Define a static method
    static area(side: number) {
        return side * side; // return the area of the square
    }
}

// call the static method
let area = Square.area(5);
console.log(`Area of the square: ${area}`); // Output: Area of the square: 25