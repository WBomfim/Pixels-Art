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
