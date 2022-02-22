const startRef = document.querySelector('[data-start]');
// console.log(startRef)
const stopRef = document.querySelector('[data-stop]');
// console.log(stopRef)

startRef.addEventListener('click', startRandomBg);
stopRef.addEventListener('click', stopRandomBg);
stopRef.disabled = true;

let randomColor = null;

function startRandomBg() {
    randomColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startRef.disabled = true;
    stopRef.disabled = false;
}

function stopRandomBg() {
    clearInterval(randomColor);

    startRef.disabled = false;
    stopRef.disabled = true;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
