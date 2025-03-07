function process<T>(value: T): T extends string ? number : T extends number ? number : never {
  if (typeof value === "string") {
    return value.length as T extends string ? number : never;
  } else if (typeof value === "number") {
    return (value * value) as T extends number ? number : never;
  }

  throw new Error("Unsupported type");
}

// Example usage:

const stringResult = process("Hello");  // Returns number, because string length is calculated
console.log(stringResult); // Output: 5 (Length of "Hello")

const numberResult = process(5);  // Returns number, because number is squared
console.log(numberResult); // Output: 25 (5 squared)


// Task

function transformValue<T>(value: T): T extends string ? number : T extends number ? number : T {
  if (typeof value === "string") {
    // If the value is a string, return its length (which is a number)
    return value.length as T extends string ? number : never;
  } else if (typeof value === "number") {
    // If the value is a number, return its square (which is also a number)
    return (value * value) as T extends number ? number : never;
  }

  // If the value is neither a string nor a number, return it as is
  return value;
}

// Example usage:

const stringResult = transformValue("Hello, world!");  // Expected to return a number: the length of the string
console.log(stringResult);  // Output: 13 (length of the string "Hello, world!")

const numberResult = transformValue(5);  // Expected to return a number: the square of the number
console.log(numberResult);  // Output: 25 (5 squared)

const booleanResult = transformValue(true);  // Expected to return the value as-is
console.log(booleanResult);  // Output: true (value itself)

const arrayResult = transformValue([1, 2, 3]);  // Expected to return the value as-is
console.log(arrayResult);  // Output: [1, 2, 3] (value itself)
