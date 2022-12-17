// Modifica exemplul astfel incat bucla sa
// numere de la 1 la 100.
//  Ce se intampla daca i este initializat cu valoarea 101?
// Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).

// var i = 1;

// // while (i <= 100) {
// //   console.log(i);

// //   i++;
// // }

// // while (i < 100) {
// //   console.log(i);

// //   i++;
// // }

// while (i < 100) {
//   i++;

//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// }

// console.warn(`
//   Modifica exemplul astfel incat bucla sa numere de la 1 la 67.
// `);

// var i = 1;

// while (i <= 67) {
//   console.log(i);

//   i++;
// }

// console.warn(`
//   Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
// `);

// var i = 1;

// while (i < 67) {
//   i++;
//   console.log(i);

//   if (i === 12) {
//     break;
//   }
// }

// Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).

// var i = 1;

// while (i < 32) {
//   i++;

//   if (i % 2 === 0) {
//     console.log(i);
//     continue;
//   }
// }

// Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.

var i = lowerLimit;
var multipleNumber = window.prompt('Introdu un numar');
var upperLimit = window.prompt('Introdu o limita superioara');

while (i <= upperLimit) {
  i++;

  if (i % multipleNumber !== 0) {
    console.log(i);
  }
}

// aici chiar nu stiu cum ar trebui facut
