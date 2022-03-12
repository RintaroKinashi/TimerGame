<?php

// データのinsert処理を格納する
require 'database.php';

$dbh = getDatabaseConnection();

$user_name = $_POST['txt_name'];

// test
// echo $user_name . "</br>";
// echo date("Y/m/d H:i:s") . "</br>";
// echo $_POST['num_diffrrence'] . "</br>";
// echo $_POST['num_target'] . "</br>";

try {
  if (strlen($user_name) < 3) {
    $user_name = "通りすがりの挑戦者";
  }
  $stmt = $dbh->prepare("INSERT INTO r_score VALUES(
      :num_diffrrence,
      :txt_name,
      :num_target,
      :insert_time
  )");
  $stmt->bindParam(':num_diffrrence', $_POST['num_diffrrence']);
  $stmt->bindParam(':txt_name', $user_name);
  $stmt->bindParam(':num_target', $_POST['num_target']);
  $stmt->bindParam(':insert_time', date("Y/m/d H:i:s"));
  $stmt->execute();
} catch (Throwable $e) {
  echo $e->getMessage();
  exit;
}

header("Location: ../index.php");
exit();
