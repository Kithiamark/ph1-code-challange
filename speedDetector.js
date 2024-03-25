

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate demerit points based on speed
function DemeritPoints(speed) {
  const maxSpeed = 70;
  
  if (speed <= maxSpeed) {
    return "Ok";
  } else {
    const kmOverLimit = speed - maxSpeed;
    const penaltyPoints = Math.floor(kmOverLimit / 5);
    
    if (penaltyPoints > 12) {
      return "LICENCE SUSPENDED!!";
    } else {
      return `Points reduced: ${penaltyPoints}`;
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
    let result = DemeritPoints(speed);

    // Output the result
    console.log(result);
  } else {
    console.log("Error!! Enter a valid speed.");
  }

  rl.close();
});
  