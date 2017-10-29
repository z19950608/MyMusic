<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
  @$uid=$_REQUEST["uid"]or die('{"code":-1,"msg":"用户编号是必须的"}');
	$sql = "SELECT count(*) as page FROM my_music_center where uid=$uid";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	echo json_encode($row);
?>