// Modifica exemplul astfel incat bucla sa numere de la 1 la 100.
// Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
// Folosind keywordul continue afiseaza doar numerele pare intre 1 si 100 (inclusiv 100).
// In mod similar, afiseaza doar numerele care sunt divizibile cu 5.

// for (var i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (var i = 1; i < 100; i++) {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// }

// for (var i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// for (var i = 1; i <= 100; i++) {
//   if (i % 5 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 89. (<= 89)

// for (var i = 1; i <= 89; i++) {
//   console.log(i);
// }

// // Modifica exemplul astfel incat bucla sa numere de la 1 la 88 . (< 89 )
// // Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.

// for (var i = 1; i < 89; i++) {
//   console.log(i);

//   if (i === 42) {
//     break;
//   }
// }

// Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89.

// for (var i = 1; i <= 89; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }

//   console.log(i);
// }

// In mod similar, afiseaza doar numerele care sunt divizibile cu 3.

for (var i = 1; i <= 89; i++) {
  if (i % 3 !== 0) {
    continue;
  }

  console.log(i);
}
