function paragraphLog(message = '') {
  const cssClass = 'logs';
  let logContainer = document.querySelector(`.${cssClass}`);
  const paragaphElement = document.createElement('p');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add(cssClass);
    document.body.append(logContainer);
  }

  paragaphElement.innerText = message;
  logContainer.append(paragaphElement);
}

console.domlog = paragraphLog;

console.log('Apar in document');
