console.warn(`
  Creeaza o functie overloaded pentru calcularea suprafetelor numita
  calculateSurface. Daca primeste un parametru, sa calculeze suprafata
  unui patrat. Daca primeste doi, a unui dreptunghi.
  Daca primeste trei, sa calculeze suprafata totala a paralelipipedului.
  Foloseste structura switch.
`);

function calculateSurface(l, w, h) {
  if (arguments.length === 1) {
    return Math.pow(l, 2);
  } else if (arguments.length === 2) {
    return w * l;
  }

  switch (arguments.length) {
    case 3:
      return 2 * l * w + 2 * l * h + 2 * w * h;
  }
}

// aici oare e ok sa fie pus switch ul in functie cu if?

console.warn(`
  Creeaza o functie numita calculateCircleArea() si afiseaza suprafata
  unor cercuri cu raza de 2, 20 si 16.
`);

function calculateCircleArea(r) {
  return Math.PI * Math.pow(r, 2);
}

console.log(
  calculateCircleArea(2),
  calculateCircleArea(20),
  calculateCircleArea(16),
);

console.warn(`
  Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
  Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
  Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”
`);

const pet = {
  getName: () => {
    return 'Rafitic';
  },

  getSpecies: () => {
    return 'pisica';
  },

  getAge: () => {
    return 2;
  },
};

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

const petAge = pet.getAge();

console.log(`Animalul meu are ${petAge} ani.`);
