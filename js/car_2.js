import Car from "./Car.js";

const car2 = new Car('Bug', 'Seat', '1980');
car2.getCarInfo();
//console.log(car2.stop());
//console.log(car2.start());
console.log(car2.start());
console.log('isRunning?', car2.isRunning);

console.log(car2.stop());
console.log('isRunning?', car2.isRunning);

const car3 = new Car('Firefly', 'Audi', '1990');
car3.getCarInfo();
//console.log(car3.stop());
//console.log(car3.start());
