window.onload = function() {
  var alphabetBoard = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  var puzzleWords; // Array of topics
  var chosenCategory; // Random category
  var word; // Selected word
  var guess; // Guess
  var guesses = []; // Stored guesses
  var lives; // Lives
  var correctGuessesCounter; // Count correct guesses
  var space; // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");

  // create alphabetBoard
  var buttons = function() {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabetBoard.length; i++) {
      letters.id = "alphabetBoard";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabetBoard[i];
      check(); //Call the function against the word
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  // Select Category
  var selectCat = function() {
    if (chosenCategory === puzzleWords[0]) {
      categoryName.innerHTML =
        "The chosen category is: Fruits";
    } else if (chosenCategory === puzzleWords[1]) {
      categoryName.innerHTML = "The chosen category is: Countries";
    } else if (chosenCategory === puzzleWords[2]) {
      categoryName.innerHTML = "The chosen category is: Cities";
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
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      document.getElementById("reset").innerHTML = "Play Again";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (correctGuessesCounter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        document.getElementById("reset").innerHTML = "Play Again";
      }
    }
  };

  // Animate man
  var animate = function() {
    var drawMe = lives;
    drawArray[drawMe]();
  };

  // Hangman
  canvas = function() {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function() {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

  frame1 = function() {
    draw(0, 150, 150, 150);
  };

  frame2 = function() {
    draw(10, 0, 10, 600);
  };

  frame3 = function() {
    draw(0, 5, 70, 5);
  };

  frame4 = function() {
    draw(60, 5, 60, 15);
  };

  torso = function() {
    draw(60, 36, 60, 70);
  };

  rightArm = function() {
    draw(60, 46, 100, 50);
  };

  leftArm = function() {
    draw(60, 46, 20, 50);
  };

  rightLeg = function() {
    draw(60, 70, 100, 100);
  };

  leftLeg = function() {
    draw(60, 70, 20, 100);
  };

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1
  ];

  // OnClick Function
  check = function() {
    list.onclick = function() {
      var geuss = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guesses[i].innerHTML = geuss;
          correctGuessesCounter += 1;
        }
      }
      var j = word.indexOf(geuss);
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    };
  };

  // Play
  play = function() {
    puzzleWords = [
      [
        "banana",
        "strawberry",
        "grape",
        "apple",
        "orange",
        "plums",
        "nectarine",
        "watermelon",
        "pear",
        "melon",
        "tangerine",
        "mango",
        "peach"
      ],
      ["mexico", "japan", "canada", "china", "korea", "spain","france","italy","turkey","pakistan","england","ireland","russia","colombia","ecuador","belize","irak","iran","turkey","honduras","panama","venezuela","brasil","argentina"],
      ["manchester", "milan", "madrid", "amsterdam", "prague","paris","london","kabul","istanbul","rome","miami","houston","new-york","barcelona","liverpool","tokyo","shanghai"]
    ];

    chosenCategory =
      puzzleWords[Math.floor(Math.random() * puzzleWords.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [];
    lives = 10;
    correctGuessesCounter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  };

  play();

  // Reset

  document.getElementById("reset").onclick = function() {
    correctGuessLetter.parentNode.removeChild(correctGuessLetter);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  };
};
