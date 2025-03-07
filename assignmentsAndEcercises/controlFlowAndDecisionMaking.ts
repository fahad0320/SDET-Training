function getRandomNumber(min: number, max: number): number {
  // Ensure the min and max are in the correct order
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);

  // Generate a random number between lower and upper (inclusive)
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// Example usage:
console.log(getRandomNumber(1, 10)); // Random number between 1 and 10
console.log(getRandomNumber(5, 20)); // Random number between 5 and 20
console.log(getRandomNumber(50, 50)); // Should return 50

//Second Task

function isLeapYear(year: number): boolean {
  // A year is a leap year if it is divisible by 4, but not divisible by 100, 
  // unless it is also divisible by 400.
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
console.log(isLeapYear(2020)); // Output: true (2020 is a leap year)
console.log(isLeapYear(2021)); // Output: false (2021 is not a leap year)
console.log(isLeapYear(2000)); // Output: true (2000 is a leap year)
console.log(isLeapYear(1900)); // Output: false (1900 is not a leap year)

// Calculate BMI

function calculateBMI(weight: number, height: number): string {
  // Calculate BMI
  const bmi = weight / (height * height);

  // Categorize the BMI result
  if (bmi < 18.5) {
    return `Your BMI is ${bmi.toFixed(2)}, which is classified as Underweight.`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return `Your BMI is ${bmi.toFixed(2)}, which is classified as Normal weight.`;
  } else if (bmi >= 25 && bmi < 29.9) {
    return `Your BMI is ${bmi.toFixed(2)}, which is classified as Overweight.`;
  } else {
    return `Your BMI is ${bmi.toFixed(2)}, which is classified as Obesity.`;
  }
}

// Example usage:
console.log(calculateBMI(70, 1.75)); // Example: BMI for a person weighing 70kg with a height of 1.75m
console.log(calculateBMI(95, 1.75)); // Example: BMI for a person weighing 95kg with a height of 1.75m

