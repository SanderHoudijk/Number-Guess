let maxAttempts = 10; 
let number = Math.floor(Math.random() * 101); 
let guesses = 0, wins = 0, losses = 0;

function generateNewNumber() {
    number = Math.floor(Math.random() * 101); 
    guesses = 0;
    document.getElementById("pogingen").innerHTML = "Aantal Pogingen: 0";
    document.getElementById("output").innerHTML = "Er is nog geen getal ingevoerd....";
    document.getElementById("output").style.color = "gray";
}

function startNewGameWithDelay() {
    setTimeout(generateNewNumber, 3000); 
}

document.getElementById("submitGuess").onclick = function() {
    let guessField = document.getElementById("guessField").value;

    if (guesses >= maxAttempts) {
        document.getElementById("output").innerHTML = `Je hebt het maximale aantal pogingen bereikt! Het juiste nummer was ${number}.`;
        document.getElementById("output").style.color = "red";
        losses++;
        document.getElementById("score").innerHTML = `Winst: ${wins} | Verlies: ${losses}`;
        startNewGameWithDelay(); 
        return;
    }

    guesses++;
    document.getElementById("pogingen").innerHTML = "Aantal Pogingen: " + guesses;

    if (number == guessField) {
        document.getElementById("output").innerHTML = "Goed gedaan! Je hebt het juiste nummer geraden in " + guesses + " pogingen!";
        document.getElementById("output").style.color = "green";
        wins++;
        document.getElementById("score").innerHTML = `Winst: ${wins} | Verlies: ${losses}`;
        startNewGameWithDelay(); 
    } else if (number < guessField) {
        document.getElementById("output").innerHTML = "Fout, probeer een kleiner nummer.";
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").innerHTML = "Fout, probeer een groter nummer.";
        document.getElementById("output").style.color = "red";
    }

    if (guesses >= maxAttempts) {
        document.getElementById("output").innerHTML = `Je hebt verloren. Het juiste nummer was ${number}.`;
        losses++;
        document.getElementById("score").innerHTML = `Winst: ${wins} | Verlies: ${losses}`;
        startNewGameWithDelay(); 
    }
};
