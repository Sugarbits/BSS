﻿<?php
header('Content-Type: text/html; charset=utf-8');
require("mysql.inc.php");
///判斷式壓縮
$arr = array('batchName','batchDate','batchSp');
function _f($arr){#函數命名「_f」，需要改進關鍵：一次性
	$_temp=true;
	foreach($arr as $val){
		$_temp &= isset($_GET[$val]) ? ($_GET[$val]!=NULL) : false ;
		if($_temp == false) break;
		global $$val;	
		$$val = $_GET[$val];		
	}
	return $_temp;
}
///判斷式壓縮_END



if(_f($arr)==true){

$UsingTable ='batch';	

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_query($conn, 'SET NAMES utf8');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO ".$UsingTable." (batchName, batchDate, batchSp)
VALUES ('".$batchName."', '".$batchDate."', '".$batchSp."');";


if ($conn->multi_query($sql) === TRUE) {
    //echo "New records created successfully";
   // echo 0;
   echo mysqli_insert_id($conn);
   //$conn->multi_query(SELECT LAST_INSERT_ID);
} else {
   // echo "Error: " . $sql . "<br>" . $conn->error;
    echo -1;
}

$conn->close();
   

}else{
	echo -2;
}

?>