// first example; sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button"); //selects 1st button within elementID "calculator"

function calculateSum(){ //executes when button is clicked due to addeventlistener
const userNumberInputElement = document.getElementById("user-number");  //only used in this function so just define in function
const enteredNumber = userNumberInputElement.value; // gets value which is entered and stored

let sumUpToNumber = 0; //starts at 0
for (let i = 0; i <=enteredNumber; i++){ //runs until entered number is smaller or equal to entered number, then adds 1 to it
    sumUpToNumber=sumUpToNumber + i; //gets 0 and adds 1 to it
}

const outputResultElement = document.getElementById("calculated-sum"); //accesses paragraph 
outputResultElement.textContent = sumUpToNumber; //changes text content to result derived
outputResultElement.style.display = "block"; //in the css the style of calculated-sum was hidden, this changes it to visable
}

calculateSumButtonElement.addEventListener("click", calculateSum); //checks for click event then points to function once clicked