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
  const colors = document.querySelectorAll('.color');
  colors[0].className = 'color selected';
  function selectedColor() {
    for (let index = 0; index < colors.length; index += 1) {
      if (colors[index].className !== 'selected') {
        colors[index].className = 'color';
        event.target.className = 'color selected';
      }
    }
  }
  colors[0].addEventListener('click', selectedColor);
}

function selectedColorRed() {
  const colors = document.querySelectorAll('.color');
  function selectedColor() {
    for (let index = 0; index < colors.length; index += 1) {
      if (colors[index].className !== 'selected') {
        colors[index].className = 'color';
        event.target.className = 'color selected';
      }
    }
  }
  colors[1].addEventListener('click', selectedColor);
}

function selectedColorBlue() {
  const colors = document.querySelectorAll('.color');
  function selectedColor() {
    for (let index = 0; index < colors.length; index += 1) {
      if (colors[index].className !== 'selected') {
        colors[index].className = 'color';
        event.target.className = 'color selected';
      }
    }
  }
  colors[2].addEventListener('click', selectedColor);
}

function selectedColorGreen() {
  const colors = document.querySelectorAll('.color');
  const colorPalette = document.querySelector('#color-palette')
  function selectedColor() {
    for (let index = 0; index < colors.length; index += 1) {
      if (colors[index].className !== 'selected') {
        colors[index].className = 'color';
        event.target.className = 'color selected';
      }
    }
  }
  colorPalette.addEventListener('click', selectedColor);
}

selectedColorBlack();
selectedColorRed();
selectedColorBlue();
selectedColorGreen();

const pixels = document.querySelector('#pixel-board');
function paintPixel() {
  const colors = document.getElementsByClassName('selected');
  event.target.style.backgroundColor = colors[0].style.backgroundColor;
}

pixels.addEventListener('click', paintPixel);
