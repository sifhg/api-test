function updateTime() {
    const TIMER = document.getElementById('timer');
    const NOW = new Date();
    let TIME = NOW.toLocaleTimeString();
    TIMER.innerText = TIME;
}

setInterval(updateTime, 100);