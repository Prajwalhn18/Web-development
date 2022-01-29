console.log('Js file connected');

var count = 0;

const watchCount = document.getElementById('watch_count');
const startButton = document.getElementById('watch_count_start');

function start() {
    setInterval(() => {
        let currentCount = count++;
        watchCount.innerText = currentCount;
    }, 1000);
}

startButton.addEventListener('click', () => {
    start();
});
