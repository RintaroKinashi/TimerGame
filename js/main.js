'use strict'

{
  const message = document.getElementById('message');
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  const result = document.getElementById('result');
  const hide = document.getElementById('hide');
  const form_recode = document.getElementById('form_recode');
  const num_target = document.getElementById('num_target');
  const num_diffrrence = document.getElementById('num_diffrrence');

  let startTime;
  let timeoutId;
  let targetTime = Math.floor((Math.random() * 4) + 6);
  let resultTime;
  let diff;

  // 関数
  // カウントアップ関数
  function countUp() {
    const elapsedTime = new Date(Date.now() - startTime);
    const elapsedSeconds = String(elapsedTime.getSeconds()).padStart(2, '0');
    const elapsedMilliSeconds = String(elapsedTime.getMilliseconds()).padStart(3, '0').slice(0, 2);

    resultTime = `${elapsedSeconds}.${elapsedMilliSeconds}`;

    if (elapsedSeconds < 3) {
      timer.textContent = resultTime;
    } else if (elapsedSeconds > 20) {
      clearTimeout(timeoutId);
      resetGame();
    } else {
      timer.textContent = "（☝ ՞ਊ ՞）☝ ｹﾞﾋﾟｬｯ";
      timer.style.fontSize = '20px';
    }
    timeoutId = setTimeout(() => {countUp();}, 10);
  }

  // 結果メッセージ表示
  function showResultMessage(targetTime, resultTime) {
    diff = (resultTime - targetTime).toFixed(2);

    result.innerText = "誤差：" + diff + '秒\n ';
    if (diff === 0) {
      result.insertAdjacentText('beforeend', 'ﾋﾟｯﾀﾘﾀﾞ!ｽｺﾞｲ! ');
    } else if (Math.abs(diff) <= 0.5){
      result.insertAdjacentText('beforeend', 'ｵｼｲ!ｱﾄﾁｮｯﾄ! ');
    } else if (Math.abs(diff) <= 1){
      result.insertAdjacentText('beforeend', 'ｲｲｶﾝｼﾞｨ ');
    } else {
      result.insertAdjacentText('beforeend', 'ﾎﾞｸﾉﾎｳｶﾞｼﾞｮｳｽﾞﾀﾞﾖ ');
    }
    result.insertAdjacentText('beforeend', '٩( ᐛ )و');
  }

  function startGame() {
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  }

  function stopGame() {
    setButtonStateStopped();
    clearTimeout(timeoutId);
    timer.textContent = resultTime;
    timer.style.fontSize = '40px';
    showResultMessage(targetTime, resultTime);
    num_target.value = targetTime;
    num_diffrrence.value = diff;
    // レコード更新時にのみhideを表示する
    hide.style.display="block";
  }

  function resetGame() {
    if (hide.style.display === "block"){
      form_recode.submit();
    } else{
      location.reload();
    };
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
  hide.style.display="none";
  message.innerText = targetTime + ".00秒ピッタリで止めてみましょう！\n3秒後にタイマーが隠れます！";

  if (document.documentElement.clientWidth >= 479) {
    result.innerText = 'Enterｷｰﾀﾞｹﾃﾞｿｳｻﾃﾞｷﾙﾖ〜\n ٩( ᐛ )و';
  }

  start.addEventListener('click', () => {
    if (start.classList.contains('inactive')) return;
    startGame();
  });

  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive')) return;
    stopGame();
  });

  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive')) return;
    resetGame();
  });

  document.addEventListener('keydown', e => {
    if (e.code === "Enter") {
    if (!(start.classList.contains('inactive'))) {
      startGame();
    } else if (!(stop.classList.contains('inactive'))) {
      stopGame();
    } else {
      resetGame();
    }
    }
  })
}
