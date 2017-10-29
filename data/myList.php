<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
@$uid=$_REQUEST["uid"]or die('{"code":0,"msg":"用户编号是必须的"}');
@$page=$_REQUEST["page"];
@$pagenum=$_REQUEST["pagenum"];
$offset=($page)*$pagenum;
$sql ="SELECT * FROM music_product p,my_music_center m where m.pid=p.pid && uid=$uid LIMIT $offset,$pagenum";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);
?>