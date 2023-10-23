//1. deposit money.
//2. determine no of lines to bet on.
//3. collect a bet amount.
//4. spin the slot machine.
//5. check if the user wons.
//6. give the user their money.
//7. play again.

const prompt = require("prompt-sync")();

const deposit = ()=>{

    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount <=0){

        console.log("Invalid deposit Amount,try again.")
    }
};


deposit();