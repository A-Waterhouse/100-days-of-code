let productNameInputElement = document.getElementById("product-name");
let remaingCharsElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharaters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingCharaters = maxAllowedChars - enteredTextLength;
  remaingCharsElement.textContent=remainingCharaters;

}
productNameInputElement.addEventListener("input", updateRemainingCharaters);
