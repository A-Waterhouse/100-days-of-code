let age = 40;
let username = "andy";
let hobbies = ["sports", "cooking", "reading"];
let job = {
  title: "developer",
  place: "new york",
  salary: 50000,
};

let adultYears;
function calculateAdultYears(userAge) {
  return userAge - 18;
}

adultYears = calculateAdultYears(age);
console.log(adultYears);

age = 19;
adultYears = calculateAdultYears(age);
console.log(adultYears);

let person = {
  name: "Andy",
  greet() {
    console.log("hello");
  },
};
person.greet();