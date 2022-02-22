const startRef = document.querySelector('[data-start]');
// console.log(startRef)
const stopRef = document.querySelector('[data-stop]');
// console.log(stopRef)

startRef.addEventListener('click', startRandomBg);
stopRef.addEventListener('click', stopRandomBg);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
