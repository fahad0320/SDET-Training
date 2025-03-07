function filterAndTransform(numbers: number[]): number[] {
  return numbers
    .filter(num => num % 2 === 0)  // Filter out odd numbers
    .map(num => num * 2);           // Double the even numbers
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filterAndTransform(numbers);

console.log(result); // Output: [4, 8, 12, 16, 20]

// Random Select
function selectLunchBuyer(group: string[]): string {
  // Generate a random index within the bounds of the group array
  const randomIndex = Math.floor(Math.random() * group.length);

  // Return the person at the random index
  return group[randomIndex];
}

// Example usage:
const group = ["Alice", "Bob", "Charlie", "David", "Eva"];
const lunchBuyer = selectLunchBuyer(group);

console.log(`${lunchBuyer} has been selected to buy lunch!`);
