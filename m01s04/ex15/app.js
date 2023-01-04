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

console.warn(`
  Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested) afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
  Poti folosi metoda pentru a converti numerele negative in pozitive.
`);

var message = '';
var secondMessage = '';
var friend = person.friends;

for (var i = 0; i < person.friends.length; i++) {
  for (var x = i + 1; x < person.friends.length; x++) {
    var diff = Math.abs(friend[i].age - friend[x].age);

    message = `Intre ${friend[x].name} si ${friend[i].name} este o diferenta de ${diff} ani.`;
    console.log(message);

    secondMessage = `Intre ${friend[i].name} si ${friend[x].name} este o diferenta de ${diff} ani.`;
    console.log(secondMessage);
  }
}

// oare era aici alta varianta sa imi dea si combinatiile de nume inversate? (ex: Intre Carol si Larry / Intre Larry si Carol)
