let solGame = false;
let winGame = false;
let robotNumber = Math.floor(Math.random() * 24 + 1);
console.log(robotNumber);

const makeGuessButton = () => {
    let btnNumber = document.createElement("btnNumber");
    btnNumber.innerHTML = `<button id="playerNumber" onclick="playerNumber()" class="btn">RADEN MAAR</button>`;
    document.body.appendChild(btnNumber);
}

const makeResultButton = () => {
    let btnResult = document.createElement("result");
    btnResult.innerHTML = `<button id="result" onclick="result()" class="btn">UITSLAG</button>`;
    document.body.appendChild(btnResult);
}

const playerName = () => {
    let player = prompt("Vul je naam in", "Sol");
    if (player === 'Sol') {
        alert("Succes " + player + "! Fair play zit bij mij hoog in het vaandel.")
        makeGuessButton();
        return solGame = true;
    } else if (player != null) {
        alert("Succes " + player + "! Ik heb al het vertrouwen in je.")
        makeGuessButton();
    }
}

const playerNumber = () => {
    let inputNumber = prompt("Geef me dat nummertje G");
    if (inputNumber != null) {
        alert("Je kiest voor " + inputNumber + ".");
        let guess = parseInt(inputNumber);
        
        makeResultButton();
        if (guess == robotNumber) {
            winGame = true;
        }
    }
}


const result = () => {
    if (solGame) {
        alert("HA HA FOUT");
        alert("GAME OVER");
    } else if (winGame) {
        alert("Ik moet je wat vertellen.");
        alert("Ik loog over de medaille.");
        alert("Dus ook al heb je gewonnen, zijn er alleen maar verliezers.");
    } else {
        alert("HA HA FOUT");
        alert("Wil je het nog eens proberen?");
        location.reload();
    }
}
