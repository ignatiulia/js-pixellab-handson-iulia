const person = {
  getName: function () {
    return 'Iulia Ignat';
  },
  getAge: function () {
    return 21;
  },
};

const personName = accessor('Name');
const personAge = accessor('Age');
const currentYear = new Date().getFullYear();
const birthYear = currentYear - accessor('Age');

function accessor(methodSuffix) {
  const methodName = 'get' + methodSuffix;
  return person[methodName]();
}

function accessor(methodSuffix) {
  const methodAge = 'get' + methodSuffix;
  return person[methodAge]();
}

console.warn(`
Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);

console.log('Eu sunt ' + personName + '.');

console.warn(`
  Afiseaza anul de nastere al persoanei folosind anul curent.
`);

console.log((currentYear - accessor('Age')).toString());

console.warn(`
Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”
`);

console.log(
  'Ma numesc ' +
    accessor('Name') +
    ', am ' +
    accessor('Age') +
    ' ani si m-am nascut in anul ' +
    birthYear +
    '.',
);

console.warn(`
  Folosind accesorul afiseaza numele persoanei.
`);

console.log(accessor('Name'));

console.warn(`
  Afiseaza varsta persoanei.
`);

console.log(accessor('Age'));

console.warn(`
  Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”
`);

console.log('M-am nascut in ' + (currentYear - personAge) + '.');

console.warn(`
  Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);

console.log('Ma numesc ' + personName + ' si am ' + personAge + ' ani!');
