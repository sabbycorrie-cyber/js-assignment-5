const account = {
    accountName: "Nick",
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
    }
    getAccountName() {
        console.log(`Account name: ${this.accountName}`);
    },
    accountError(message) {
        console.error(`Error: ${message}`);
    }
};

account.getAccountName();
