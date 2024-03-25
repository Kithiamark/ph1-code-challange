// This imports a module that reads user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function that allows the program to get the grade based on the input mark
//switch statements are prefered in such a case due to their ability to handle different arguements
function getGrade(mark) {
    let grade;
    switch (true) {
      case (mark > 79):
        grade = 'A';
        break;
      case (mark >= 60 && mark <= 79):
        grade = 'B';
        break;
      case (mark >= 50 && mark <= 59):
        grade = 'C';
        break;
      case (mark >= 40 && mark <= 49):
        grade = 'D';
        break;
      default:
        grade = 'E';
    }
    return grade;
}

// asks the user for the input
rl.question("Enter student's marks (between 0 and 100): ", function(userInput) {
  
  let studentMark = parseFloat(userInput);

  // Check if the input is a valid number within the students marks range
  if (!isNaN(studentMark) && studentMark >= 0 && studentMark <= 100) {
    // Get the grade
    let grade = getGrade(studentMark);

    // we have to invoke an output from the console bt the console.log
    console.log(`Student's mark: ${studentMark}`);
    console.log(`Grade: ${grade}`);
  } else {
    console.log("Please enter a number between 0 and 100.");
  }

  rl.close();
});
