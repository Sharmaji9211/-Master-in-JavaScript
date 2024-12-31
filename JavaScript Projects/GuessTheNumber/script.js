const solve=(parseInt(Math.random()*100+1))

const submit=document.querySelector('#subt');
const userInput= document.querySelector('#guessField');
const pGuesses= document.querySelector('.guesses');
const RGuesses= document.querySelector('.lastResult');
const LowandHigh= document.querySelector('.lowOrHi');
const StartOver= document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess=[];
let numGuess=1;
let PlayGame=true;

if(PlayGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess= parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please enter a valid number ');
   }
   else if(guess===''){
    alert('Please enter a valid number ');
   }
   else if(guess<1){
    alert('Please enter a valid number ');
   }
   else if(guess>100){
    alert('Please enter a valid number ');
   }
   else{
    prevGuess.push(guess);
    if(numGuess===11){
        displayGuess(guess);
        displayMessage(`Game over. Random number was ${solve}`)
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
   }
}
function checkGuess(guess){
   if(guess=== solve){
    displayMessage(`You guessed it Right`)
    endGame();
   }
   else if(guess< solve) {
    displayMessage(`Number id Too Low`)

   }
   else if(guess > solve) {
    displayMessage(`Number id Too High`)

   }
}
function displayGuess(guess){
    userInput.value='';
    pGuesses.innerHTML += `${guess}  , `;
    numGuess++;
    RGuesses.innerHTML=`${11 - numGuess}`
}
function displayMessage(message){
    LowandHigh.innerHTML=`<h2>${message}</h2>`;
}

 function endGame(){
     userInput.value ='';
     userInput.setAttribute('disabled','')
     p.classList.add(`button`);
     p.innerHTML= `<h2 id ="newGame"> Start new Game </h2>`;
     StartOver.appendChild(p)
     PlayGame=false;
     newGame();
 }
 function newGame(){
     const newGameBotton= document.querySelector('#newGame')
     newGameBotton.addEventListener('click', function(e){
        prevGuess=[];
        numGuess=1;
        pGuesses.innerHTML='';
        RGuesses.innerHTML=`${11 - numGuess}`
        userInput.removeAttribute('disabled')
        StartOver.removeChild(p);
        PlayGame=true;65
     })
 }