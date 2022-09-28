// selecting all inputs from HTML world

var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    if (ip && curr) {
        if (ip <= 0 || curr <= 0 || qty <= 0) {
            outputBox.innerText = "Negative values or Zero not allowed. Please enter only inputs greater than 0";
            return;
            // alert("Negative values not allowed. Please enter only inputs greater than 0");
        }
    } else {
        outputBox.innerText = "Please enter valid inputs, do not enter 0 or leave any field empty";
        return;
        //alert("Please enter inputs. Do not leave any field blank.");
    }

    if (ip > 0 && qty > 0 && curr > 0) {

        calculateProfitandLoss(ip, qty, curr);
    }

}

// calculate profit, loss, profit percentage, loss percentage

function calculateProfitandLoss(initial, quantity, current) {


    if (initial > current) {

        // loss
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        outputBox.innerText = `The loss is ${loss} and loss percentage is ${lossPercentage} % 🔴`;

    } else if (current > initial) {

        // profit 
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        outputBox.innerText = `The profit is ${profit} and profit percentage is ${profitPercentage.toFixed(2)} % 🟢`;

    } else {

        // rest
        outputBox.innerText = `No profit no loss : Bilkul ricks nahi lene ka`;
        // console.log("Kuch risk nahi h re baba")
    }

}