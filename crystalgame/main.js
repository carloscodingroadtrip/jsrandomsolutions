$(document).ready(function() {
  var randomMatch;
  var sum=0;
  var hiddenValue;
  var userClickedVal;
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

        $("#total").text(sum);
  });



});

