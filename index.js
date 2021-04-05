// str1 = "images/dice";
// str2 = ".png";
//
//
//
// random1 = Math.floor(Math.random() * 6 + 1);
// random2 = Math.floor(Math.random() * 6 + 1);
//
//
//
//
//
// document.querySelector("img").setAttribute("src", str1.concat(String(random1), str2));
// document.querySelectorAll("img")[1].setAttribute("src", str1.concat(String(random2), str2));
//
//
//
// if (random1 > random2) {
//   document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = "Player 1 Wins!";
// } else if (random1 < random2) {
//   document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = "Player 2 Wins!";
// } else {
//   document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = "Game is Draw!";
//
// }


var random1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + random1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);



var random2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 ="dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (random1 > random2) {
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = "💰Player 1 Wins!";
} else if (random1 < random2) {
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = "Player 2 Wins!💰";
} else {
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerText = "Game 🎃 Draw!";
}









//
