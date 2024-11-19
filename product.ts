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
