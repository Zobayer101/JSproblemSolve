// No-1with Arrow function

// const calculateTax = (income, expenses) =>
//   income >= expenses && income > 0 && expenses > 0
//     ? (income - expenses) * 0.2
//         : "Invalid input";
    
//console.log(calculateTax(5000, 15000));

//NO-2 regular function
function calculateTax(income, expenses) {
    if (income >= expenses && income > 0 && expenses > 0) {
        return (income - expenses) * 0.2;
    } else {
        return "Invalid input";
    }
}

console.log(calculateTax(50, 10));
