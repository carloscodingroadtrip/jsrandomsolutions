var numbersArray = ['1-Chris','2-Sergey','3-Donald','4-Tish','5-Ian','6-Cam','7-Mariam','8-David','9-Thais'];


var desiredItem = prompt("Given the array containing\n'1-Chris'\n'2-Sergey'\n'3-Donald'\n'4-Tish'\n'5-Ian'\n'6-Cam'\n'7-Mariam'\n'8-David'\n'9-Thais']\nEnter the array's desired item (1-9) to access:\n(NOT INDEX)");

desiredItem = parseInt(desiredItem);
if(desiredItem > numbersArray.length || desiredItem === 0 || isNaN(desiredItem) || desiredItem < 0) { //evaluate user entry
    document.write("<br>") //Print a new line
    document.write("You selection was invalid, it should have been a number between 1 and 9.");
} else {
    document.write("<br>") //Print a new line
    document.write("You selected item was: " + numbersArray[desiredItem-1]);
}
