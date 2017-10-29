<?php
  header("Content-Type:application/json;charset=utf-8");
  require("init.php");
  @$pid=$_REQUEST["pid"]or die('{"code":-1,"msg":"产品编号是必须的"}');
  @$uid=$_REQUEST["uid"]or die('{"code":-1,"msg":"兄弟你还没有登录呢，不能添加到个人中心"}');
  $sql = "INSERT INTO my_music_center VALUES(null,$uid,$pid)";
  $result = mysqli_query($conn,$sql);
 if($result){
   echo '{"code":1,"msg":"添加我的个人歌单成功"}';
  }
?>