var userInput = prompt('Cum te numesti?');
var message = '';
var messageElement01 = document.getElementById('mess01');
var messageElement02 = document.getElementById('mess02');
var messageElement03 = document.getElementById('mess03');

messageElement01.innerText = `Numele meu este: ${userInput}.`;
messageElement02.innerText = `Numele introdus are ${userInput.length} caractere.`;

var message03 = ' ';
if (userInput === null || userInput.trim().length === 0) {
  message = 'Nu ai introdus numele tau.';
} else {
  if (userInput.includes('a') === true) {
    message03 = 'Numele introdus contine litera a.';
  } else {
    message03 = 'Numele introdus nu contine litera a.';
  }
}
console.log(message03);
messageElement03.innerText = message03;
