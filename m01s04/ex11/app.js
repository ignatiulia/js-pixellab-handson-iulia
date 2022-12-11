var person = {
  name: 'Iulia',
  surname: 'Ignat',
  age: 21,
  petOwner: true,

  skills: {
    html: true,
    css: true,
    javaScript: false,
  },

  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },

    larry: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },

    larry: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

var skillKeys = Object.keys(person.skills);
skillKeys.forEach(function (key) {
  if (person.skill[key] === true) {
    console.log(`${person.name} cunoaste: ${key}.`);
  }
});
