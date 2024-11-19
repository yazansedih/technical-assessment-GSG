// Task 4
interface Product {
  name: string;
  price: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => total + product.price, 0);
};

// Example usage:
const products: Product[] = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 0.9 },
  { name: "Orange", price: 1.2 },
];
console.log(calculateTotalPrice(products));

// Task 5
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Example usage:
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false

// 1) Ensure you have Node.js installed
// 2) Install TypeScript globally by running the following command in the terminal: npm install -g typescript
// 3) Verify that TypeScript is installed by checking its version: tsc --version
// 4) Run the TypeScript compiler to convert the product.ts file into a JavaScript file by running the following command: tsc product.ts
// 5) Run the Compiled JavaScript File by running the following command: node product.js
