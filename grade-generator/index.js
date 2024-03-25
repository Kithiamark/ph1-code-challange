const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get the grade based on the input mark
function getGrade(mark) {
  if (mark > 79) {
    return 'A';
  } else if (mark >= 60 && mark <= 79) {
    return 'B';
  } else if (mark >= 50 && mark <= 59) {
    return 'C';
  } else if (mark >= 40 && mark <= 49) {
    return 'D';
  } else {
    return 'E';
  }let grade;
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
}

// Prompt the user for input
rl.question("Enter student's marks (between 0 and 100): ", function(userInput) {
  // Convert the input to a number
  let studentMark = parseFloat(userInput);

  // Check if the input is a valid number
  if (!isNaN(studentMark) && studentMark >= 0 && studentMark <= 100) {
    // Get the grade
    let grade = getGrade(studentMark);

    // Output the result
    console.log(`Student's mark: ${studentMark}`);
    console.log(`Grade: ${grade}`);
  } else {
    console.log("Invalid input. Please enter a number between 0 and 100.");
  }

  rl.close();
});
