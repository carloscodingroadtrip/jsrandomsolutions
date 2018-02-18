$(document).ready(function() {
  var randomMatch;
  var sum=0;
  var hiddenValue;
  var userClickedVal;
  var wins=0;
  var losses = 0;
  //Generate a random number for the pc
  function randomMatch() {
    randomMatch = Math.floor(Math.random() * 80) + 10;
    return randomMatch;
  }
  //
  randomMatch();
  $("#matchme").text(randomMatch);

  function randomImgVals () {
    hiddenValue = Math.floor(Math.random() * 15 ) + 1;
    return hiddenValue;
  }

  for(i=1; i<5; i++) {
      randomImgVals();
      $("#item"+i).attr("hiddenValue",hiddenValue)[0];
  }


  $(".items").on("click", function () {
        userClickedVal = parseInt($(this).attr("hiddenValue"));
        console.log(userClickedVal);
        sum += userClickedVal;
        if (sum > randomMatch) {
            losses++;
            $(".items").addClass("active");
            $("#lossesholder").text(losses);
        } else if ( sum === randomMatch) {
            wins++;
            $(".items").addClass("active");
            $("#winsholder").text(wins);
        }
        $("#total").text(sum);
  });



});

