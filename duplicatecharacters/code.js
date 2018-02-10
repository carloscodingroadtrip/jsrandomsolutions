function duplicateCount(text){
    // will convert the text to an object
    const myTextObject = {};
    let max = 0;
    let duplicateChar = '';
    let singleChar = '';

    //iterate through the string and populate our object
    for (let character of text) {
        if (myTextObject[character]) {
            myTextObject[character]++;
        } else {
            myTextObject[character] = 1;
        }
    }
    //iterate through the Object and populate the max character
    for (let character in myTextObject) {
        if (myTextObject[character] > max) {
            max = myTextObject[character];
            duplicateChar = character;
        }
    }
    console.table(myTextObject);

    return {
        duplicateChar : duplicateChar,
        singleChar: singleChar
    };

}

var result = duplicateCount('Mississippi');
var data = result.entries();
console.log(data.next().value);