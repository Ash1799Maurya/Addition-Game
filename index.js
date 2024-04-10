let number1 = document.getElementById("firstNumber");
let number2 = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");

let successMsg = "Congratulations! You Won !";
let tryAgain = "Please Try Again!";

function restartButton () {
    let random1 = Math.ceil(Math.random() * 100);
    let random2 = Math.ceil(Math.random() * 100);
    number1.textContent = random1;
    number2.textContent = random2;

    gameResult.textContent = " ";
    userInputElement.textContent = " ";
}

restartButton();

function checkButton () {
    let randomNum1 = parseInt(number1.textContent);
    let randomNum2 = parseInt(number2.textContent);
    let userEnteredSum = parseInt(userInputElement.value);
    
    let sumOfNumbers = randomNum1 + randomNum2;

    if (userEnteredSum === sumOfNumbers) {
        gameResult.textContent = successMsg;
        gameResult.style.backgroundColor = "#028a0f";
    }

    else {
        gameResult.textContent = tryAgain;
        gameResult.style.backgroundColor = "#1e217c";
    }
}