//1 set up variables

var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var missed = 0;
var checkLetter = document.getElementsByClassName('box');
var letterClass = document.getElementsByClassName('letter');
var showClass = document.getElementsByClassName('show');


// 3 create phrases array
phrases = [
    "what does the fox say",
    "happy birthday",
    "good morning",
    "sleep well",
    "how are you"
];

   // 2 hide overlay on click of button
document.getElementById('btn-reset').addEventListener('click', myFunction);

function myFunction() {
    document.getElementById('overlay').style.display = 'none';
}; 

// 4 get random phrase as array

function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in 
    var randomNumber = Math.floor( Math.random() * 5 );
    console.log(randomNumber);
    var phraseReturn = phrases[randomNumber];
    var phraseArrayReturn = phraseReturn.split("");
    console.log(phraseArrayReturn);
    return phraseArrayReturn;
}


// 5 set game display
const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    for (var i = 0; i < phraseArray.length; i += 1) {
        if (phraseArray[i] == " ") {
            var newSpace = phraseArray[i];
            var createSpan = document.createElement("SPAN");
            var createSpace = document.createTextNode(newSpace);
            createSpan.appendChild(createSpace);
            document.getElementById('phrase').firstElementChild.appendChild(createSpan);
        } else {
            var character = phraseArray[i];
            var createLI = document.createElement("LI");
            var createText = document.createTextNode(character);
            createLI.appendChild(createText);
            document.getElementById('phrase').firstElementChild.appendChild(createLI).className = "box";
    }
}
}

addPhraseToDisplay(phraseArray); 

// 6/7 add event listener, checkletter function
document.getElementById('qwerty').addEventListener('click', checkLetters, misses);

function checkLetters(event) {
    if (event.target.tagName == "BUTTON") {
        buttonText = event.target.textContent;
        console.log(buttonText);
        for (var i = 0; i < checkLetter.length; i += 1) {
            var eachLI = checkLetter[i].textContent;
            console.log(eachLI);
                if (buttonText == eachLI) {
                    checkLetter[i].className = "show";
                    var match = buttonText; 
         }
     } 
 }
    // return match;
} 

// 8 count misses
function misses() {
    if (letterFound == null) {
   document.getElementById('scoreboard').getFirstElementChild.removeChild();  
    missed = missed += 1; 
    console.log(missed);
    }
}
/* start comment
// 9 checkwin & 11 reset game button
function resetButtonAppear() {
    winButtonDiv = document.getElementById('btn__reset');
    winButtonDiv.removeChild(winButtonDiv.childNodes[1]);
    createButton = document.createElement("BUTTON");
    addText = document.createTextNode("Reset");
    createButton.appendChild(addText);
    winButtonDiv.appendChild(createButton);
    winButtonDiv.lastChild.setAttribute('id', 'resetNow');
   
    document.getElementById('resetNow').addEventListener('click', myFunction);
        function myFunction() {
            document.getElementById('overlay').style.display = 'none';
        }
        missed = 0;
        var scoreboard =  document.getElementById('scoreboard').getFirstElementChild
            if (scoreboard.length < 3) {
                heartClone = scoreboard.getFirstElementChild.cloneNode(true);
                scoreboard.getFirstElementChild.appendChild(heartClone);
                // run new phrase and phrase display function here
                // get buttons to re-display
            }
}

function checkwin() {
    if (letterClass.length == showClass.length) {
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('overlay').addClassName('win');
        document.getElementByClassName('header').innerHTML = "You Won!!!";        
        resetButtonAppear();
    }
    if (miss > 4) {
      document.getElementById('overlay').addClassName('lose');
      document.getElementByClassName('header').innerHTML = "Sorry, You Lost";
      document.getElementById('overlay').style.display = 'flex';
      resetButtonAppear();
     }
    }
// 10 CSS transitions 
end */