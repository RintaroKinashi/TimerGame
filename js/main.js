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
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }

  function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }

  function setButtonStateStopped() {
    start.disabled = true;
    stop.disabled = true;
    reset.disabled = false;
  }

  // イベント

  setButtonStateInitial();

  start.addEventListener('click', () => {
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    setButtonStateStopped();
    clearTimeout(timeoutId);
  });

  reset.addEventListener('click', () => {
    setButtonStateInitial();
    timer.textContent = '00.000';
  });
}
