import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', submitForm);

function submitForm(element) {
  element.preventDefault();

  let formDelay = parseInt(element.currentTarget.delay.value);
  const formStep = parseInt(element.currentTarget.step.value);
  const formAmount = parseInt(element.currentTarget.amount.value);

  for (let i = 1; i <= formAmount; i += 1) {
    callStatusPromise(i, formDelay);
    formDelay += formStep;
  }
}

createPromise(position, delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  });
}
