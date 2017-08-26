<?php
header('Content-Type: text/html; charset=utf-8');
require("mysql.inc.php");

function replaceLastMatch($str, $search, $replace) {
    $pattern = sprintf('~%s(?!.*%1$s)~', $search);
    return preg_replace($pattern, $replace, $str, 1);
}//ref//http://stackoverflow.com/questions/23916667/replace-only-the-last-match-using-preg-replace
/*$str = "hello, world, hello!";
echo replaceLastMatch($str, 'h\w{4}', 'replacement');
echo replaceLastMatch($str, 'hello', 'replacement');
*/

$UsingTable ='item';

//echo $_POST['content'];
$dump_array = (json_decode($_POST['content'])); 
$SQLstr = "INSERT INTO ".$UsingTable." (`itemId`, `itemAid`, `itemAmount`, `itemTotal`, `itemBatchid`) VALUES ";
foreach($dump_array as $k => $val){
//print_r($val->id);
$SQLstr .= " (NULL, '".$val->id."', '".$val->amount."', '".$val->total."', '".(-1)."')";
$SQLstr .= ",";
}
$SQLstr = replaceLastMatch($SQLstr,',',';');
//echo $SQLstr;
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_query($conn, 'SET NAMES utf8');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

/*"INSERT INTO `item` (`itemId`, `itemAid`, `itemAmount`, `itemTotal`, `itemBatchid`) VALUES "
(NULL, '1', '10', '100', '1'), (NULL, '2', '12', '140', '1');

$sql = "INSERT INTO ".$UsingTable." (listName, listType, listUnit)
VALUES ('".$listName."', '".$listType."', '".$listUnit."');";
*/

if ($conn->multi_query($SQLstr) === TRUE) {
    //echo "New records created successfully";
    echo 0;
} else {
   // echo "Error: " . $sql . "<br>" . $conn->error;
    echo 1;
}

$conn->close();
   


?>