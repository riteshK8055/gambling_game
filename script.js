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

    else{

        return numberDepositAmount;
    }
};

const getNumberOfLines = () => {

    while(true){

        const lines = prompt("Enter teh number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines >3){

            console.log("Invalid number of lines, try again.");
        } 

        else{

            return numberOfLines;
        }
    }

};

const getBet = (balance ,lines) =>{

    while(true) {

        const bet = prompt("enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet)|| numberBet <=0  || numberBet >(balance/lines)){

            console.log("Invalid bet, try again.");
        }
        else{

            return numberBet;
        }
    }
};


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance , numberOfLines);