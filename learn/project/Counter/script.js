const decreaseButton = document.querySelector('[data-decrease]');
const resetButton = document.querySelector('[data-reset]');
const increaseButton = document.querySelector('[data-increase]');
const numberText = document.querySelector('.number');

resetButton.addEventListener('click', () => {
    numberText.innerHTML = '0';
})
decreaseButton.addEventListener('click', () => {
    numberText.innerHTML = (Number(numberText.innerHTML) - 1).toString();
    if (Number(numberText.innerHTML) < 0) {
        numberText.style.color = 'red';
    } else if(Number(numberText.innerHTML) === 0) {
        numberText.style.color = 'black';
    }
})
increaseButton.addEventListener('click', () => {
    numberText.innerHTML = (Number(numberText.innerHTML) + 1).toString();
    if (Number(numberText.innerHTML) > 0) {
        numberText.style.color = 'green';
    } else if(Number(numberText.innerHTML) === 0) {
        numberText.style.color = 'black';
    }
})
