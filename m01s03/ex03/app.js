var person = {
  name: 'Iulia',
  surname: 'Ignat',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

larry.friends.steven = steven;
steven.friends.larry = larry;

andra.friends.steven = steven;
steven.friends.andra = andra;

andra.friends.carol = carol;
carol.friends.andra = andra;

delete larry.friends.person;
delete person.friends.larry;

console.warn(`
Afiseaza numele complet al lui Person folosind obiectul Larry.
`);

console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

console.log(
  carol.friends.andra.friends.person.name +
    ' ' +
    carol.friends.andra.friends.person.surname,
);

console.log(
  (
    andra.friends.person.name.length + andra.friends.person.surname.length
  ).toString(),
);
