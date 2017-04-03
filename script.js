//Establish button operations as soon as page loads
window.onload = function() {
  $("#cry1").on("click", crystals.crystal1);
  $("#cry2").on("click", crystals.crystal2);
  $("#cry3").on("click", crystals.crystal3);
  $("#cry4").on("click", crystals.crystal4);
  crystals.newgame();
};

//Initiate wins variable at zero
var wins = 0;
//Initiate losses variable at zero
var losses = 0;

//Define Crystal object to perfom operation funtions
  var crystals = {
    //function to initialize global variables
    newgame: function () {
      //Random variable shown at start of the game
      randnum = Math.floor(Math.random() * (120-19)) + 19;
      //Display Random Number
      $("#random-number").html(randnum);
      //Random variable for crystal 1
      randcry1 = Math.floor(Math.random() * (12-1)) + 1;
      //Random variable for crystal 2
      randcry2 = Math.floor(Math.random() * (12-1)) + 1;
      //Random variable for crystal 3
      randcry3 = Math.floor(Math.random() * (12-1)) + 1;
      //Random variable for crystal 4
      randcry4 = Math.floor(Math.random() * (12-1)) + 1;
      //Initiate score variable at zero
      score = 0;
      //Display score
      $("#score").html(score);
    },

    crystal1: function() {
      //Add random number assigned to crystal to score
      score += randcry1;
      // DONE: Display new score
      $("#score").html(score);
      //Check for win or loss
      crystals.winloss(score);
    },

    crystal2: function() {
      //Add random number assigned to crystal to score
      score += randcry2;
      // DONE: Display new score
      $("#score").html(score);
      //Check for win or loss
      crystals.winloss(score);
    },

    crystal3: function() {
      //Add random number assigned to crystal to score
      score += randcry3;
      // DONE: Display new score
      $("#score").html(score);
      //Check for win or loss
      crystals.winloss(score);
    },

    crystal4: function() {
      //Add random number assigned to crystal to score
      score += randcry4;
      // DONE: Display new score
      $("#score").html(score);
      //Check for win or loss
      crystals.winloss(score);
    },
    //function to determine whether the user won lost and update the tally
    winloss: function(s) {
      //If the score is greater than the random number variable, the user loses
      if (s > randnum) {
        losses++;
        //score = 0;
        $("#losses").html(losses);
        crystals.newgame();

      }
      else if (s == randnum) {
        wins++;
        //score = 0;
        $("#wins").html(wins);
        crystals.newgame();
      }
    }
  }
