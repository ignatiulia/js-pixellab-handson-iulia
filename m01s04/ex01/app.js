var userInput = prompt('Introdu un numar');
var referenceNumber = 20;
var message = ' ';
var messageElement = document.getElementById('message');
var number = Number(userInput);

if (userInput === null || userInput.trim().length === 0 || isNaN(number)) {
  message = 'Nu ai introdus un numar';
} else {
  if (number > 20) {
    message = 'Numarul este mai mare decat 20';
  } else if (number === 20) {
    message = 'Numarul este mai mic decat 20';
  } else {
    message = 'Numarul este mai mic decat 20';
  }
}

console.log(message);
messageElement.innerText = message;
