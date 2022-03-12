<?php
// 表示時にランキングへ出力する処理

// $stmt = $dbh->prepare("SELECT * FROM r_answer");
// $stmt->execute();
// $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8" name="viewport" content="width=device-width,initial-scale=1">
  <title>TimerGame!</title>
  <link rel="stylesheet" href="css/styles.css">
</head>

<body>
  <div class="container">
    <div id="message"></div>
    <div id="timer">00.00</div>
    <div id="result">ﾔｯﾃﾐﾖｳ!<br>٩( ᐛ )و</div>
    <div class="btns">
      <div class="btn" id="start">スタート</div>
      <div class="btn" id="stop">ストップ</div>
      <div class="btn" id="reset">もう一回</div>
    </div>
  </div>

  <div class="container" id="hide">
    <p>\new record!/ 記録を残そう！</p>
    <form action="php/insert.php" method="post" name="recode" id="form_recode">
      <input type="hidden" name="num_diffrrence" id="num_diffrrence"></input>
      なまえ : <input type="text" class="playerName" name="txt_name" placeholder="名前を入力する..."></input>
      <input type="hidden" name="num_target" id="num_target"></input>
      <input type="submit" value="登録" id="send-recode">
    </form>

  </div>

  <script src=" js/main.js">
  </script>
</body>

<footer>
  <ul id="footerbar">
    <p>©2022 <a href="https://twitter.com/1119rinritu">@1119rinritu</a></p>
  </ul>
</footer>

</html>
