var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var Rsource = "./images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", Rsource);

// SECOND IMAGE //


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var Rsource = "./images/" + randomDiceImage;

document.querySelectorAll("img")[1].setAttribute("src", Rsource);


// WHO WON? //


if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"

}else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"

    }else{

    document.querySelector("h1").innerHTML = "🍀Draw"

}


