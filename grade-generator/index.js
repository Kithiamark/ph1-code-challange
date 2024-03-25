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
