function duplicateCount(text){
    // will convert the text to an object
    const myTextObject = {};
    let max = 0;

    //iterate through the string and populate our object
    for (let character of text) {
        if (myTextObject[character]) {
            myTextObject[character]++;
        } else {
            myTextObject[character] = 1;
        }
    }
    var result = console.table(myTextObject);
    return result;
}
console.log('Mississippi');
duplicateCount('Mississippi');

