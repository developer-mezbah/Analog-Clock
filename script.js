function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');

    const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteDeg = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondDeg = (360 / 60) * seconds;

    hourElement.style.transform = `rotate(${hourDeg}deg)`;
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
    secondElement.style.transform = `rotate(${secondDeg}deg)`;
}

function startClock() {
    updateClock();
    setInterval(updateClock, 1000); 
}

document.addEventListener('DOMContentLoaded', startClock);