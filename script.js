// Task 2
const calculateSumAndAverage = (numbers) => {
  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;
  return { sum, average };
};

// Example usage:
const numbers = [10, 20, 30, 40];
console.log(calculateSumAndAverage(numbers));

// Task 3
const removeDuplicates = (strings) => {
  const uniqueSet = new Set(strings); // Any duplicate values automatically removed.
  return Array.from(uniqueSet);
};

// Example usage:
const strings = ["apple", "banana", "apple", "orange", "banana"];
console.log(removeDuplicates(strings));

// 1) Ensure you have Node.js installed
// 2) Run the Compiled JavaScript File by running the following command: node script.js
