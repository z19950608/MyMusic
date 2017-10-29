<?php
header("Content-Type:application/json;charset=utf-8");
require("init.php");
  @$uname=$_REQUEST["uname"]or die('{"code":-1,"msg":"用户编号是必须的"}');
  @$upwd=$_REQUEST["upwd"]or die('{"code":-2,"msg":"产品编号是必须的"}');
  @$tel=$_REQUEST["tel"]or die('{"code":-2,"msg":"产品编号是必须的"}');
  $sql = "INSERT INTO music_user VALUES(null,'$uname','$upwd','$tel')";
  $result = mysqli_query($conn,$sql);
 if($result){
    echo '{"code":1,"msg":"注册成功"}';
 }
?>