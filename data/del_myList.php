<?php
 header("Content-Type:application/json;charset=utf-8");
require("init.php");

@$pid=$_REQUEST["pid"]or die('{"code":-1,"msg":"编号是必须的"}');

$sql = "DELETE FROM my_music_center WHERE pid=$pid";

$result = mysqli_query($conn,$sql);
if($result){
 echo ('{"code":1,"msg":"删除成功"}');
}
?>