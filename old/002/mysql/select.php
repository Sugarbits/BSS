<?php
header('Content-Type: text/html; charset=utf-8');
require("mysql.inc.php");


include("../include/JSON.php");
// Future-friendly json_encode
if( !function_exists('json_encode') ) {
    function json_encode($data) {
        $json = new Services_JSON();
        return( $json->encode($data) );
    }
}
// Future-friendly json_decode
if( !function_exists('json_decode') ) {
    function json_decode($data) {
        $json = new Services_JSON();
        return( $json->decode($data) );
    }
}
 
///判斷式壓縮
//$arr = array('listType');
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

//if(_f($arr)==true){

$UsingTable ='list';	

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_query($conn, 'SET NAMES utf8');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = " 
		SELECT * FROM list  
		";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
		$rows = array();
		while($r = mysqli_fetch_assoc($result)) {
			$rows[$r['listId']] = $r;
		}
		print json_encode($rows);
} else {
    //echo 1;
    echo $sql;
}

$conn->close();
   

/*}else{
	echo -1;
}*/

?>