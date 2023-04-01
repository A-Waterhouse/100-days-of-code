// first example; sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button"); //selects 1st button within elementID "calculator"

function calculateSum() {
  //executes when button is clicked due to addeventlistener
  const userNumberInputElement = document.getElementById("user-number"); //only used in this function so just define in function
  const enteredNumber = userNumberInputElement.value; // gets value which is entered and stored

  let sumUpToNumber = 0; //starts at 0
  for (let i = 0; i <= enteredNumber; i++) {
    //runs until entered number is smaller or equal to entered number, then adds 1 to it
    sumUpToNumber = sumUpToNumber + i; //gets 0 and adds 1 to it
  }

  const outputResultElement = document.getElementById("calculated-sum"); //accesses paragraph
  outputResultElement.textContent = sumUpToNumber; //changes text content to result derived
  outputResultElement.style.display = "block"; //in the css the style of calculated-sum was hidden, this changes it to visable
}

calculateSumButtonElement.addEventListener("click", calculateSum); //checks for click event then points to function once clicked

//highlight links excerceise

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button" //selects the button since its ID is selected and then the button within it
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a"); //selects all anchors and forms array
  for (const anchorElement of anchorElements) {
    //selects elements within the formed array
    anchorElement.classList.add("highlight"); //adds the class to the selections
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// display user data

const dummyUserData = {
  //dummy user data information
  firstName: "Andy",
  lastName: "Waterhouse",
  Age: "40",
};
const displayUserDataButtonElement =
  document.querySelector("#user-data button"); //selects button same as previous example

function displayUserData() {
  //get access to unorders list and add list object to every item
  const outputDataElement = document.getElementById("output-user-data"); //selects the unordered list by ID
  outputDataElement.innerHTML = ""; //clears existing data

  for (const key in dummyUserData) {
    //holds names as values, dummyUserData is object which will be looped through
    const newUserDataListItemElement = document.createElement("li"); //used to create a list item from the unordered list
    const outputText = key.toUpperCase() + ": " + dummyUserData[key]; //property name is stored as string value in the key const,makes it upper case and seperates values in array with a colon

    newUserDataListItemElement.textContent = outputText; //creates a string made up of multiple blocks
    outputDataElement.append(newUserDataListItemElement); //adds newuserdatalistitemelement to output data
  }
}
displayUserDataButtonElement.addEventListener("click", displayUserData); //on click displayUserData function is executed

//stats rolldice example

const rollDiceButtonElemnt = document.querySelector("#statistics button"); //selects the button element

function rollDice() {
  //random number code
return Math.floor(Math.random() * 6) + 1;//returns float between 0 and 1 by deault, multiply by 6 to get float number between 0 and 6, math.floor is used to remove floats/round down to integer, 1 is added to make the number between 1 and 6, since 6 was excluded and 0 is of no use

}

function deriveNumberOfDiceRolls() {
  //used to display the output
  const targetNumberInputElement =
    document.getElementById("user-target-number"); //targets the ID
  const diceRollsListElement = document.getElementById("dice-rolls"); //targets unordered list for theputput
  const enteredNumber = targetNumberInputElement.value; //selects the users input number
  diceRollsListElement.innerHTML = ""; //clears any list items from previous rolls

  let hasRolledTargetNumer = false; //boolean variable with initial value of false, will be true once rolled
  let numberOfRolls = 0; //set initial value, initialised before while loop since the while loop will change it

  while (!hasRolledTargetNumer) {
    //loop will run while NOT rolledtargetnumber is true using ! to invert
    const rolledNumber = rollDice(); //returns number between 1 and 6, number will be created for every loop
    // if (rolledNumber == enteredNumber) {//checks the result == is used since it will always be a string

    //   hasRolledTargetNumer = true; //changes boolean value based on result of the if statement
    // } commented out since can be shorter
    numberOfRolls++; //add 1 to value for each loop and stores new value in the variable
    
    
    const newRollListItemElement = document.createElement("li"); //creates new list element to display the data
    const outputText = "roll " + numberOfRolls + ": " + rolledNumber;// makes the format of the data
    newRollListItemElement.textContent = outputText; //changes the text content to the above created string
    diceRollsListElement.append(newRollListItemElement);//add the data to the string
    hasRolledTargetNumer = rolledNumber == enteredNumber; //doesnt need the extra variable since the result will be true or false, dont need the if check the result can be stored itself
  }
  const outputTotalRollsElement = document.getElementById("output-total-rolls"); //selects the spans
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElemnt.addEventListener("click", deriveNumberOfDiceRolls);
