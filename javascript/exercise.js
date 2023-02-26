// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

//part 1
let course = "javascript";
let price = "$20";
let goals = ["learn HTML", "learn CSS", "learn Javascript", "become web dev", "have fun"];
//part 2
alert(course);
alert(price);
alert(goals);

//part 3
let group = {
  course: course,
  price: price,
  goals: goals,
};
alert(group.course);
alert(group.price);
alert(group.goals);
//part 4
alert(group.goals[1]);

//============================================================
//part 5-6

//my solution

let mainGoalValue;
function displayMainGoal(selectedID) {
  return selectedID;
}

 let goalSelector = 4;
 let ID = goals[goalSelector];

mainGoalValue = displayMainGoal(ID);
 alert(mainGoalValue);

//============================================================
//tutor solution

// function getListItem(array, arrayIndex){
// let arrayElement = array[arrayIndex];
// return arrayElement;
// }

// let firstGoal = getListItem(group.goals, [0]);
// alert (firstGoal);