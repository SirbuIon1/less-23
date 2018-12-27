function getText(e) {
  switch (e.target.id) {
    case 'first':
    case 'second':
    case 'third':
      return e.target.innerText;
  }
}

function updateElement(e) {
  let text = getText(e);

  if (text) {
    document.getElementById('result').innerHTML = 'You clicked ' + text + ' button';
  }
}

function showTagName(e) {
  let phaseName = e.eventPhase === 1 ? 'capturing' : 'bubling';
  switch (e.eventPhase) {
    case 1:
      phaseName = 'capturing';
      break;

    case 2:
      phaseName = 'target';
      break;

    case 3:
      phaseName = 'bubling';
      break;
  }

  console.log(phaseName, '', e.target.id, '',e.target.tagName);

}

document.getElementById('button-container').addEventListener('click', updateElement);

document.getElementById('button-container').addEventListener('click', showTagName, false);

document.getElementById('button-container').addEventListener('click', showTagName, true);
