<?php
$s_key=$_POST['key'];
$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$conn = new mysqli($hostname, $user, $pass, $mysql_database);
mysqli_set_charset($conn,'utf8');
$request_db = array();
$sql  = "SELECT *  FROM crm WHERE code_product LIKE '%$s_key%'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
        $suc = true;
        array_push($request_db,$row);

    }
} else {
    $suc=false;
   
}
printf(json_encode($request_db));