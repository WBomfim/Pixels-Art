window.onload = function selectBlackColorFirst() {
  const colorBlack = document.querySelectorAll('.color')[0];
  colorBlack.className = 'color selected';
};

function createColorInPalette(color) {
  const colorPalette = document.getElementById('color-palette');
  const colorExhibition = document.createElement('div');
  colorExhibition.className = 'color';
  colorExhibition.style.backgroundColor = color;
  colorPalette.appendChild(colorExhibition);
}

createColorInPalette('black');
createColorInPalette('red');
createColorInPalette('blue');
createColorInPalette('green');

function addPixelSquare() {
  const pixelSquare = document.getElementById('pixel-board');
  for (let index = 1; index <= 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelSquare.appendChild(pixel);
  }
}

addPixelSquare();

function selectedColor() {
  const colors = document.querySelectorAll('.color');
  const colorPalette = document.querySelector('#color-palette');
  function changeClass() {
    for (let index = 0; index < colors.length; index += 1) {
      if (colors[index].className !== 'selected') {
        colors[index].className = 'color';
        event.target.className = 'color selected';
      }
    }
  }
  colorPalette.addEventListener('click', changeClass);
}

selectedColor();

function paintPixel() {
  const pixels = document.querySelector('#pixel-board');
  function paint() {
    const colors = document.getElementsByClassName('selected');
    event.target.style.backgroundColor = colors[0].style.backgroundColor;
  }
  pixels.addEventListener('click', paint);
}

paintPixel();

function createButtonClear() {
  const divBottunClear = document.getElementById('button-clear');
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  divBottunClear.appendChild(button);
}

createButtonClear();

function clearPixel() {
  const buttonClear = document.getElementById('clear-board');
  function clearAll() {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  }
  buttonClear.addEventListener('click', clearAll);
}

clearPixel();
