
    // Create an Array of Drinks with all capital letters
    // ...
    var drinks = ["Coke", "Pepsi", "Water", "Orange Juice"];
    // ...

    // console.log("First statement");
    // console.log(drinks[0]);

    // var allCapitals = Array.Of(drinks.toUpperCase());
    // console.log(allCapitals);

    // Then modify each element of the array (individually) to make them lowercase
    // ...
    for ( i=0; i <= drinks.length-1; i++) {
        // console.log("i " + "st " + "statement");
        console.log(drinks[i].toUpperCase());
    }

     // Array of zoo animals.
     var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

    zooObject {
         name: "Zebra",
         heigh: 4,
     }

    // CODE GOES HERE
    // for( var q = 0; q < zooAnimals.length; q++) {
    //     for (var r =0; r < zooAnimals.length; r++) {
    //     console.log("The animal is " + zooAnimals[q]);

    // }

    for (let animal of zooAnimals) {
        console.log(animal);
    }



    // // ...

    // console.log("Second statement");
    // console.log(drinks[0]);
    // console.log(drinks[1]);
    // console.log(drinks[2]);
    // console.log(drinks[3]);
