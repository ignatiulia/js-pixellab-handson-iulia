//Folosind un bloc if si keywordul continue, afiseaza mesajul "Acest numar este multiplu de 7." atunci cand este cazul.

// var i;

// for (i = 0; i <= 100; i++) {
//   console.log(i);

//   if (i % 7 !== 0) {
//     continue;
//   }
//   console.log('Acest numar este multipu de 7');
// }

// Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.”
// Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.” Afla multiplii pentru acest numar intre 1 si 1000.
// Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla si sa afiseze multipli.

var i;
var multipleNumber = window.prompt('Introdu un numar');
var upperLimit = window.prompt('Introdu o limita superioara');

for (i = 0; i <= upperLimit; i++) {
  console.log(i);

  if (i % multipleNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${multipleNumber}.`);
}
