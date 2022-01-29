console.log('Js file connected');

var count = 1;
var timer;

const watchCount = document.getElementById('watch_count');
const startButton = document.getElementById('watch_count_start');
const stopButton = document.getElementById('watch_count_stop');

startButton.addEventListener('click', () => {
    start();
});

stopButton.addEventListener('click', () => {
    stop();
});

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
    count = 0;
    setCount(0);
    console.log('stopped');
}

function setCount(countNumber) {
    watchCount.innerText = countNumber;
}
