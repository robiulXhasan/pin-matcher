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

// take input
document.getElementById("get-numbers").addEventListener("click", function (event) {
  const targetValue = event.target.innerText;
  const pinInputField = document.getElementById("input-pin-display");
  const previousTypedNumber = pinInputField.value;
  // clear input pin
  if (isNaN(targetValue)) {
    if (targetValue === "C") {
      pinInputField.value = "";
    } else if (targetValue === "<") {
      const pinDigits = previousTypedNumber.split("");
      pinDigits.pop();
      const remainingDigits = pinDigits.join("");
      pinInputField.value = remainingDigits;
    }
  } else {
    const inputPin = previousTypedNumber + targetValue;
    pinInputField.value = inputPin;
  }
});
// check matched or not
document.getElementById("submit").addEventListener("click", function () {
  const inputPin = document.getElementById("input-pin-display").value;
  const generatedPin = document.getElementById("display-pin").value;
  const matched = document.getElementById("matched");
  const notMatched = document.getElementById("not-matched");
  if (inputPin === generatedPin) {
    matched.style.display = "block";
    notMatched.style.display = "none";
  } else {
    notMatched.style.display = "block";
    matched.style.display = "none";
  }
});
