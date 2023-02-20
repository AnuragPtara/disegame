var dice = Math.random();
dice = dice*6;
dice = Math.floor(dice)+1;
var randomDiceImage = "dice" + dice + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

var dice2 = Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "dice" + dice2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(dice>dice2){
    document.querySelector("h1").innerHTML="Player 1 Win";
}
else if(dice2>dice){
    document.querySelector("h1").innerHTML="Player 2 Win";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}