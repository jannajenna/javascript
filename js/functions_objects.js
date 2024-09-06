//Name
function person(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
};


// Rectangle area
function area(lenght, width) {
    return lenght * width
};

let rectangle = area(2, 3);

console.log(rectangle);

//Speed
function distance(speed, time) {
    return speed * time
}

let travelling = distance(5, 6)

console.log("You have travelled" + " " + travelling + "km.")

//Calculator

const calculator = {
    owner: 'Anna',
    theName: function person(firstName, lastName) {
        console.log(firstName + ' ' + lastName)
    },
    theArea: function area(lenght, width) {
        return lenght * width
    },
    theSpeed: function distance(speed, time) {
        return speed * time
    }
};

calculator.theName('Lenny', 'Leonard');

let test1 = calculator.theArea(30, 20);
console.log(test1);

let test2 = calculator.theSpeed(40, 60)
console.log(test2);

