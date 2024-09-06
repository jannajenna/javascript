export default class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        //this.isRunning = false;
    }

    getCarInfo() {
        console.log('Make:' + this.make + '-' + 'Model:' + this.model + '-' + 'Year:' + this.year);
    }

    start() {
        this.isRunning = true;
        return ('The car has started.')
    }

    stop() {
        this.isRunning = false;
        return ('The car has stoped')
    }


}

