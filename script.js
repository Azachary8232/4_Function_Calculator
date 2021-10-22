
var displayDiv = document.querySelector("#display");

var countNum = 0;
var countString = "";
var symbol;
var countNum2;
var total;

function press(num){
    countString += num;
    console.log(countString);
    displayDiv.innerText = countString;
    countNum = parseFloat(countString);
    console.log(countNum);
}


function setOP(operator){
    if( operator === "+"){
        symbol = "+";
        console.log(symbol);
    }

    if( operator === "-"){
        symbol = "-";
        console.log(symbol);
    }

    if( operator === "/"){
        symbol = "/";
        console.log(symbol);
    }

    if( operator === "*"){
        symbol = "*";
        console.log(symbol);
    }
    countString = "";
    countNum2 = countNum;
    console.log(countNum2);
}

function calculate(){
    if( symbol === "+"){
        total = countNum2 + countNum;
        console.log(total);
        total = Math.round(total * 100) / 100;
        console.log(total);
        displayDiv.innerText = total;
    }

    if( symbol === "-"){
        total = countNum2 - countNum;
        console.log(total);
        total = Math.round(total * 100) / 100;
        console.log(total);
        displayDiv.innerText = total;
    }

    if( symbol === "/"){
        total = countNum2 / countNum;
        console.log(total);
        total = Math.round(total * 100) / 100;
        console.log(total);
        displayDiv.innerText = total;
    }

    if( symbol === "*"){
        total = countNum2 * countNum;
        console.log(total);
        total = Math.round(total * 100) / 100;
        console.log(total);
        displayDiv.innerText = total;
    }
    countNum = total;
}

function clr(){
    countNum = 0;
    countString = "";
    symbol = "";
    countNum2 = 0;
    total = 0;
    displayDiv.innerText = "";
}
