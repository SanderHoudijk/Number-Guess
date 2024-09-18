let number = Math.floor(Math.random() * 101);
let guesses = 0;

document.getElementById("submitGuess").onclick = function() {
    let guessField = document.getElementById("guessField").value;

    if (number == guessField) {
        guesses = guesses + 1
        document.getElementById("output").innerHTML = "Goede antwoord in " + guesses + " pogingen!"
        document.getElementById("output").style.color = "green";
        document.getElementById("pogingen").innerHTML = "Aantal Pogingen: " + guesses;
    }

    else if (number < guessField) {
        guesses = guesses + 1;
        document.getElementById("output").innerHTML = "Fout, probeer een kleiner nummer."
        document.getElementById("output").style.color = "red";
        document.getElementById("pogingen").innerHTML = "Aantal Pogingen: " + guesses;
        console.log(guesses);
    }
    else {
        guesses = guesses + 1;
        document.getElementById("output").innerHTML = "Fout, probeer een groter nummer."
        document.getElementById("output").style.color = "red";
        document.getElementById("pogingen").innerHTML = "Aantal Pogingen: " + guesses;
        console.log(guesses);
    }
}
