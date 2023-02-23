function rollDice () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber}.png`);
    document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

    if (randomNumber > randomNumber2) {
        document.querySelector(".winner").innerHTML = "Player 1 wins!";
    }
    else if (randomNumber < randomNumber2){
        document.querySelector(".winner").innerHTML = "Player 2 wins!";
    }
    else {
        document.querySelector(".winner").innerHTML = "It's a tie!";
    }
}