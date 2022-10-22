// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// PARTE due:
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// <!-- ESECUZIONE -->

let numbers = [];
let cellNumbers= 100;
// <!-- Creo bottone per visualizzare griglia di gioco (inserisco display block) -->
const startBtn = document.querySelector(".genera_btn");
startBtn.addEventListener("click", function(){
    const gridContainer = document.querySelector(".row");
    gridContainer.innerHTML= "";
    generateGrid(100); 
})

// Creo 16 numeri random
const bombs = generateRandom(16);
console.log(bombs)




// FUNCTIONS

// <!-- Funzione per Aggiungere numerazione progressiva da 1 a 100 sulla griglia 10X10caselle e creo la griglia in cui inwerirli-->
function generateGrid(cellNumbers) {
    for(let i = 1; i < cellNumbers + 1; i++){ 
        thisNumber = [i];
        row = document.querySelector(".row");
        square = document.createElement("div");
        square.style.width = `calc(100% / 10)`;
        square.style.height = `calc(100% / 10)`;
        square.classList.add("col");
        square.innerHTML = (`${thisNumber}`);
        row.append(square);
        // Quando l'utente clicca sulla cella, la cella diventa blu  o rossa a seconda della consizione
        square.addEventListener("click", handleSquareClick);
        // console.log(square)
    }
};

// <!--Funzione per aggiungere evento su ciascuna cella, la cella cliccata si colora:
    //  SE il numero è presente nella lista dei numeri generati 
    //     - abbiamo calpestato una bomba 
    //     - la cella si colora di rosso e la partita termina, 
    // ALTRIMENTI 
    //     - la cella cliccata si colora di azzurro e 
    //     - l'utente può continuare a cliccare sulle altre celle.
function handleSquareClick(){
    const clickedSquare = parseInt(this.textContent);
    if(bombs.includes(clickedSquare)){
        this.classList.add("bg_red");
        removeclick()
    } else{    
        this.classList.add("bg_blue");
    }
};

// Funzione per rimuovere il click quando l'utente perde
function removeclick() {
    const grid = document.getElementsByClassName("col");
    for (let i = 0; i < grid.length; i++) {
        const thisSquare = grid[i];
        thisSquare.removeEventListener("click", handleSquareClick);
    }
};




// Funzione per generare numeri random
function generateRandom(max) {
    let randomNumbersArray = []
    while (randomNumbersArray.length < max) {
        const thisNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        // console.log(thisNumber)
        if (!randomNumbersArray.includes(thisNumber)) {
             randomNumbersArray.push(thisNumber);
        }
    }
    // console.log(randomNumbersArray)
    return randomNumbersArray;   
};