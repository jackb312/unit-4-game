$(document).ready(function() {
    var counter = 0;
    var wins = 0;
    var losses = 0;
    function randomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min +1 )) + min;
    }
    var targetNumber = randomNum(19, 120);
    $("#target").html(targetNumber);
    var crystalOne = Math.ceil(Math.random() * 12);
    var crystalTwo = Math.ceil(Math.random() * 12);
    var crystalThree = Math.ceil(Math.random() * 12);
    var crystalFour = Math.ceil(Math.random() * 12);
    function newGame() {
        counter = 0;
        $("#target").html(targetNumber);
        targetNumber = randomNum(19, 120);
        $("playerScore").text(counter);
        crystalOne = Math.floor(Math.random() * 12);
        crystalTwo = Math.floor(Math.random() * 12);
        crystalThree = Math.floor(Math.random() * 12);
        crystalFour = Math.floor(Math.random() * 12);
    };
    $("#crystal1").on("click", function() {
        counter += crystalOne;
        winLose();
        $("#playerScore").text(counter);
    });
    $("#crystal2").on("click", function() {
        counter += crystalTwo;
        winLose();
        $("#playerScore").text(counter);
    });
    $("#crystal3").on("click", function() {
        counter += crystalThree;
        winLose();
        $("#playerScore").text(counter);
    });
    $("#crystal4").on("click", function() {
        counter += crystalFour;
        winLose();
        $("#playerScore").text(counter);
    });
    function winLose () {
        if (counter === targetNumber){
            wins += 1;
            alert("Winner!");
            $(win).text(wins);
            newGame();
    
        } else if(counter > targetNumber){
            losses += 1;
            alert("You Lose!");
            $(loss).text(losses);
            newGame();
        }
        
    };
});    