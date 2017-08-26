<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bss001";
if(! @mysql_connect($servername,$username,$password))
	die("無法連線資料庫");
	
mysql_query("SET NAMES utf8");

if(!@mysql_select_db($dbname))
die("無法使用資料庫")
?>