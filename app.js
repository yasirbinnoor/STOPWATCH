const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let [hr, min, sec] = [0, 0, 0];
let interval = null;

// Format time with leading zeros
const format = (val) => (val < 10 ? "0" + val : val);

const updateDisplay = () => {
    display.textContent = `${format(hr)}:${format(min)}:${format(sec)}`;
};

const startTimer = () => {
    interval = setInterval(() => {
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
            if (min === 60) {
                min = 0;
                hr++;
            }
        }
        updateDisplay();
    }, 1000);

    // Button states
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
};

const stopTimer = () => {
    clearInterval(interval);
    interval = null;

    startBtn.disabled = false;
    stopBtn.disabled = true;
};

const resetTimer = () => {
    clearInterval(interval);
    [hr, min, sec] = [0, 0, 0];
    updateDisplay();

    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
};

// Event Listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Initial display update
updateDisplay();
