var eatsteak = confirm("Do you like to eat steak?");
if(eatsteak) {
    document.write("Here’s a Steak Sandwich!");
    document.write("<br>");
} else {
    document.write("Here’s a Tofu Stir-Fry!");
    document.write("<br>");
}

//BONUS
var userAgeInput = prompt('Please also enter your birth year?');
var currYear = new Date().getFullYear(); // get the year (four digits)
var userAge = currYear - parseInt(userAgeInput);
if(userAge >= 21 ) {
    document.write("Woo hoo, you are " + userAge + " years old, and you deserve some Sake!");
} else {
    document.write("But no, no sake for you! You're only " + userAge + " years old.");
}

