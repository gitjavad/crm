<?php
$s_key=$_POST['key'];
$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$conn = new mysqli($hostname, $user, $pass, $mysql_database);
mysqli_set_charset($conn,'utf8');
$request_db = array();
$sql  = "UPDATE crm SET code_product = '1111-100' WHERE crm.ID = '1'";
$result = $conn->query($sql);
if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}













