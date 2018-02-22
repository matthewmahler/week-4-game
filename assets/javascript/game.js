//dom stuff

var $newGameButton = document.getElementById('new-game-button');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');
var $target = document.getElementById('target');

//variables
var target = Math.floor((Math.random() * 90) + 10);
var score = 0;
var wins = 0;
var losses = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;


//new game function

function newGame() {
  score = 0;
  target = Math.floor((Math.random() * 90) + 10);
  crystal1 = Math.floor((Math.random() * 10) + 1);
  crystal2 = Math.floor((Math.random() * 10) + 1);
  crystal3 = Math.floor((Math.random() * 10) + 1);
  crystal4 = Math.floor((Math.random() * 10) + 1);
  

  $target.textContent = target;
  document.getElementById("score").textContent = score;

 console.log(crystal1)
 console.log(crystal2)
 console.log(crystal3)
 console.log(crystal4)
 console.log(target)
 console.log(score)
 
}



$("#crystal1").click(function () {
  score = parseInt(score + crystal1);
  document.getElementById("score").textContent = score;
  checkWin();
  checkLoss();
});

$("#crystal2").click(function () {
  score = parseInt(score + crystal2);
  document.getElementById("score").textContent = score;
  checkWin();
  checkLoss();
});

$("#crystal3").click(function () {
  score = parseInt(score + crystal3);
  document.getElementById("score").textContent = score;
  checkWin();
  checkLoss();
});

$("#crystal4").click(function () {
  score = parseInt(score + crystal4);
  document.getElementById("score").textContent = score;
  checkWin();
  checkLoss();
});


function checkWin (){
if (score === target) {
  wins = (wins + 1);
  document.getElementById("wins").textContent = wins;
  setTimeout(function() {alert("YOU WIN!"); }, 100);
 newGame ();
}}

function checkLoss (){
if (score > target) {
  losses = (losses + 1);
  document.getElementById("losses").textContent = losses;
  setTimeout(function() {alert("YOU LOSE!"); }, 100);
  newGame ();
}}

$newGameButton.addEventListener('click', newGame);