let max = prompt("Enter the maximum range");

let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Please enter your guess: ");

while (true) {
  if (guess == "quit") {
    console.log("User quit's");
    break;
  } else if (guess == random) {
    console.log(`Congrats! You are right. Random number is ${random}`);
    break;
  } else if (guess < random) {
    guess = prompt("Your guess is small, please try again!");
  } else {
    guess = prompt("Your guess is large, please try again!");
  }
}
