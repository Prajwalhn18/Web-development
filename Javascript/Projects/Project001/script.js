console.log('Js file connected');

var count = 1;
var timer;

const watchCount = document.getElementById('watch_count');
const startButton = document.getElementById('watch_count_start');
const stopButton = document.getElementById('watch_count_stop');
const resetButton = document.getElementById('watch_count_reset');

startButton.addEventListener('click', () => {
    start();
});

stopButton.addEventListener('click', () => {
    stop();
});

resetButton.addEventListener('click', resetCounter);

function start() {
    timer = setInterval(() => {
        let currentCount = count++;
        setCount(currentCount);
    }, 1000);

    startButton.disabled = true;
}

function stop() {
    startButton.disabled = false;
    clearInterval(timer);
    console.log('stopped');
}

function setCount(countNumber) {
    watchCount.innerText = countNumber;
}

function resetCounter() {
    count = 0;
    setCount(0);
}
