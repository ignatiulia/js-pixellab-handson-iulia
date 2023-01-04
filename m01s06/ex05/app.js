(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const removeButton = document.querySelectorSelector('#removeButton');
    let eventBound = true;

    showButton.addEventListener('click', showAlert);
    showMessage('Alerta va fi afisata');

    removeButton.addEventListener('click', function () {
      if (!confirm('Stergem butoanele?')) {
        return;
      }

      toggleEventButton.remove();
      showButton.remove();
    });
    toggleEventButton.addEventListener('click', function () {
      let message = '';
      let label = '';

      if (eventBound) {
        showButton.removeEventListener('click', showAlert);
        eventBound = false;
        message = 'Porneste afisarea';
        label = 'Alerta va fi afisata';
      } else {
        showButton.removeEventListener('click', showAlert);
        eventBound = true;
        message = 'Opreste afisarea';
        label = 'Alerta NU va fi afisata';
      }

      this.innerText = message;
      showMessage(label);
    });

    function showAlert() {
      alert('Butonul a fost pasat');
    }

    function showMessage(message) {
      let paragraphElemnt = document.querySelector('.message');

      paragraphElemnt.innerText = message;
      paragraphElemnt.classList.add('message');

      document.body.append(paragraphElemnt);
    }
  });
})();
