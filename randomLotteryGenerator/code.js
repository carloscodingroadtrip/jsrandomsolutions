$(document).ready(function() {

  // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
  // ...

  //

  function generateANumber () {
    var abc = Math.floor(Math.random() * 500 ) + 100;
    $("#please-display-my-number").text(abc);
  }
  generateANumber();

  $("#random-button").on("click", function () {
    var abc = Math.floor(Math.random() * 50 ) + 200;
    $("#crystal1").val(abc.toString());

  });

  $("#buttons").on("click", function (e) {
    console.log(e.target);
    // let current = e.target.value;
    // console.log(current);
  });


  // function crystalNumbers () {
  //   var mycrystalnumber = Math.floor(Math.random() * 30 ) + 100;
  //   return mycrystalnumber;
  // }
  // ...
  //I need a loop that will go to my page
  //and
  //it will grap each button id ( #crystal1, crystal2)
  //
  // it

});