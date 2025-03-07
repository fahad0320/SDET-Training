function getGrade(score: number): string {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else if (score >= 0 && score < 60) {
    return 'F';
  } else {
    return 'Invalid score'; // Handles invalid scores
  }
}

// Example usage:
console.log(getGrade(85)); // Output: B
console.log(getGrade(92)); // Output: A
console.log(getGrade(45)); // Output: F
