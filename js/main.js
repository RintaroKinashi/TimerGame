'use strict'

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;

  // 関数

  function countUp() {
    const elapsedTime = new Date(Date.now() - startTime);
    const elapsedSeconds = String(elapsedTime.getSeconds()).padStart(2, '0');
    const elapsedMilliSeconds = String(elapsedTime.getMilliseconds()).padStart(3, '0');

    timer.textContent = `${elapsedSeconds}.${elapsedMilliSeconds}`;

    timeoutId = setTimeout(() => {countUp();}, 10);
  }

  function setButtonStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  function setButtonStateRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  function setButtonStateStopped() {
    start.classList.add('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  // イベント

  setButtonStateInitial();

  start.addEventListener('click', () => {
    if (start.classList.contains('inactive')) return;
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive')) return;
    setButtonStateStopped();
    clearTimeout(timeoutId);
  });

  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive')) return;
    setButtonStateInitial();
    timer.textContent = '00.000';
  });
}
