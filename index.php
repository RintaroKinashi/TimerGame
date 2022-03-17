<?php
// 表示時にランキングへ出力する処理

require 'php/database.php';

$dbh = getDatabaseConnection();


try {
  $stmt = $dbh->query("SELECT * FROM r_score ORDER BY insert_time desc");
  $recodes = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (Throwable $e) {
  echo $e->getMessage();
  exit;
}

function h($str)
{
  return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

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

  <div class="container">
    <p>\ 誤差0.05秒以内レコード /</p>
    <center>
      <table id="score_table">
        <tr id="score_table_header">
          <th>誤差</th>
          <th>名前</th>
          <th>目標値</th>
          <th>時刻</th>
        </tr>
        <?php foreach ($recodes as $recode) {
        ?>
          <tr>
            <td><?php echo h($recode['num_diffrrence']); ?></td>
            <td><?php echo h($recode['txt_name']); ?></td>
            <td><?php echo h($recode['num_target']); ?></td>
            <td><?php echo h($recode['insert_time']); ?></td>
          </tr>
        <?php }
        ?>
      </table>
    </center>
  </div>
</body>

<footer>
  <ul id="footerbar">
    <p>©2022 <a href="https://twitter.com/1119rinritu">@1119rinritu</a></p>
  </ul>
</footer>

</html>
