import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenValidData(selectedDates[0]);
  },
};

flatpickr(input, options);

let chosenData = Date.now();
btnStart.disabled = true;

function chosenValidData(selData) {
    if (Date.now() > selData) { 
        window.alert("Please choose a date in the future")
        return
    }
    btnStart.disabled = false;
};