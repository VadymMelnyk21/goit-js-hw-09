const startRef = document.querySelector('[data-start]');
// console.log(startRef)
const stopRef = document.querySelector('[data-stop]');
// console.log(stopRef)
let randomColor = null;

startRef.addEventListener('click', startRandomBg);
stopRef.addEventListener('click', stopRandomBg);

function startRandomBg() {
    randomColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        console.log('hello')
    }, 1000);
}

function stopRandomBg() {
    clearInterval(randomColor);
    console.log('stop')
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
