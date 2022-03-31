class Dog {
    constructor(name, fur) {
       this.name = name;
       this.furColor = fur;
       this.legsCount = 4;
       this.hasTale = true;
       this.voiceCount = 0;
    }

    voice() {
        console.log(`${this.name}: au au!! (${++this.voiceCount}) `); 
    }
}

module.exports = Dog;