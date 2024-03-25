rl.question("Enter the speed of the car: ", function(userInput) {
  // Convert the input to a number
  let speed = parseFloat(userInput);

  // Check if the input is a valid number
  if (!isNaN(speed) && speed >= 0) {
    // Calculate demerit points
    let result = calculateDemeritPoints(speed);

    // Output the result
    console.log(result);
  } else {
    console.log("Invalid input. Please enter a valid speed.");
  }

  rl.close();
});
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  
  if (speed <= speedLimit) {
    return "Ok";
  } else {
    const kmOverLimit = speed - speedLimit;
    const demeritPoints = Math.floor(kmOverLimit / kmPerDemeritPoint);
    
    if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}

// Prompt the user for input
rl.question("Enter the speed of the car: ", function(userInput) {
  // Convert the input to a number
  let speed = parseFloat(userInput);

  // Check if the input is a valid number
  if (!isNaN(speed) && speed >= 0) {
    // Calculate demerit points
    let result = calculateDemeritPoints(speed);

    // Output the result
    console.log(result);
  } else {
    console.log("Invalid input. Please enter a valid speed.");
  }

  rl.close();
});
  
