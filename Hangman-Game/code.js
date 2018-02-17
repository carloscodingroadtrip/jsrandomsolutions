window.onload = function() {
  //Create the alphabet inside a variable
  var alphabetBoard = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  // Get the element to display lives left in the game
  var showLives = document.getElementById("livesLeft");

  // create alphabetBoard with all the alphabetButtons
  var alphabetButtons = function() {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabetBoard.length; i++) {
      letters.id = "alphabetBoard";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabetBoard[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  // Category to be displayed to the user
  var randomCategory = function() {
    if (pcRandomCategory === puzzleWords[0]) {
      categoryName.innerHTML =
        "The chosen category is: FRUITS";
    } else if (pcRandomCategory === puzzleWords[1]) {
      categoryName.innerHTML = "The chosen category is: COUNTRIES";
    } else if (pcRandomCategory === puzzleWords[2]) {
      categoryName.innerHTML = "The chosen category is: CITIES";
    }
  };

  // Create all the guesses for the ul
  result = function() {
    wordHolder = document.getElementById("hold");
    correctGuessLetter = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correctGuessLetter.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correctGuessLetter);
      correctGuessLetter.appendChild(guess);
    }
  };

  // Show lives
  comments = function() {
    showLives.innerHTML = "You have " + lives + " guesses left.";
    if (lives < 1) {
      letters.parentNode.removeChild(letters);
      var pcWord = word.toUpperCase();
      showLives.setAttribute("class", "text-danger");
      showLives.innerHTML = "Game Over, the computer was thinking about " + pcWord + ".";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (correctGuessesCounter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        document.getElementById("reset").innerHTML = "Play Again, get a new word";
      }
    }
  };

  // OnClick Function
  check = function() {
    list.onclick = function() {

      var liButtonClicked = this.innerHTML;
      this.setAttribute("class", "active disabled");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === liButtonClicked) {
          guesses[i].innerHTML = liButtonClicked;
          correctGuessesCounter += 1;
        }
      }
      var j = word.indexOf(liButtonClicked);
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    };
  };

  // Play
  play = function() {
    //Create a set of arrays for the puzzle words to be
    //used by the computer.
    puzzleWords = [
      ["banana", "strawberry","grape","apple","orange","plums","nectarine","watermelon","pear","melon","tangerine","mango","peach"],
      ["mexico", "japan", "canada", "china", "korea", "spain","france","italy","turkey","pakistan","england","ireland","russia","colombia","ecuador","belize","irak","iran","turkey","honduras","panama","venezuela","brasil","argentina"],
      ["manchester", "milan", "madrid", "amsterdam", "prague","paris","london","kabul","istanbul","rome","miami","houston","new-york","barcelona","liverpool","tokyo","shanghai"]
    ];

    pcRandomCategory = puzzleWords[Math.floor(Math.random() * puzzleWords.length)];

    word = pcRandomCategory[Math.floor(Math.random() * pcRandomCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    alphabetButtons();

    guesses = [];
    lives = 10;
    correctGuessesCounter = 0;
    space = 0;
    result();
    comments();
    randomCategory();
  };

  play();

  // // Reset
  // document.getElementById("reset").onclick = function() {
  //   correctGuessLetter.parentNode.removeChild(correctGuessLetter);
  //   letters.parentNode.removeChild(letters);
  //   play();
  // };
};