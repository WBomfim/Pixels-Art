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

function addPixelSquare() {
  const pixelSquare = document.getElementById('pixel-board');
  for (let index = 1; index <= 25; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelSquare.appendChild(pixel);
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
  addPixelSquare();
  colorPalette.addEventListener('click', colorSelected);
  pixelBoard.addEventListener('click', paintPixel);
  buttonClear.addEventListener('click', clearAllPixels);
};
