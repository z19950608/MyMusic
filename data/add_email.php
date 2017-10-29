<?php
  header("Content-Type:application/json;charset=utf-8");
    @$email=$_REQUEST["email"]or die('{"code":0,"msg":"用户编号是必须的"}');
    @$uname=$_REQUEST["uname"]or die('{"code":-1,"msg":"用户编号是必须的"}');
    @$upwd=$_REQUEST["upwd"]or die('{"code":-2,"msg":"产品编号是必须的"}');
    @$tel=$_REQUEST["tel"]or die('{"code":-2,"msg":"产品编号是必须的"}');
    require("init.php");
    $sql = "INSERT INTO music_user VALUES(null,'$uname','$upwd','$tel')";
    $result = mysqli_query($conn,$sql);
    $id=mysqli_insert_id($conn);
    $sql1 = "INSERT INTO music_email VALUES(null,'$email','$id')";
     $result = mysqli_query($conn,$sql1);
   if($result){
      echo '{"code":1,"msg":"注册成功"}';
   }
  ?>