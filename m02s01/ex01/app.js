class Car {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
    this.isTrunkOpen = false;
    this.areLightsOn = false;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  setSpeed(speed = 0) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5 * 1000);
  }
}

const audi = new Car('Audi', 'black', 4, 50);

const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

cars.forEach(function (car) {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`,
  );

  car.setSpeed((car.speed -= 5));

  if (car.speed < 0) {
    car.speed = 0;
  }

  console.log(`Viteza noua este ${car.speed} km/h.`);
  // aici nu cred ca e ok ca nu imi inverzeste pixelltabul
});
