var globalVariable = 'Ma aflu in contextul global';

if (true) {
  var localVariable = 'Ma aflu in contextul local';
  var globalVariable = 'Nu ma aflu in contextul local';

  console.log(globalVariable);
  console.log(localVariable);
}

console.log(globalVariable);

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

console.log(i);
