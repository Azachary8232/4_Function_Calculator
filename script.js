

var displayDiv = document.querySelector("#display");

var countNum = 0;
var countString = "";
var total;


function press(num){
    countString += num;
    console.log(countString);
    displayDiv.innerText = countString;
    countNum = parseFloat(countString);
    console.log(countNum);
}


function setOP(operator){
    total = countNum + operator;
    console.log(total);
    countString = 0;
    displayDiv.innerText = countString;
}