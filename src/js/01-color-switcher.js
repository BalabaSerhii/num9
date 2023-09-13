const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const bodyEl = document.body;

start.addEventListener('click', chen);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function chen() {
  test = setInterval(
    () => (bodyEl.style.backgroundColor = getRandomHexColor()),
    1000
  );
  stop.disabled = false;
  start.disabled = true;
}

stop.addEventListener('click', finish);

function finish() {
  clearInterval(test);
  start.disabled = false;
  stop.disabled = true;
}
