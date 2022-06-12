const button = document.body.querySelector('button');
const colorTextElement = document.body.querySelector('span');
const body = document.body;

function randomColor() {
    let res = '#';
    let charSet = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        res += charSet.at(Math.floor(Math.random() * 16));
    }
    return res;
}

colorTextElement.innerHTML = randomColor();
body.style.backgroundColor = randomColor();

button.addEventListener('click', () => {
    colorTextElement.innerHTML = randomColor();
    body.style.backgroundColor = randomColor();
});