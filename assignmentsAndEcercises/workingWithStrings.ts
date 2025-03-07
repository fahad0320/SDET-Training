//First Task
function processSentence(sentence: string): string {
  // Convert the sentence to lowercase
  const lowerCaseSentence = sentence.toLowerCase();
  
  // Slice the first 5 characters
  const slicedSentence = lowerCaseSentence.slice(0, 5);
  
  return slicedSentence;
}

// Example usage:
console.log(processSentence("Hello, World!")); // Output: hello


//Second Task

function welcomeMessage(name: string, role: string): string {
  return `Welcome back, ${role} ${name}!`;
}

console.log(welcomeMessage("John", "Admin"));