//first random no
var rno1 = Math.floor(Math.random() * 6) + 1; //0-5 +1= 6
//rno1 = Math.floor(rno1) + 1;
//second random no
var rno2 = Math.floor(Math.random() * 6) + 1;

//changing dice image using random no
document.querySelector(".img1").setAttribute("src", "images/dice" + rno1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + rno2 + ".png");

//var randomImageSource1 = "images/dice" + rno1 + ".png";
//document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
//var randomImageSource2 = "images/dice" + rno2 + ".png";
//document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); */
//checking random to declare winner
if (rno1 > rno2) {
  (document.querySelector("h1").innerHTML = "Player 1 wins!");
} else if (rno1 < rno2) {
  (document.querySelector("h1").innerHTML = "Player 2 wins!");
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
