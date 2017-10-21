<?php
$username=$_GET['code'];
$password=$_GET['pass'];
$hostname="localhost";
$user = "hirad_admin15023";
$pass= "9133647736!@#";
$mysql_database = "hirad-co_com_site";
$conn = new mysqli($hostname, $user, $pass, $mysql_database);
mysqli_set_charset($conn,'utf8');
$request_db = array();

$sql = "SELECT code FROM crm_login WHERE code='$username' AND pass='$password'";
$result = $conn->query($sql);
$ok=array("message" => "true");
$notok=array("message" => "false");
if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {

        $suc = true;


    }
} else {
    $suc=false;

    array_push($request_db,$notok);
}


if ($suc) {
    $sql = "SELECT type FROM crm_login WHERE code='".$username."'";

    $result = $conn->query($sql);
    if ($result->num_rows>0){
        while($row = $result->fetch_assoc()) {
            if ($row['type']=="admin"){

                $ok=array("message" => "true","type"=>"admin");
                array_push($request_db,$ok);
            }else{
                $ok=array("message" => "true","type"=>"noadmin");
                array_push($request_db,$ok);
            }}}

    else {
        echo "0 results";
    }


    $sql = "SELECT code_product, material, price_co, price_custom, company, des, name FROM crm";
    $result = $conn->query($sql);


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
