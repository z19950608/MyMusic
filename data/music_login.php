﻿<?php
	header("Content-Type:text/html;charset=utf-8");
	@$uname = $_REQUEST["uname"]or die('{"code":-1,"msg":"用户名是必须的"}');
	@$upwd = $_REQUEST["upwd"]or die('{"code":-3,"msg":"，密码是必须的"}');
	//$conn = mysqli_connect(SAE_MYSQL_HOST_M,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB,SAE_MYSQL_PORT);
	//mysqli_query($conn,"SET NAMES UTF8");
	require("init.php");
	$sql = "SELECT * FROM music_user WHERE uname='$uname' AND upwd='$upwd'";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	echo json_encode($row);
?>