import inquirer from "inquirer";
const welcome = () => {
    console.log("welcome to number guessing game");
    return new Promise((res => {
        setTimeout(res, 2000);
    }));
};
await welcome();
var score = 0;
async function guessingGame() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(secretNumber);
    let guessNumber = await inquirer.prompt({
        type: "number",
        name: "guess",
        message: "guess a number between 1 to 100"
    });
    const { guess } = guessNumber;
    if (guess == secretNumber) {
        console.log("correct");
        score = score + 1;
        console.log("your score is", score);
    }
    else {
        console.log("wrong");
    }
}
async function repeatedly() {
    do {
        await guessingGame();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? press y for yes and n for no",
        });
        if (again.restart == "n" || again.restart == "N") {
            console.log("your score is", score);
        }
    } while (again.restart == "y" || again.restart == "Y");
}
await repeatedly();
