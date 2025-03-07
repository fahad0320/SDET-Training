function generateFibonacci(n: number): number[] {
  // Create an array to store the Fibonacci sequence
  const fibonacci: number[] = [];
  
  // Handle the base cases
  if (n >= 1) fibonacci.push(0); // The first number is 0
  if (n >= 2) fibonacci.push(1); // The second number is 1

  // Generate the Fibonacci sequence for the remaining terms
  for (let i = 2; i < n; i++) {
    const nextTerm = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(nextTerm);
  }

  return fibonacci;
}

// Bottles of water song

function sing99Bottles(): void {
  for (let i = 99; i > 0; i--) {
    let bottleText = i === 1 ? "bottle" : "bottles";
    let nextBottleText = i - 1 === 1 ? "bottle" : "bottles";

    console.log(`${i} ${bottleText} of water on the wall,`);
    console.log(`${i} ${bottleText} of water!`);
    console.log("Take one down and pass it around,");
    console.log(`${i - 1} ${nextBottleText} of water on the wall.\n`);
  }

  // Special case for when there are no more bottles
  console.log("No more bottles of water on the wall,");
  console.log("No more bottles of water!");
  console.log("Go to the store and buy some more,");
  console.log("99 bottles of water on the wall.");
}

// Call the function to sing the song
sing99Bottles();


// Example usage:
const numberOfTerms = 10;
const fibonacciSequence = generateFibonacci(numberOfTerms);
console.log(fibonacciSequence);  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
