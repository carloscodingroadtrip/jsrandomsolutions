
      var car = {
        make: "Honda",
        model: "Fit",
        color: "Blue Raspberry",
        mileage: 3000,
        isWorking: true,

        driveToWork: function() {

          alert("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 8;

          alert("New mileage: " + this.mileage);
        },

        driveAroundWorld: function() {

          alert("Old Mileage: " + this.mileage);

          this.mileage = this.mileage + 24000;

          alert("New Mileage: " + this.mileage);
          alert("Car needs a tuneup!");

          this.isWorking = false;
        },

        getTuneUp: function() {
          alert("Car is ready to go!");
          this.isWorking = true;
        },

        honk: function() {
          alert("Honk! Honk!");
        }
      };

document.onkeyup = function(event) { //document.onkeyUp is a method of the document
    console.log(event);
    var x = event.key;  //variable type for event is Object and Key is a property
    if (x === 'h') {
        car.honk();
    } else if (x === 't') {
        car.getTuneUp();
    } else if(x === 'd') {
        car.driveToWork();
    }
};







// var a =1;

//     function consoleLogger(arg){

//          var a = arg;
//          console.log(a);
//          consoleB();  // Calling B

//          function consoleB(xarg) {
//              console.log(a);
//          }
//     }


// consoleLogger('brant');
// console.log(a);