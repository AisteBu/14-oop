const Pet = require('./Pet');

class Rabbit extends Pet {
    constructor(name, fur) {
        super(name, fur);
       this.sound = 'nom nom';
    }

    voice() {
        console.log(`${this.name}: ${this.sound}!!`); 
    }
}

module.exports = Rabbit;