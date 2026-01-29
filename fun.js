let speedTypingTestEl = document.getElementById("speedTypingTest");

let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");

let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");

let spinnerEl = document.getElementById("spinner");

let counter = 0;
let timerId;
let quotes;

function showRandomQuotes() {
    let option = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    speedTypingTestEl.classList.add("d-none");
    fetch("https://apis.ccbp.in/random-quote", option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quotes = jsonData.content;
            quoteDisplayEl.textContent = quotes;

            spinnerEl.classList.add("d-none");
            speedTypingTestEl.classList.remove("d-none");
        });
}

function startTimer() {
    timerId = setInterval(function() {
        counter += 1;
        timerEl.textContent = counter;
    }, 1000);
}

submitBtnEl.addEventListener("click", function() {
    if (quotes === quoteInputEl.value) {
        clearInterval(timerId);
        resultEl.textContent = "You typed in " + counter + " seconds.";
    } else {
        resultEl.textContent = "You typed incorrect sentence.";
    }
});

resetBtnEl.addEventListener("click", function() {
    counter = 0;
    clearInterval(timerId);
    startTimer();
    quoteDisplayEl.textContent = "";
    showRandomQuotes();
});

spinnerEl.classList.remove("d-none");
showRandomQuotes();
startTimer();