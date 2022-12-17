// var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// do {
//   i++;

//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// } while (i < 100);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 52

// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

// Modifica exemplul astfel incat bucla sa numere de la 1 la 51.

// do {
//   console.log(i);
//   i++;
// } while (i < 52);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)

// do {
//   i++;
//   console.log(i);

//   if (i === 12) {
//     break;
//   }
// } while (i < 100);

// Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.

// var i = 7;

// do {
//   i++;

//   if (i % 2 !== 0) {
//     console.log(i);
//     // a durat ceva pana mi am dat seama ca trebuia sa pun console.log ul aici
//     continue;
//   }
// } while (i < 32);

// Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.

var multipleNumber = window.prompt('Introdu un numar');
var upperLimit = window.prompt('Introdu o limita superioara');
var lowerLimit = window.prompt('Introdu o limita inferioara');
var i = lowerLimit;

do {
  i++;
  if (i % multipleNumber == 0) {
    console.log(i);
  }
} while (i < upperLimit);

// nici asta nu stiu daca e ok
