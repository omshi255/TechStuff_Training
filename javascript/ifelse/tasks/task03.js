// Age & Grade Evaluator
// Write a program that takes a person’s age and marks as input.
// Print whether they are a Child (0–12), Teen (13–19), or Adult (20+).
// Also, based on marks (0–100), print their Grade:
// 90–100 → A
// 75–89 → B
// 50–74 → C
// 35–49 → D
// Below 35 → Fail
let name = String(prompt("Enter the name of the person"));
let age = Number(prompt("Enter the age of the person"));
let english = Number(prompt("Enter the marks of student in English"));
let maths = Number(prompt("Enter the marks of student in Maths"));
let hindi = Number(prompt("Enter the marks of student in Hindi"));
let computer = Number(prompt("Enter the marks of student in Computer"));
let science = Number(prompt("Enter the marks of student in Science"));

console.log("Name of the student is:", name);

const outscore = 500;
let percentage = ((english + maths + hindi + computer + science) / outscore) * 100;

// Age category
let category;
if (age >= 0 && age <= 12) category = "child";
else if (age >= 13 && age <= 19) category = "teen";
else if (age >= 20) category = "adult";
else category = "invalid";

// Grade
let grade;
if (percentage >= 90 && percentage <= 100) grade = "A";
else if (percentage >= 75 && percentage <= 89) grade = "B";
else if (percentage >= 50 && percentage <= 74) grade = "C";
else if (percentage >= 35 && percentage <= 49) grade = "D";
else grade = "Fail";

// Output
if (category !== "invalid") {
  console.log(`The student is a ${category} and grade is: ${grade}`);
} else {
  console.log("Invalid age entered!");
}
