// Simple stopwatch implementation
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const timer = document.querySelector(".timer");

let intervalID = null; // holds setInterval id
let elapsed = 0; // elapsed milliseconds while running
let lastStart = null; // timestamp when started

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
  if (intervalID) return; // already running
  lastStart = Date.now();
  intervalID = setInterval(updateDisplay, 250); // update 4x/s
}

function stop() {
  if (!intervalID) return; // not running
  clearInterval(intervalID);
  intervalID = null;
  elapsed += Date.now() - lastStart;
  lastStart = null;
  updateDisplay();
}

function reset() {
  clearInterval(intervalID);
  intervalID = null;
  elapsed = 0;
  lastStart = null;
  timer.textContent = "00:00:00";
}

function updateDisplay() {
  const total = elapsed + (lastStart ? Date.now() - lastStart : 0);
  const hrs = Math.floor(total / (1000 * 60 * 60));
  const mins = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((total % (1000 * 60)) / 1000);
  timer.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(n) {
  return String(n).padStart(2, "0");
}
