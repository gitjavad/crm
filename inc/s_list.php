<?php
$s_key=$_POST['key'];
$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$ok=array("message" => "true");
$notok=array("message" => "false");
$request_db = array();
$conn = new mysqli($hostname, $user, $pass, $mysql_database);
mysqli_set_charset($conn,'utf8');
$request_db = array();
$sql  = "SELECT *  FROM crm WHERE name LIKE '%$s_key%'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    array_push($request_db,$ok);
    while($row = $result->fetch_assoc()) {

        array_push($request_db,$row);

    }
} else {
    array_push($request_db,$notok);
   
}
printf(json_encode($request_db));