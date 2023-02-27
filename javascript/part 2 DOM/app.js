//document.body.children[1].children[0].href = 'http://www.google.com';

let anchorElement = document.getElementById("external-link");
anchorElement.href = "http://www.google.com";

anchorElement = document.querySelector("a");
anchorElement.href = "http://www.bbc.com";

// add an Element
// 1. create the new Element
//document.createElement("a"); //element created and stored in memory
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "http://www.google.com";
newAnchorElement.textContent = "leads to google";
// 2. get access to the parent element that shoule hold the new element
let firstParagraph = document.querySelector("p");

// 3. insert new element into the parent element content
firstParagraph.append(newAnchorElement);

//remove elements

// 1. select element to remove
let firstH1Element = document.querySelector("h1");

// 2. remove it

firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element); //used in older browsers

//move elements
firstParagraph.parentElement.append(firstParagraph);

//select parent of the place where it should be inserted and use append or insetBefore()

//innerHTML

console.log(firstParagraph.innerHTML); //mix of text and HTML code

firstParagraph.innerHTML = "Hi! this is <strong>important</strong>";
