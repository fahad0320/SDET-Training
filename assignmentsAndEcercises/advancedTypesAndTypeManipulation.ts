// Define the base Shape type with a discriminant property "type"
type Shape =
  | { type: "circle"; radius: number }
  | { type: "square"; side: number }
  | { type: "triangle"; base: number; height: number };

// Function to calculate the area of a shape using a discriminated union
function calculateArea(shape: Shape): number {
  switch (shape.type) {
    case "circle":
      return Math.PI * Math.pow(shape.radius, 2); // Area of a circle: πr²
    case "square":
      return Math.pow(shape.side, 2); // Area of a square: side²
    case "triangle":
      return (shape.base * shape.height) / 2; // Area of a triangle: ½ * base * height
    default:
      throw new Error("Unknown shape type");
  }
}

// Example shapes
const circle: Shape = { type: "circle", radius: 5 };
const square: Shape = { type: "square", side: 4 };
const triangle: Shape = { type: "triangle", base: 6, height: 8 };

// Calculate the areas
console.log(`Area of Circle: ${calculateArea(circle)}`);
console.log(`Area of Square: ${calculateArea(square)}`);
console.log(`Area of Triangle: ${calculateArea(triangle)}`);

// Task

type Product = {
  id: number;
  name: string;
  description?: string; // Optional property
  price: number;
  inStock: boolean;
};

// Example using Partial
type PartialProduct = Partial<Product>;

const productUpdate: PartialProduct = {
  price: 19.99,
  description: "A great product",  // Optional properties
};

console.log(productUpdate);

// Example using Required
type RequiredProduct = Required<Product>;

const completeProduct: RequiredProduct = {
  id: 1,
  name: "Sample Product",
  description: "A sample description",
  price: 29.99,
  inStock: true,
};

console.log(completeProduct);

// Example using Omit
type ProductWithoutDescription = Omit<Product, "description">;

const product: ProductWithoutDescription = {
  id: 1,
  name: "Product without description",
  price: 19.99,
  inStock: true,
};

console.log(product);

// Example combining all three
type ProductWithRequiredPrice = Omit<Required<Product>, "description">;

const updatedProduct: ProductWithRequiredPrice = {
  id: 2,
  name: "Updated Product",
  price: 49.99, // Required due to Required<Product>
  inStock: true, // Required due to Required<Product>
};

console.log(updatedProduct);
