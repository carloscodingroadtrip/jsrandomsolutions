
var numbersArray = ['1','2','3','4','5','6','7','8','9'];
document.write("<br>")

var desiredItem = prompt("Given the array containing ['1','2','3','4','5','6','7','8','9'] \nEnter the array's desired item (NOT INDEX) to access: ");
desiredItem = parseInt(desiredItem);
if(desiredItem > numbersArray.length || desiredItem === 0) {
    document.write("You selection was invalid");
} else {
    document.write("You selected item: " + numbersArray[desiredItem-1]);
}
