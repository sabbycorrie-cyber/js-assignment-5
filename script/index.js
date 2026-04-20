//Assignment lesson JS5: Objects and Scope.  

const account = {
    accountName: "Cat",
    accountBalance: 1000,

    getBalance() {
        console.log(`Your balance is ${this.accountBalance}`);
    },

    deposit(amount) {
        this.accountBalance += amount;
        console.log(`You deposited ${amount}. Your new balance is ${this.accountBalance}`);
    },

    withdraw(amount) {
        if (amount > this.accountBalance) {
            console.log("Insufficient funds");
        } else {
            this.accountBalance -= amount;
            console.log(`You withdrew ${amount}. Your new balance is ${this.accountBalance}`);
        }
    },
    getAccountName() {
        console.log(`Account name: ${this.accountName}`);
    },
    accountError(message) {
        console.error(`Error: ${message}`);
    }
};

function atm() {
    let running = true;
    while (running) {
        const input  = prompt(`Select an option: 
            1) Get Balance, 2) Deposit, 3) Withdraw, 
            4) Exit`);

            if (input === null) {
                running = false;
                break;
            }

            const message = parseFloat(input);

            if (isNaN(message)) {
                alert("Invalid input.");
                continue;
            }

            switch (message) {
                case "1":
                    account.getBalance();
                    break;
                case "2":
                    const depositAmount = parseFloat(prompt("Enter deposit amount:"));
                    account.deposit(depositAmount);
                    break;
                case "3":
                    const withdrawAmount = parseFloat(prompt("Enter withdraw amount:"));
                    account.withdraw(withdrawAmount);
                    break;
                case "4":
                    account.getAccountName();
                    break;
                case "5":
                    running = false;
                    alert("Goodbye!");
                    break;
                default:
                    alert("Invalid option.");
            }
    }
}

atm();
account.getAccountName();
account.getBalance();

account.deposit(500);
account.getBalance();

account.withdraw(200);
account.getBalance();

account.withdraw(1500);
account.getBalance();
