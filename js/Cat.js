export default class Cat {
    constructor(naming, color, breed) {
        this.naming = naming;
        this.color = color;
        this.breed = breed;
    }

    bio() {
        console.log('This is' + ' ' + this.naming + ' ' + 'and is' + ' ' + this.color + ' ' + 'and is a' + ' ' + this.breed);
    }



}


