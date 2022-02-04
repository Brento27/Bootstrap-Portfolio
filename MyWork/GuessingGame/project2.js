//eventlistener
var submitBtn = document.getElementById("startBtn");
submitBtn.addEventListener("click", submit);

function submit() {
    //random number
    var secretNumber = Math.floor(Math.random() * 11);
    //while loop to keep running until right guess
    while (answer != secretNumber){
        var answer = prompt("Please guess the secret number (1-10)");
        answer = Number(answer);
            if (answer === secretNumber) {
                alert("Correct!!! To play again press the button again.")
            }  else if (answer < secretNumber) { 
                alert("Incorrect, your guess is too low")
            }else if (answer > secretNumber) {
                alert("Incorrect, your guess is too high")
            } else {
                alert("Invalid input")
            }
        }
}
