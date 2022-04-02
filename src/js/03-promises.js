const formRef = document.querySelector('.form');

formRef.addEventListener('submit', submitForm);

function submitForm(element) {
  element.preventDefault();

  let formDelay = parseInt(element.currentTarget.delay.value);
  const formStep = parseInt(element.currentTarget.step.value);
  const formAmount = parseInt(element.currentTarget.amount.value);

  for (let i = 1; i <= formAmount; i += 1) {
    formDelay += formStep;
  }

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
