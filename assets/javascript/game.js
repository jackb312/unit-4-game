$(document).ready(function() {
    var total = 0;
    var wins = 0;
    var losses = 0;
    function randomNum(min, max) {
        min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min +1)) + min;
    }
    var targetNumber = randomNum(19, 120);
    console.log(targetNumber);
    $("#computerNumber").html(targetNumber);
    var crystalOne = Math.floor(Math.random() * 12);
    var crystalTwo = Math.floor(Math.random() * 12);
    var crystalThree = Math.floor(Math.random() * 12);
    var crystalFour = Math.floor(Math.random() * 12);
    function newGame() {
        targetNumber = randomNum(19, 120);
        $("#computerNumber").html(targetNumber);
        $("#playerNumber").text(total);
        total = 0;
        crystalOne = Math.floor(Math.random() * 12);
        crystalTwo = Math.floor(Math.random() * 12);
        crystalThree = Math.floor(Math.random() * 12);
        crystalFour = Math.floor(Math.random() * 12);
        console.log(targetNumber);
    };
    $("#crystal1").on("click", function() {
        total += crystalOne;
        outcome();
        $("#playerNumber").text(total);
    });
    $("#crystal2").on("click", function() {
        total += crystalTwo;
        outcome();
        $("#playerNumber").text(total);
    });
    $("#crystal3").on("click", function() {
        total += crystalThree;
        outcome();
        $("#playerNumber").text(total);
    });
    $("#crystal4").on("click", function() {
        total += crystalFour;
        outcome();
        $("#playerNumber").text(total);
    });
    function outcome () {
        if (total === targetNumber){
            wins += 1;
            alert("Winner!");
            $(win).text(wins);
            newGame();
    
        } else if(total > targetNumber){
            losses += 1;
            alert("You Lose!");
            $(loss).text(losses);
            newGame();

        }
    };
});    