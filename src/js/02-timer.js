import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let chosenDate = Date.now();
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenValidDate(selectedDates[0]);
  },
};

flatpickr(input, options);

btnStart.disabled = true;
btnStart.addEventListener('click', startTimer)

function chosenValidDate(selData) {
    if (Date.now() > selData) { 
        Notify.warning('Ей КАСАТІКІ, потрібно вибрати дату в майбутньому');
      return;
    }
  btnStart.disabled = false;
  chosenDate = selData;
};

function startTimer() {
  btnStart.disabled = true;
  input.disabled = true;
  
  timerId = setInterval(() => {
    const outTime = chosenDate - Date.now();

    const finTime = convertMs(outTime);
    
    if (outTime <= 0 ) {
      clearInterval(timerId);
      input.disabled = false;
      return;
  }
     changeTimerValue(finTime); 
  }, 1000);   
}

function changeTimerValue({ days, hours, minutes, seconds }) {
    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}