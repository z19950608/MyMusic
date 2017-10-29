<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
@$page=$_REQUEST["page"];
@$pagenum=$_REQUEST["pagenum"];
$offset=($page)*$pagenum;
$sql ="SELECT * FROM music_product";
$sql .=" LIMIT $offset,$pagenum";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);
?>