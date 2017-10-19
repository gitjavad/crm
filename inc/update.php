<?php
$e_text=$_POST['text'];
$e_id=$_POST['id'];
$e_col=$_POST['col'];

$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$request_db = array();
$ok=array("success" => "true");
$notok=array("success" => "false");
$conn = new mysqli($hostname, $user, $pass, $mysql_database);
mysqli_set_charset($conn,'utf8');
$request_db = array();
switch ($e_col) {
    case 0:
        $e_col_name='code_product';
        break;
    case 1:
        $e_col_name='name';
        break;
    case 2:
        $e_col_name='company';
        break;
    case 3:
        $e_col_name='price_co';
        break;
    case 4:
        $e_col_name='material';
        break;
    case 5:
        $e_col_name='des';
        break;

}
$sql  = "UPDATE crm SET ".$e_col_name." = '".$e_text."' WHERE crm.ID = '".$e_id."'";
$result = $conn->query($sql);
if ($conn->query($sql) === TRUE) {
    array_push($request_db,$ok) ;
} else {
    array_push($request_db,$notok) ;
}
printf(json_encode($request_db));













