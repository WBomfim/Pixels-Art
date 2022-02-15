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
