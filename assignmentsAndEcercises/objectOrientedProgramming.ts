// Define the Shape interface
interface Shape {
  getArea(): number;  // Method to calculate the area of the shape
  getDescription(): string; // Method to describe the shape
}

// Circle class implementing the Shape interface
class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2); // Area of a circle: πr²
  }

  getDescription(): string {
    return `Circle with radius ${this.radius}`;
  }
}

// Square class implementing the Shape interface
class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  getArea(): number {
    return Math.pow(this.side, 2); // Area of a square: side²
  }

  getDescription(): string {
    return `Square with side length ${this.side}`;
  }
}

// Rectangle class implementing the Shape interface
class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height; // Area of a rectangle: width * height
  }

  getDescription(): string {
    return `Rectangle with width ${this.width} and height ${this.height}`;
  }
}

// Function to test shapes
function testShape(shape: Shape): void {
  console.log(shape.getDescription());
  console.log(`Area: ${shape.getArea()}`);
}

// Example usage:

const circle = new Circle(5);
const square = new Square(4);
const rectangle = new Rectangle(5, 10);

// Test different shapes
testShape(circle);     // Output: Circle with radius 5 | Area: 78.53981633974483
testShape(square);     // Output: S
