<?php
$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$conn = new mysqli($hostname, $user, $pass, $mysql_database);
mysqli_set_charset($conn,'utf8');
$username=$_POST['code'];
$password=$_POST['pass'];
/*$sql = "SELECT code FROM crm_login WHERE code='$username' AND pass='$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
      echo '{ "message": "true" }';
        $suc=true;
    }
} else {
    $suc=false;
    echo '{ "message": "false1" }';
}

/*if ($suc) {*/
echo '{ "message": "TRUE1" }';
    /*$sql = "SELECT code_product, material, price_co, price_custom, company, des FROM crm";
    $result = $conn->query($sql);
    $request_db = array();

    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {

           array_push($request_db,$row);
            echo '{ "message": "TRUE" }';
        }
    } else {
        echo '{ "message": "false2" }';
    }


$conn->close();
/*echo json_encode($request_db);*/