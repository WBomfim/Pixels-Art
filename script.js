function createColorInPalette(color) {
  const colorPalette = document.getElementById('color-palette');
  const colorExhibition = document.createElement('div');
  colorExhibition.className = 'color';
  colorExhibition.style.backgroundColor = color;
  colorExhibition.style.border = 'solid black 1px';
  colorExhibition.style.display = 'inline-block';
  colorExhibition.style.width = '40px';
  colorExhibition.style.height = '40px';
  colorExhibition.style.marginLeft = '5px';
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
    pixel.style.display = 'inline-block';
    pixel.style.backgroundColor = 'white';
    pixel.style.border = 'solid black 1px';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.className = 'pixel';

    pixelSquare.appendChild(pixel);
  }
}

addPixelSquare();

function selectedColorBlack() {
  const className = 'color selected';
  const colorBlack = document.querySelectorAll('.color')[0];
  colorBlack.className = className;
  function selectedColor() {
    if (colorBlack.className !== className) {
      colorBlack.className = className;
    } else {
      colorBlack.className = 'color';
    }
  }
  colorBlack.addEventListener('click', selectedColor);
}

selectedColorBlack();
