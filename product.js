var calculateTotalPrice = function (products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
};
// Example usage:
var products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.9 },
    { name: "Orange", price: 1.2 },
];
console.log(calculateTotalPrice(products));
// Task 5
var isValidEmail = function (email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
// Example usage:
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false
// convert ts => js using tsc product.ts
