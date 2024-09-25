const blueSpan = document.getElementById('blue');
const blackSpan = document.getElementById('black');
const redSpan = document.getElementById('red');
const whiteSpan = document.getElementById('white');

function changeColor(color) {
  document.body.style.background = `linear-gradient(${color},#266da3ad)`;
}

blueSpan.addEventListener('click', function () {
    changeColor('#266da3');
});

blackSpan.addEventListener('click', function () {
    changeColor('black');
});

redSpan.addEventListener('click', function () {
    changeColor('red');
});

whiteSpan.addEventListener('click', function () {
    changeColor('white');
});

