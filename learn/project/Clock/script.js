setInterval(setClock, 1000); // 设置调用的延迟

const hourHand = document.querySelector('[data-hour-hand]');
const minuyeHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date(); // 当前日期
    const secondRatio = currentDate.getSeconds() / 60; // 旋转一周的百分比
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondRatio);
    setRotation(minuyeHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', String(rotationRatio * 360));
}

setClock()