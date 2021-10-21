

var displayDiv = document.querySelector("#display");

var countNum = 0;
var countString = "";


function press(num){
    countString += num;
    console.log(countString);
    displayDiv.innerText = countString;
    countNum = parseFloat(countString);
    console.log(countNum);
}


function setOP(operator){
    
}