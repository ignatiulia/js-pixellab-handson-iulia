var person = {
  name: 'Iulia',
  surname: 'Ignat',
  age: 21,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `
  Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului
  `,
);

for (var i = 0; i < person.skills.length; ++i) {
  var skill = person.skills[i];

  if (i % 2 === 0) {
    console.log(skill);
  }
}

console.warn(
  `
  In mod similar, afiseaza skillurile care NU incep cu j.
  `,
);

for (var i = 0; i < person.skills.length; ++i) {
  var skill = person.skills[i];

  if (skill.startsWith('j') !== true) {
    console.log(skill);
  }
}

console.warn(
  `Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy.`,
);

var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  // message + message +
  message += `${friend.name} ${friend.surname}${punctuation}`;
}

console.log(message);

console.warn(`
Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.
`);

var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friendAge = person.friends[i].age;

  if (friendAge >= 30) {
    sumAge += person.friends[i].age;
  }
}

console.log(sumAge.toString());

console.warn(
  `
  Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.
  `,
);

var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var diff = Math.abs(person.age - friend.age);

  if (friend.age % 2 === 0) {
    continue;
  }

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
}
console.log(message.trim());

console.warn(
  `
  Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.
  `,
);

for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(`
  Folosind un for, afiseaza suma anilor de nastere a persoanelor.
`);

var currentYear = new Date().getFullYear();
var sumBirthYear = 0;

for (i = 0; i < person.friends.length; i++) {
  var friendBirthYear = currentYear - person.friends[i].age;
  sumBirthYear += friendBirthYear;
}

console.log(sumBirthYear.toString());

console.warn(`
  Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.
`);

for (i = 0; i < person.friends.length; i++) {
  var diff = person.friends[i].age - person.age;

  if (diff > -2) {
    console.log(diff);
  }
}

console.warn(`
  Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana
`);

for (var i = 0; i < person.skills.length; ++i) {
  var skill = person.skills[i];

  console.log(skill);
}

console.warn(`
  In mod similar, afiseaza skillurile care incep cu c
`);

for (var i = 0; i < person.skills.length; ++i) {
  var skill = person.skills[i];

  if (skill.startsWith('c') == true) {
    console.log(skill);
  }
}

console.warn(`
  Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."
`);

var message = 'Numele de familie ale prietenilor mei sunt: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  message += `${friend.surname}${punctuation}`;
}

console.log(message);

console.warn(`
  Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends
`);

var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friendAge = person.friends[i].age;

  sumAge += person.friends[i].age;
}

console.log(sumAge.toString());

console.warn(`
  Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);

for (i = 0; i < person.friends.length; i++) {
  var diff = person.friends[i].age - person.age;

  console.log(diff.toString());
}

console.warn(`
  Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.
`);

var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var diff = Math.abs(person.age - friend.age);

  message += `Intre ${person.name} si ${friend.name} este o diferenta de ${diff} ani. `;
}
console.log(message.trim());

console.warn(`
  Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).
`);

var message = 'Prietenii mei sunt: ';
for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 3) {
    punctuation = '.';
  }
  // nu stiu daca varianta cu '-3' e cea mai inspirata

  message += `${friend.name} ${friend.surname}${punctuation}`;
}

console.log(message);
