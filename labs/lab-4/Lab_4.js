const readline = require('readline-sync');

// DB
const account1 = {
    accountName: 'Teo',
    accountNumber: String,
    rountingNumber: String,
    balance: String,
};

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountName = 'Ti';

// Program interface
bankApp();

// Main app
function bankApp() {
    let isInteracting = true;
    while (isInteracting) {
        printTheAppMenu();
        const userOption = getUserOption();

        switch (userOption) {
            case 1:
                const foundAccount = findAccount();
                if (foundAccount.accountNumber) {
                    const { accountName, balance } = foundAccount;
                    console.log(`accountName: ${accountName}, balance: ${balance}`);

                } else {
                    console.log('Account not found');

                }

                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
            default:
                console.log('Wrong option!\n');
                break;

        }
        console.log('See you next time!');

    }
}

// Support function
function printTheAppMenu() {
    console.log(`
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program`);
    
}

function getUserOption() {
    return Number(readline.question('Please select an option: '));
    
}

function findAccount() {
    
}