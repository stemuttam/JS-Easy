function calculateTotalPrice(prices) {
    // Initialize total to 0
    let total = 0;
    
    // Sum up all prices in the cart
    for (const price of prices) {
        total += price;
    }
    
    return total;
}

// Example usage
const cart = [199, 299, 499];
console.log("Total =", calculateTotalPrice(cart)); // Output: Total = 997