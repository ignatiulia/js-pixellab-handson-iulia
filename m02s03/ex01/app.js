class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 1;

    return this;
  }

  decelerate() {
    this.speed = this.speed - 1;

    return this;
  }
}

const audi = new Car('audi', 'black', 4, 50);
