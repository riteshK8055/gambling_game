//1. deposit money.
//2. determine no of lines to bet on.
//3. collect a bet amount.
//4. spin the slot machine.
//5. check if the user wons.
//6. give the user their money.
//7. play again.

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {

    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8,
}

const SYMBOL_VALUES ={

    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2,

}

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


const spin = () =>{

    const symbols = [];

    for( const[symbol ,count] of Object.entries(SYMBOLS_COUNT)){

        for(let i =0; i<count; i++){

            symbols.push(symbol);
        }
    }

    const reels = [[], [], []];
    for(let i = 0 ; i<COLS; i++){

        const reelSymbols = [...symbols];
        for(let j=0; j<ROWS; j++){

 
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbols = reelSymbols[randomIndex];
            reels[i].push(selectedSymbols);

            reelSymbols.splice(randomIndex , 1);
        }
    }

    return reels;
};


const transpose = (reels) => {
    const rows = [];
  
    for (let i = 0; i < ROWS; i++) {
      rows.push([]);
      for (let j = 0; j < COLS; j++) {
        rows[i].push(reels[j][i]);
      }
    }
  
    return rows;
  };



  const printRows = (rows) => {
    for (const row of rows) {
      let rowString = "";
      for (const [i, symbol] of row.entries()) {
        rowString += symbol;
        if (i != row.length - 1) {
          rowString += " | ";
        }
      }
      console.log(rowString);
    }
  };

const reels = spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance , numberOfLines);
const rows = transpose(reels);

