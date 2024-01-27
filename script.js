var original_num = Math.floor(Math.random() * 100 + 1);
console.log(original_num);


const button = document.getElementById("button");
const result = document.getElementById("result");
const hint = document.getElementById("hint");
const attempts = document.getElementById("attempts");

var left_attempts = 3;
var prev_ans = [];
let playgame = true;

button.addEventListener('click', function () {
    if (playgame) {
        const guess_number = document.getElementById("userGuess");
        validate(guess_number.value);
    }
    else{
        alert("Please reload the page to play again")
    }
});

// Function to validate if the number is valid
function validate(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        check(guess);
    }
}

// Function to check the status of guess
function check(guess) {
    if (guess == original_num) {
        result.style.color = "green"
        result.innerHTML = `Your Answer is correct. The number is: ${original_num}`;
        hint.innerHTML = ""
        left_attempts = left_attempts - 1;
        attempts.innerHTML = left_attempts;
        left_attempts = 0;
        playgame = false; // Stop the game after a correct guess
    } else if (guess < original_num) {
        result.innerHTML = "Your answer is wrong.";
        prev_ans.push(guess);
        result.innerHTML += " " + prev_ans.join(', ');
        hint.innerHTML = "Your guess is lower.";
        left_attempts = left_attempts - 1;
        attempts.innerHTML = left_attempts;
    } else {
        result.innerHTML = "Your answer is wrong.";
        prev_ans.push(guess);
        result.innerHTML += " " + prev_ans.join(', ');
        hint.innerHTML = "Your guess is higher.";
        left_attempts = left_attempts - 1;
        attempts.innerHTML = left_attempts;
    }

    if (left_attempts === 0 && playgame == true) {
        hint.innerHTML = ` Answer is ${original_num}`
        playgame = false;
        // Stop the game after all attempts are used
    }
}
