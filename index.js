// get random number pin
function getPin() {
  const pin = pinGenerator();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    getPin();
  }
}
// get random number
function pinGenerator() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

// [pin generator button click handling]
document.getElementById("pin-generator-button").addEventListener("click", function () {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
});

// keypad click
function clickNumber(number) {
  const inputPin = parseInt(document.getElementById("input-pin-display").value + number);
  document.getElementById("input-pin-display").value = inputPin;
}
// clear input display
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("input-pin-display").value = "";
});
// check matched or not
document.getElementById("submit").addEventListener("click", function () {
  const inputPin = parseInt(document.getElementById("input-pin-display").value);
  const generatedPin = parseInt(document.getElementById("display-pin").value);
  if (inputPin === generatedPin) {
    document.getElementById("matched").style.display = "block";
    console.log("matched");
  } else {
    document.getElementById("not-matched").style.display = "block";
    console.log("not matched");
  }
});
