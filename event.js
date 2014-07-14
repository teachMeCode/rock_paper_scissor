
var human = function(x) {
  if (x == 1) {
    human = "Rock";
    return human;
  } else if (x == 2) {
    human = "Paper";
    return human;
  } else if (x == 3) {
    human = "Scissor";
    return human;
  } else {
    human = "";
    return human
  }
};

var computer = Math.random();
if (computer <0.34) {
    computer = "Rock";
    
    } else if (computer <=0.64) {
        computer = "Paper";
        
    } else {
        computer = "Scissor";
        
        
    }

var compare = function(x,y) {
        //where x = human choice
        //where y = computer choice
        if (x==y) {
          //Need to return results, not print results
          //return ("No way, a tie! How is that possible?!");
          alert("No way! A tie, how is possible!\n\nPlease play again!");
        } else if (x=="Rock") {
          if (y=="Scissor") {
            //return "Rock wins";
            //alert("Rock wins");
            alert("The computer selected: " + computer + "\n\nYou selected: " + human + "\n\nCongratulations! You win!\n\nPlease play again!");
           } else {
            //return "Paper wins";
            //alert("Paper wins");
            alert("The computer selected: " + computer + "\n\nYou selected: " + human + "\n\nSo sorry, but the computer wins.\n\nPlease play again!");
          }
        } else if (x=="Paper") {
          if(y=="Rock") {
            //return "Paper wins!";
            //alert("Paper wins!");
            alert("The computer selected: " + computer + "\n\nYou selected: " + human + "\n\nCongratulations! You win!\n\nPlease play again!");  
          } else {
            //return "Sicssor wins!";
            //alert("Scissor wins!");
            alert("The computer selected: " + computer + "\n\nYou selected: " + human + "\n\nSo sorry, but the computer wins.\n\nPlease play again!");
          }
        } else if (x=="Scissor") {
          if(y=="Paper") {
            //return "Sicssor wins!";
            //alert("Scissor wins!");
            alert("The computer selected: " + computer + "\n\nYou selected: " + human + "\n\nCongratulations! You win!\n\nPlease play again!");
          } else {
            //return "Rock wins!";
            //alert("Rock wins!");
            alert("The computer selected: " + computer + "\n\nYou selected: " + human + "\n\nSo sorry, but the computer wins.\n\nPlease play again!");
          }
        }
};

var load = function() {
  window.location.reload(true);
}


//compare(human,computer);