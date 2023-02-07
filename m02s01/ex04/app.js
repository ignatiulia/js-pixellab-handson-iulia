class Car {
  areHazardsOn = false;
  areLightsOn = true;

  constructor(
    left = 0,
    top = 0,
    color = 'black',
    tireColor = color,
    capColor = color,
    bodyColor = color,
    roofColor = color,
  ) {
    this.left = left;
    this.top = top;
    this.color = color;

    this.tireColor = tireColor;
    this.capColor = capColor;
    this.bodyColor = bodyColor;
    this.roofColor = roofColor;

    this.intervalId = -1;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');

    this.changePosition(this.left, this.top);

    this.createFragment();

    this.changeTireColor(this.tireColor);
    this.changeCapColor(this.capColor);
    this.changeBodyColor(this.bodyColor);
    this.changeRoofColor(this.roofColor);
  }

  createFragment() {
    this.car = this.createElement('div', ['car']);
    this.frame.append(this.car);

    // roof
    this.carTop = this.createElement('div', ['car__top']);
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // body
    this.carBody = this.createElement('div', ['car__body']);
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // light back
    this.lightBack = this.createElement('div', ['light', 'light--back']);
    this.carBody.append(this.lightBack);

    // light front
    this.lightFront = this.createElement('div', ['light', 'light--front']);
    this.carBody.append(this.lightFront);

    // wheel back
    this.wheelBack = this.createElement('div', [
      'wheel',
      'car__wheel',
      'car__wheel--back',
    ]);
    this.carBody.append(this.wheelBack);
    this.wheelCapBack = this.createElement('div', ['wheel__cap']);
    this.wheelBack.append(this.wheelCapBack);

    // wheel front
    this.wheelFront = this.createElement('div', [
      'wheel',
      'car__wheel',
      'car__wheel--front',
    ]);
    this.carBody.append(this.wheelFront);
    this.wheelCapFront = this.createElement('div', ['wheel__cap']);
    this.wheelFront.append(this.wheelCapFront);
  }

  turnLightsOn() {
    // this.lightFront.style.backgroundColor = 'yellow';
    this.lightsFront.classList.add('light--on');
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.lightFront.classList.remove('light--on');
    this.areLightsOn = false;
  }

  // Creeaza metode numite engageBreak() si disenagageBreak() care vor aprinde respectiv stinge farul din spate.
  // Creeaza o metoda numita toggleHazards() care sa functioneze ca avarie si sa aprinda si sa stinga farurile repetat. Foloseste o proprietate numita areHazardsOn pentru a putea tine cont de statusul sistemului. (google setInterval)

  disengageBreak() {
    this.lightBack.classList.remove('light-on');

    return this;
  }

  engageBreak() {
    this.lightBack.classList.add('light-on');

    return this;
  }

  toggleHazards() {
    if (this.areHazardsOn === true) {
      clearInterval(this.intervalId);
      this.areHazardsOn = false;
    } else {
      this.intervalId = setInterval(() => {
        if (this.areLightsOn === true) {
          this.turnLightsOff;
        } else {
          this.turnLightsOn();
        }
      }, 1000 * 60 * 60);
      this.areHazardsOn = true;
    }

    return this;
  }

  changePosition(left = 0, top = 0) {
    this.frame.style.left = `${left}px`;
    this.frame.style.top = `${top}px`;
  }

  changeTireColor(tireColor) {
    this.wheelBack.style.backgroundColor = tireColor;
    this.wheelFront.style.backgroundColor = tireColor;

    return this;
  }

  changeCapColor(capColor) {
    this.wheelCapBack.style.backgroundColor = capColor;
    this.wheelCapFront.style.backgroundColor = capColor;

    return this;
  }

  changeBodyColor(bodyColor) {
    this.carBody.style.backgroundColor = bodyColor;
    this.carBody.style.backgroundColor = bodyColor;

    return this;
  }

  changeRoofColor(roofColor) {
    this.carTop.style.backgroundColor = roofColor;
    this.carTop.style.backgroundColor = roofColor;

    return this;
  }

  createElement(nodeName = '', classListArray = []) {
    const element = document.createElement(nodeName);
    // element.classList.add(...classListArray);

    classListArray.forEach((className) => {
      element.classList.add(className);
    });

    return element;
  }

  render() {
    document.body.append(this.frame);

    return this;
  }
}
const car = new Car(8, 250, 'turquoise', 'black', 'gray', 'darkblue');
car.render();
