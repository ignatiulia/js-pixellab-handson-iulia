const button = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove-event');

function clickHandler() {
  alert('Ai apasat butonul!');
}

//Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler si foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime.

button.addEventListener('click', clickHandler);

// La click pe acest buton nou, foloseste metoda removeEventListener al variabilei button si foloseste numele clickHandler ca parametru.
removeEventButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

console.warn(`
  Adauga un buton nou in document cu id-ul query si folosind
  addEventListener() ataseaza un eveniment care sa foloseasca metoda
  prompt() pentru a afla varsta utilizatorului.
  Salveaza rezultatul metodei prompt intr-o variabila si afiseaza
  in consola folosind template strings: “Ai aa ani.”.
  Creaza un paragraf cu idul message si folosind
  getElementById('message') stocheaza elementul intr-o variabila
  (paragraphElement), apoi folosind innerText, afiseaza mesajul de
  mai devreme in acest paragraf.
`);

const secondButton = document.getElementById('query');
const paragraphMessage = document.getElementById(`message`);

secondButton.addEventListener('click', function () {
  var age = window.prompt('Cati ani ai?');

  console.log(`Ai ${age} ani.`);
  paragraphMessage.innerText = `Ai ${age} ani.`;
});

// aici a mers practic dar nu stiu daca e ok
