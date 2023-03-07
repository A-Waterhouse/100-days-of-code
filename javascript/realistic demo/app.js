let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
  console.log("<p/> clicked");
}
paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retriveUserInput(event) {
  let enteredText = event.target.value;
//let enteredText = inputElement.value;
  let stringLength = enteredText.length;
  

  console.log(stringLength);
let counter = document.querySelector(".numberCounter");

let maxLength= 50
  counter.textContent = stringLength - maxLength;
  //let enteredText = event.data;

  //console.log(enteredText);

  //console.log(event);
}







//console.dir(counter);

inputElement.addEventListener("input", retriveUserInput);
