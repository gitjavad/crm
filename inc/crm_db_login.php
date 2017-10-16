<?php
$username=$_POST['code'];
$password=$_POST['pass'];
printf($username);
$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$conn = new mysqli($hostname, $user, $pass, $mysql_database);
mysqli_set_charset($conn,'utf8');

$sql = "SELECT code FROM crm_login WHERE code='$username' AND pass='$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

        $suc=true;

    }
} else {
    $suc=false;


}

if ($suc) {
    $sql = "SELECT code_product, material, price_co, price_custom, company, des FROM crm";
    $result = $conn->query($sql);
    $request_db = array();

    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {

            array_push($request_db, $row);

        }
    } else {
        echo '{ "message": "false2" }';
    }

}
$conn->close();
if(count($request_db)>0){
    printf(json_encode($request_db));
}
