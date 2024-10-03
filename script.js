// Initialize balance, income, and expense variables
let balance = 0;
let income = 0;
let expense = 0;

// Select elements
const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income-amount");
const expenseElement = document.getElementById("expense-amount");
const transactionList = document.getElementById("transaction-list");
const form = document.getElementById("transaction-form");

// Function to update the balance, income, and expense on the screen
function updateDisplay() {
    balanceElement.textContent = `tsh${balance.toFixed(2)}`;
    incomeElement.textContent = `tsh${income.toFixed(2)}`;
    expenseElement.textContent = `tsh${expense.toFixed(2)}`;
}

// Function to handle new transactions
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form values
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (description === "" || isNaN(amount)) {
        alert("Please enter a valid description and amount.");
        return;
    }

    // Create new transaction element
    const transaction = document.createElement("li");
    transaction.textContent = `${description}: tsh${amount.toFixed(2)}`;

    // Add to income or expense
    if (amount > 0) {
        income += amount;
        transaction.classList.add("income-item");
    } else {
        expense += Math.abs(amount);
        transaction.classList.add("expense-item");
    }

    // Update balance
    balance = income - expense;

    // Append transaction to list and reset form
    transactionList.appendChild(transaction);
    form.reset();

    // Update the display
    updateDisplay();
});
