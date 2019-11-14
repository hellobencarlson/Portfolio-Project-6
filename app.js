//1 set up variables

var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');
var missed = 0;
var checkLetter = document.getElementsByTagName('li');
var letterClass = document.getElementsByClassName('letter');
var showClass = document.getElementsByClassName('show');


// 3 create phrases array
phrases = [
    "What does the fox say",
    "Happy birthday",
    "Good morning",
    "Sleep well",
    "How are you"
];

   // 2 hide overlay on click of button
document.getElementById('btn-reset').addEventListener('click', myFunction);

function myFunction() {
    document.getElementById('overlay').style.display = 'none';
}; 

// 4 get random phrase as array

function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in 
    var randomNumber = Math.floor( Math.random() * 4 );
    var phraseReturn = phrases[randomNumber];
    var phraseArrayReturn = phraseReturn.split(" ");
    console.log(phraseArrayReturn);
}
getRandomPhraseAsArray(phrases);


// 5 set game display
function addPhraseToDisplay(arr) {
    for (var i = 0; i < arr.length; i += 0) {
        arr.forEach(char);
        console.log(char);
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// 6 checkletter function
// button[i]- add it within the function
// define button 

// function checkletter (button) {
//    for (var i; i < checkLetter.length; i+= 1) {
//        var eachLI = checkLetter[i];
//        console.log(eachLI);
//    } 
// } 

// 7 add an event listener
// document.getElementsById('qwerty').addEventListener('click',);

// 8 count misses

// 9 create checkwin function OK
// function checkwin() {
// if (letterClass.length == showClass.length) {
//    document.getElementById('overlay').style.display = 'flex';
//    document.getElementById('overlay').addClassName('win');
//    document.getElementByClassName('header').innerHTML = "You Won!!!";
// }
// if (miss > 4) {
//      document.getElementById('overlay').addClassName('lose');
//      document.getElementByClassName('header').innerHTML = "Sorry, You Lost";
//      document.getElementById('overlay').style.display = 'flex';
// }

// 10 CSS transitions
// 11 reset game button