const Car = {
  make: ' ',
  color: ' ',
  wheels: 0,
  speed: 0,
  topSpeed: 140,
  topReverseSpeed: 50,
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed++;
    this.displaySpeed();
  },
  decelerate: function () {
    this.speed--;
    this.displaySpeed();
  },

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;

      this.displaySpeed();
      return;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;

    this.displaySpeed();
  },

  turnLightsOn() {
    this.areLightsOn = true;
  },

  turnLightsOff() {
    this.areLightsOn = false;
  },

  flashLights() {
    this.turnLightsOn();
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 2 * 1000);
  },
};

var audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheel = 4;
audi.speed = 0;

console.log(audi);

// Adauga metoda setSpeed(), proprietatile topSpeed si topReverseSpeed si implementeaza protectiile deja cunoscute.
// Seteaza topSpeed la 140 apoi ruleaza metoda setSpeed() pentru a face viteza curenta 140.
// Ruleaza metoda accelerate().
// Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().

audi.setSpeed(140);
audi.accelerate();
