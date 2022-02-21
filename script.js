const colorPalette = document.querySelector('#color-palette');
function createColorInPalette(color) {
  const colorExhibition = document.createElement('div');
  colorExhibition.className = 'color';
  colorExhibition.style.backgroundColor = color;
  colorPalette.appendChild(colorExhibition);
}

createColorInPalette('black');
createColorInPalette('red');
createColorInPalette('blue');
createColorInPalette('green');

function selectBlackColorFirst() {
  const colorBlack = document.querySelectorAll('.color')[0];
  colorBlack.className = 'color selected';
}

function addPixelSquare(size) {
  const pixelSquare = document.getElementById('pixel-board');
  for (let index1 = 0; index1 < size; index1 += 1) {
    const lineBoard = document.createElement('div');
    lineBoard.className = 'lineBoard';
    pixelSquare.appendChild(lineBoard);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const lineBoardaa = document.querySelectorAll('.lineBoard')[index1];
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lineBoardaa.appendChild(pixel);
    }
  }
}

const inputBoard = document.querySelector('#board-size');
const buttonVQV = document.querySelector('#generate-board');

function boardSize() {
  const inputValue = inputBoard.value;
  document.querySelector('#pixel-board').innerHTML = '';
  if (inputValue > 5 && inputValue < 50) {
    addPixelSquare(inputValue);
  } else if (inputValue === '') {
    alert('Board inválido!');
  }
}

const colors = document.querySelectorAll('.color');

function changeColors(event) {
  const eventSelect = event;
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className !== 'selected') {
      colors[index].className = 'color';
      eventSelect.target.className = 'color selected';
    }
  }
}

function colorSelected(event) {
  if (event.target.className === 'color') {
    changeColors(event);
  }
}

const pixelBoard = document.querySelector('#pixel-board');

function paintPixel(event) {
  const eventPaint = event;
  const colorsClass = document.querySelector('.selected');
  eventPaint.target.style.backgroundColor = colorsClass.style.backgroundColor;
}

const buttonClear = document.getElementById('clear-board');

function clearAllPixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

window.onload = function loadingEvents() {
  selectBlackColorFirst();
  addPixelSquare(5);
  buttonVQV.addEventListener('click', boardSize);
  colorPalette.addEventListener('click', colorSelected);
  pixelBoard.addEventListener('click', paintPixel);
  buttonClear.addEventListener('click', clearAllPixels);
};
