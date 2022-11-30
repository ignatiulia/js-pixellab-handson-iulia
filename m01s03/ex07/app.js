var person = {
  firstName: 'Iulia',
  lastName: 'Ignat',
  email: 'ignatiulia@example.com',
  birthYear: 2001,
  zipCode: '123231',
  pets: [
    {
      name: 'Rafi',
      species: 'pisica',
      age: 2,
    },

    {
      name: 'Chowder',
      species: 'caine',
      age: 5,
    },

    {
      name: 'Nemo',
      species: 'peste',
      age: 1,
    },
  ],
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2`,
);

console.log((2022 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana
  si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`,
);

console.log((2022 - person.birthYear - person.pets[0].age).toString());

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.
`);

var petName = person.pets[0].name;
difference = (2022 - person.birthYear - person.pets[0].age).toString();

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

console.warn(`
Folosind metoda document.getElementById() afiseaza urmatoarele 5 afirmatii despre obiectul person.
`);

var messageElement = document.getElementById('prop01');
var message = ' ';

message = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name} si ${person.pets[2].name} locuiesc toti in aceeasi casa.`;
messageElement.innerText = message;
console.log(message);

console.warn(`
Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2
`);

var message02Element02 = document.getElementById('prop02');
var message02 = ' ';
var difference02 = person.pets[2].age - person.pets[0].age;

message02 = `Diferenta de varsta dintre ${person.pets[0].name} si ${person.pets[2].name} este de ${difference02} ani.`;
message02Element02.innerText = message02;
console.log(message02);

console.warn(`
Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode
`);

var message03Element03 = document.getElementById('prop03');
var message03 = ' ';

message03 = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este ${person.zipCode}.`;
message03Element03.innerText = message03;
console.log(message);

console.warn(
  `Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. `,
);

var message04Element04 = document.getElementById('prop04');
var message04 = ' ';

message04 = `Animalele mele s-au nascut in ${2022 - person.pets[0].age}, ${
  2022 - person.pets[1].age
}, respectiv ${2022 - person.pets[2].age}.`;

message04Element04.innerText = message04;
console.log(message);
