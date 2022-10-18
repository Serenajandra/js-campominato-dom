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

// <!-- Creo evento sul bottone per visualizzare griglia di gioco (inserisco display block) -->
const startBtn = document.querySelector(".genera_btn");

startBtn.addEventListener("click", function(){
 generateGrid (100); 
})

// FUNCTIONS
// <!-- Aggiungo numerazione progressiva da 1 a 100 sulla griglia 10X10caselle e creo la griglia in cui inwerirli-->
function generateGrid(numeroCelle) {
    for(let i = 1; i < numeroCelle + 1; i++){ 
        console.log([i]);
        thisNumber = [i];
        row = document.querySelector(".row");
        square = document.createElement("div");
        square.style.width = `calc(100% / 10)`;
        square.style.height = `calc(100% / 10)`;
        square.classList.add("col");
        square.innerHTML = (`${thisNumber}`);
        row.append(square);
        square.addEventListener("click", handleSquareClick);
        console.log(square)
    }
};

// <!-- Aggiungo evento su ciascuna cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. -->

function handleSquareClick(){
    this.classList.add("bg_blue")
    console.log(parseInt(this.textContent));
};